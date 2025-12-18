import axios from "axios";
import { downloadConvertedFile } from "../downloadFile";
import type { errors as _ } from "../content";
import { type RefObject } from "react";
import { resetErrorMessage, setField, type compressionType } from "../store";
import type { Action, Dispatch } from "@reduxjs/toolkit/react";
let filesOnSubmit = [];
let prevState = null;
export const handleUpload = async (
  e: React.FormEvent<HTMLFormElement>,
  downloadBtn: RefObject<HTMLAnchorElement>,
  dispatch: Dispatch<Action>,
  state: {
    path: string;
    errorMessage: string;
    fileName: string;
    rotations: {
      k: string;
      r: number;
    }[];
    passwords: {
      k: string;
      p: string;
    }[];
    compressPdf: compressionType;
  },
  files: File[],
  errors: _
) => {
  e.preventDefault();
  dispatch(setField({ isSubmitted: true }));

  if (!files) return;
  // Extract file names from the File[] array
  const fileNames = files.map((file) => file.name);

  // Check if every file name in files is present in filesOnSubmit
  const allFilesPresent = fileNames.every((fileName) =>
    filesOnSubmit.includes(fileName)
  );
  const strState = JSON.stringify(state);
  if (
    allFilesPresent &&
    files.length === filesOnSubmit.length &&
    prevState === strState
  ) {
    dispatch(setField({ showDownloadBtn: true }));
    dispatch(resetErrorMessage());
    return;
  }
  prevState = strState;

  const formData = new FormData();
  for (let i = 0; i < files.length; i++) {
    formData.append("files", files[i]);
  }
  formData.append("rotations", JSON.stringify(state.rotations));
  formData.append("passwords", JSON.stringify(state.passwords));
  let url: string = "";
  // @ts-ignore
  if (process.env.NODE_ENV === "development") {
    url = `http://localhost:8000/api/compress-pdf`;
  } else {
    url = `/api/compress-pdf`;
  }
  if (state.errorMessage) {
    return;
  }
  formData.append("compress_amount", String(state.compressPdf));
  const originalFileName =
    state.fileName || files[0]?.name?.split(".").slice(0, -1).join(".");

  const mimeTypeLookupTable: {
    [key: string]: { outputFileMimeType: string; outputFileName: string };
  } = {
    "application/zip": {
      outputFileMimeType: "application/zip",
      outputFileName: `${originalFileName || "PDFEquips"}-compressed.zip`,
    },
    "application/pdf": {
      outputFileMimeType: "application/pdf",
      outputFileName: `${originalFileName}.pdf`,
    },
    "application/msword": {
      outputFileMimeType: "application/msword",
      outputFileName: `${originalFileName}.docx`,
    },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": {
      outputFileMimeType:
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      outputFileName: `${originalFileName}.docx`,
    },
    "application/vnd.ms-excel": {
      outputFileMimeType: "application/vnd.ms-excel",
      outputFileName: `${originalFileName}.xlsx`,
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": {
      outputFileMimeType:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      outputFileName: `${originalFileName}.xlsx`,
    },
    "application/vnd.ms-powerpoint": {
      outputFileMimeType: "application/vnd.ms-powerpoint",
      outputFileName: `${originalFileName}.pptx`,
    },
    "application/vnd.openxmlformats-officedocument.presentationml.presentation":
    {
      outputFileMimeType:
        "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      outputFileName: `${originalFileName}.pptx`,
    },
    "text/plain": {
      outputFileMimeType: "text/plain",
      outputFileName: `${originalFileName}.txt`,
    },
  };

  try {
    const response = await axios.post(url, formData, {
      responseType: "arraybuffer",
      withCredentials: true
    });
    // const originalFileName = files[0]?.name?.split(".").slice(0, -1).join(".");
    const mimeType = response.data.type || response.headers["content-type"];
    const mimeTypeData = mimeTypeLookupTable[mimeType] || {
      outputFileMimeType: mimeType,
      outputFileName: "",
    };
    const { outputFileMimeType, outputFileName } = mimeTypeData;
    const compressedFileSize = response.data.byteLength;

    // Dispatch the compressed file size to Redux store
    dispatch(
      setField({
        compressedFileSize: compressedFileSize,
      })
    );

    dispatch(setField({ showDownloadBtn: true }));
    downloadConvertedFile(
      response,
      outputFileMimeType,
      outputFileName,
      downloadBtn
    );
    filesOnSubmit = files.map((f) => f.name);

    if (response.status !== 200) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      dispatch(resetErrorMessage());
      dispatch(setField({ isSubmitted: false }));
    }
  } catch (error) {
    if ((error as { code: string }).code === "ERR_NETWORK") {
      dispatch(setField({ errorMessage: errors.ERR_NETWORK.message }));
      return;
    }
    dispatch(setField({ isSubmitted: false }));
  } finally {
    dispatch(setField({ isSubmitted: false }));
  }
};
