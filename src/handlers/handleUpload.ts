import axios from "axios";
import { Dispatch, RefObject } from "react";
import { downloadConvertedFile } from "../downloadFile";
import type { errors as _ } from "../../content";
import { AnyAction } from "@reduxjs/toolkit";
import { ToolState, resetErrorMessage, setField } from "../store";

let prevState = {} as {
  stateFiles?: { name: string; size: number; url: string }[];
  markdown?: string;
  options: ToolState["options"]
};

export const handleUpload = async (
  downloadBtn: RefObject<HTMLAnchorElement> | null,
  dispatch: Dispatch<AnyAction>,
  state: {
    path: string;
    errorMessage: string;
  },
  errors: _,
  filesOnSubmit: string[],
  setFilesOnSubmit: (value: string[]) => void,
  data: {
    files?: File[];
    stateFiles?: { name: string; size: number; url: string }[];
    document_name?: string;
    markdown?: string;
    options: ToolState["options"];
  },
  e?: React.FormEvent<HTMLFormElement>
) => {
  if (e) {
    e?.preventDefault();
  }
  dispatch(setField({ isSubmitted: true }));
  const { document_name, files, stateFiles, markdown, options } = data;
  let originalFileName = null;
  const formData = new FormData();
  if (files && files.length) {
    const fileNames = files.map((file) => file.name);
    // Check if every file name in files is present in filesOnSubmit
    const allFilesPresent = fileNames.every((fileName) =>
      filesOnSubmit.includes(fileName)
    );
    if (
      (allFilesPresent && files.length === filesOnSubmit.length) ||
      (prevState?.stateFiles === stateFiles && prevState?.markdown === markdown)
    ) {
      dispatch(setField({ showDownloadBtn: true }));
      dispatch(resetErrorMessage());
      return;
    }
    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }
    originalFileName =
      files[0]?.name?.split(".").slice(0, -1).join(".") || document_name;
  }

  formData.append("selectedGithubMarkdownUrls", JSON.stringify(stateFiles));
  formData.append("markdown", JSON.stringify({ markdown }));
  formData.append("options", JSON.stringify({ options }));

  let url;
  if (process.env.NODE_ENV === "development") {
    url = `http://207.180.196.128:4001/api/${state.path}`;
  } else {
    url = `/api/${state.path}`;
  }
  if (state.errorMessage) {
    console.log("returning errormessage:", state.errorMessage);
    // return;
  }
  // formData.append("compress_amount", String(state.compressPdf));

  const mimeTypeLookupTable: {
    [key: string]: { outputFileMimeType: string; outputFileName: string };
  } = {
    "application/zip": {
      outputFileMimeType: "application/zip",
      outputFileName: `PDFEquips-${state.path}.zip`,
    },
    "application/pdf": {
      outputFileMimeType: "application/pdf",
      outputFileName: `${originalFileName || document_name}.pdf`,
    },
  };

  try {
    const response = await axios.post(url, formData, {
      responseType: "arraybuffer",
    });
    console.log("RESPONSE ==>", response);

    // const originalFileName = files[0]?.name?.split(".").slice(0, -1).join(".");
    const mimeType = response.data.type || response.headers["content-type"];
    const mimeTypeData = mimeTypeLookupTable[mimeType] || {
      outputFileMimeType: mimeType,
      outputFileName: "",
    };
    const { outputFileMimeType, outputFileName } = mimeTypeData;

    dispatch(setField({ showDownloadBtn: true }));
    if (downloadBtn)
      downloadConvertedFile(
        response,
        outputFileMimeType,
        outputFileName
          ? outputFileName === document_name
            ? outputFileName + ".pdf"
            : outputFileName
          : "output.pdf",
        downloadBtn
      );
    if (files) {
      setFilesOnSubmit(files.map((f) => f.name));
    }
    // set prevState to the current state
    prevState = { stateFiles, markdown, options };

    if (response.status !== 200) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      dispatch(resetErrorMessage());
      dispatch(setField({ isSubmitted: false }));
    }
  } catch (error) {
    // const dataView = new DataView(error!.response!.data);
    // const decoder = new TextDecoder("utf8");
    if ((error as { code: string }).code === "ERR_NETWORK") {
      dispatch(setField({ errorMessage: errors.ERR_NETWORK.message }));
      return;
    }
    dispatch(setField({ isSubmitted: false }));
  } finally {
    dispatch(setField({ isSubmitted: false }));
  }
};
