import axios from "axios";
import type { errors as _ } from "../content";
import { type RefObject } from "react";
import { resetErrorMessage, setField, type ThemeName } from "../store";
import type { Action, Dispatch } from "@reduxjs/toolkit/react";
import { parseApiError } from "../parseApiError";
import { toast } from "react-toastify";
import { increaseDailySiteUsage } from "fetch-subscription-status";

let filesOnSubmit: string[] = [];
let prevState: string | null = null;

export const handleUpload = async (
  e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
  downloadBtn: RefObject<HTMLAnchorElement> | null,
  dispatch: Dispatch<Action>,
  state: {
    path: string;
    errorMessage: string;
    fileName: string;
    rotations: {
      k: string;
      r: number;
    }[];
    subscriptionStatus: boolean | null,
  },
  files: File[],
  errors: _,
  options: {
    theme: ThemeName;
    screenSize: string;
    orientation: "Portrait" | "Landscape";
    pageSize: "A4" | "Letter" | "Legal" | "A3" | "A5" | "US Letter";
    pageMargin: "No margin" | "Small" | "Big";
    fontSize: number;
  },
  markdown?: string,
  stateFiles?: {
    name: string;
    size: number;
    url: string;
  }[],
) => {
  if (e) {
    e.preventDefault();
  }

  dispatch(setField({ isSubmitted: true }));

  // Validate inputs
  if (!files && state.path !== "md-text-to-pdf") {
    dispatch(setField({ isSubmitted: false }));
    return;
  }

  // For md-text-to-pdf, require markdown content
  if (state.path === "md-text-to-pdf" && !markdown) {
    dispatch(setField({
      errorMessage: "Markdown content is required",
      isSubmitted: false
    }));
    return;
  }

  // Check if this is a duplicate submission
  const fileNames = files ? files.map((file) => file.name) : [];
  const allFilesPresent = fileNames.every((fileName) =>
    filesOnSubmit.includes(fileName)
  );
  const strState = JSON.stringify(state);

  if (
    allFilesPresent &&
    files?.length === filesOnSubmit.length &&
    prevState === strState &&
    state.path !== "md-text-to-pdf"
  ) {
    dispatch(setField({ showDownloadBtn: true }));
    dispatch(resetErrorMessage());
    dispatch(setField({ isSubmitted: false }));
    return;
  }

  prevState = strState;

  // Build FormData with proper JSON formatting
  const formData = new FormData();

  try {
    // Add files if present
    if (files && files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        formData.append("files", files[i]);
      }
    }

    // Add rotations (always as JSON array)
    formData.append("rotations", JSON.stringify(state.rotations || []));

    // Add options (as direct JSON object - backend expects this)
    formData.append("options", JSON.stringify(options));

    // Add GitHub URLs if present
    if (stateFiles && stateFiles.length > 0) {
      formData.append("selectedGithubMarkdownUrls", JSON.stringify(stateFiles));
    }

    // Add markdown content for md-text-to-pdf (wrapped in object)
    if (markdown) {
      formData.append("markdown", JSON.stringify({ markdown: markdown }));
    }
  } catch (jsonError) {
    console.error("Error building FormData:", jsonError);
    dispatch(setField({
      errorMessage: "Failed to prepare request data",
      isSubmitted: false
    }));
    return;
  }

  // Determine URL
  let url: string = "";
  if (process.env.NODE_ENV === "development") {
    url = `http://localhost:4001/api/${state.path}`;
  } else {
    url = `/api/${state.path}`;
  }

  // Check for existing errors
  if (state.errorMessage) {
    dispatch(setField({ isSubmitted: false }));
    return;
  }

  // Determine output filename
  const originalFileName =
    state.fileName || files?.[0]?.name?.split(".").slice(0, -1).join(".") || "PDFEquips";

  const mimeTypeLookupTable: {
    [key: string]: { outputFileMimeType: string; outputFileName: string };
  } = {
    "application/zip": {
      outputFileMimeType: "application/zip",
      outputFileName: `${originalFileName}.zip`,
    },
    "application/pdf": {
      outputFileMimeType: "application/pdf",
      outputFileName: `${originalFileName}.pdf`,
    },
  };

  try {
    const response = await axios.post(url, formData, {
      responseType: "arraybuffer",
      withCredentials: true,
      timeout: 120000, // 2 minute timeout for large files
      headers: {
        // Let browser set Content-Type for FormData
      }
    });

    // Validate response
    if (response.status !== 200) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Get MIME type from response
    const mimeType = response.headers["content-type"] || "application/pdf";
    const mimeTypeData = mimeTypeLookupTable[mimeType] || {
      outputFileMimeType: mimeType,
      outputFileName: `${originalFileName}.pdf`,
    };

    const { outputFileMimeType, outputFileName } = mimeTypeData;
    if (state.path !== "md-text-to-pdf") {
      // Update Redux store
      dispatch(
        setField({
          showDownloadBtn: true,
        })
      );
    } else {
      if (downloadBtn?.current) {
        downloadBtn.current.click();
        if (!state.subscriptionStatus) {
          increaseDailySiteUsage();
        }
      }
      dispatch(setField({ isSubmitted: false }));
      return;
    }

    // Update submitted files list
    if (files && files.length > 0) {
      filesOnSubmit = files.map((f) => f.name);
    }

    // Clear errors and reset submission state
    dispatch(resetErrorMessage());
    dispatch(setField({ isSubmitted: false }));

  } catch (error) {
    console.error("Upload error:", error);

    // Handle network errors
    if ((error as { code?: string }).code === "ERR_NETWORK") {
      dispatch(setField({ errorMessage: errors.ERR_NETWORK.message }));
      toast.error(errors.ERR_NETWORK.message);
      dispatch(setField({ isSubmitted: false }));
      return;
    }

    // Handle timeout errors
    if ((error as { code?: string }).code === "ECONNABORTED") {
      const timeoutMsg = "Request timeout - the server took too long to respond. Please try again.";
      dispatch(setField({ errorMessage: timeoutMsg }));
      toast.error(timeoutMsg);
      dispatch(setField({ isSubmitted: false }));
      return;
    }

    // Parse API error
    const errorMessage = parseApiError(error, errors);

    if (errorMessage) {
      dispatch(setField({ errorMessage }));
      toast.error(errorMessage);
    } else {
      // Generic error fallback
      const genericError = "An unexpected error occurred. Please try again.";
      dispatch(setField({ errorMessage: genericError }));
      toast.error(genericError);
    }

    dispatch(setField({ isSubmribed: false }));
  }
};