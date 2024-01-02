import axios from "axios";
import { Dispatch, RefObject } from "react";
import { downloadConvertedFile } from "../downloadFile";
import type { errors as _ } from "../../content";
import { AnyAction } from "@reduxjs/toolkit";
// import { shallow } from "zustand"
import {
  resetErrorMessage,
  setErrorMessage,
  setIsSubmitted,
  setShowDownloadBtn,
} from "../store";

// this is the handleUpload function that is calling the download function maybe the issue is here
export const handleUpload = async (
  downloadBtn: RefObject<HTMLAnchorElement> | null,
  dispatch: Dispatch<AnyAction>,
  state: {
    path: string;
    errorMessage: string;
  },
  errors: _,
  filesLengthOnSubmit: number,
  setFilesLengthOnSubmit: (value: number) => void,
  data: {
    files?: File[];
    stateFiles?: { name: string; size: number; url: string }[];
    document_name?: string;
    markdown?: string;
  },
  e?: React.FormEvent<HTMLFormElement>
) => {
  if (e) {
    e?.preventDefault();
  }
  dispatch(setIsSubmitted(true));
  const { document_name, files, stateFiles, markdown } = data;
  if (!files) return;
  // subscribe to the files state and get the previous files
  if (filesLengthOnSubmit == files.length && markdown?.length === 0) {
    dispatch(setShowDownloadBtn(true));
    dispatch(resetErrorMessage());
    return;
  }

  const formData = new FormData();
  for (let i = 0; i < files.length; i++) {
    formData.append("files", files[i]);
  }
  formData.append("selectedGithubMarkdownUrls", JSON.stringify(stateFiles));
  formData.append("markdown", JSON.stringify({ markdown }));

  // formData.append("document_name", JSON.stringify(document_name));
  let url;
  // @ts-ignore
  if (process.env.NODE_ENV === "development") {
    url = `https://5000-planetcreat-pdfequipsap-o51h4y0fppz.ws-eu106.gitpod.io/api/${state.path}`;
    // url = `https://5000-planetcreat-pdfequipsap-te4zoi6qkr3.ws-eu102.gitpod.io/${state.path}`;
  } else {
    url = `/api/${state.path}`;
  }
  if (state.errorMessage) {
    return;
  }
  // formData.append("compress_amount", String(state.compressPdf));
  const originalFileName =
    files[0]?.name?.split(".").slice(0, -1).join(".") || document_name;

  const mimeTypeLookupTable: {
    [key: string]: { outputFileMimeType: string; outputFileName: string };
  } = {
    "application/zip": {
      outputFileMimeType: "application/zip",
      outputFileName: `PDFEquips-${state.path}.zip`,
    },
    "application/pdf": {
      outputFileMimeType: "application/pdf",
      outputFileName: `${originalFileName}.pdf`,
    },
  };

  try {
    const response = await axios.post(url, formData, {
      responseType: "arraybuffer",
    });
    
    // const originalFileName = files[0]?.name?.split(".").slice(0, -1).join(".");
    const mimeType = response.data.type || response.headers["content-type"];
    const mimeTypeData = mimeTypeLookupTable[mimeType] || {
      outputFileMimeType: mimeType,
      outputFileName: "",
    };
    const { outputFileMimeType, outputFileName } = mimeTypeData;

    dispatch(setShowDownloadBtn(true));
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
    setFilesLengthOnSubmit(files.length);

    if (response.status !== 200) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      dispatch(resetErrorMessage());
      dispatch(setIsSubmitted(false));
    }
  } catch (error) {
    // 
    // @ts-ignore
    const dataView = new DataView(error.response.data);
    const decoder = new TextDecoder("utf8");
    );
    ));
    if ((error as { code: string }).code === "ERR_NETWORK") {
      dispatch(setErrorMessage(errors.ERR_NETWORK.message));
      return;
    }
    dispatch(setIsSubmitted(false));
  } finally {
    dispatch(setIsSubmitted(false));
  }
};
