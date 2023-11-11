import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ToolState {
  isSubmitted: boolean;
  errorMessage: string;
  showErrorMessage: boolean;
  errorCode: string | null;
  path: string;
  click: boolean;
  focus: boolean;
  showDownloadBtn: boolean;
  showOptions: boolean;
  nav_height: number;
  document_name: string;
  show_files_list: boolean;
  files: { name: string; size: number, url: string }[];
  markdown: string;
}

const initialState: ToolState = {
  errorMessage: "",
  showErrorMessage: false,
  isSubmitted: false,
  errorCode: null,
  path: "",
  click: false,
  focus: false,
  showDownloadBtn: false,
  showOptions: false,
  nav_height: 0,
  document_name: "",
  show_files_list: false,
  files: [],
  markdown: "",
};

const toolSlice = createSlice({
  name: "tool",
  initialState,
  reducers: {
    setClick(state: ToolState, action: PayloadAction<boolean>) {
      state.click = action.payload;
    },
    setFocus(state: ToolState, action: PayloadAction<boolean>) {
      state.focus = action.payload;
    },
    setShowDownloadBtn(state: ToolState, action: PayloadAction<boolean>) {
      state.showDownloadBtn = action.payload;
    },
    setPath(state: ToolState, action: PayloadAction<string>) {
      state.path = action.payload;
    },
    setErrorMessage(state: ToolState, action: PayloadAction<string>) {
      state.errorMessage = action.payload;
      state.showErrorMessage = true; // set the showErrorMessage property to true when an error message is set
    },
    resetErrorMessage(state: ToolState) {
      state.errorMessage = "";
      state.showErrorMessage = false; // reset the showErrorMessage property to false when the error message is reset
      state.errorCode = null;
      state.isSubmitted = false;
    },

    setErrorCode(state: ToolState, action: PayloadAction<string | null>) {
      state.errorCode = action.payload;
    },
    setIsSubmitted(state: ToolState, action: PayloadAction<boolean>) {
      state.isSubmitted = action.payload;
    },
    setShowOptions(state: ToolState, action: PayloadAction<boolean>) {
      state.showOptions = action.payload;
    },
    setNavHeight(state: ToolState, action: PayloadAction<number>) {
      state.nav_height = action.payload;
    },
    setDocumentName(state: ToolState, action: PayloadAction<string>) {
      state.document_name = action.payload;
    },
    setShowFilesList(state: ToolState, action: PayloadAction<boolean>) {
      state.show_files_list = action.payload;
    },
    setStateFiles(
      state: ToolState,
      action: PayloadAction<{ name: string; size: number, url: string }[]>
    ) {
      state.files = action.payload;
    },
    setMarkDown(state: ToolState, action: PayloadAction<string>) {
      state.markdown = action.payload;
    },
  },
});

export const {
  setErrorMessage,
  resetErrorMessage,
  setErrorCode,
  setIsSubmitted,
  setPath,
  setClick,
  setFocus,
  setShowDownloadBtn,
  setShowOptions,
  setNavHeight,
  setDocumentName,
  setShowFilesList,
  setStateFiles,
  setMarkDown,
} = toolSlice.actions;

export default toolSlice.reducer;
