import { createSlice, PayloadAction, Draft } from "@reduxjs/toolkit";
type WritableDraft<T> = {
  -readonly [K in keyof T]: Draft<T[K]>;
};

type k = keyof WritableDraft<ToolState>;

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
  files: { name: string; size: number; url: string }[];
  markdown: string;
  alertVarient: "success" | "info" | "warning" | "error";
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
  alertVarient: "error",
};

const toolSlice = createSlice({
  name: "tool",
  initialState,
  reducers: {
    resetErrorMessage(state: ToolState) {
      state.errorMessage = "";
      state.showErrorMessage = false;
      state.errorCode = null;
      state.isSubmitted = false;
    },
    setField(state, action: PayloadAction<Partial<ToolState>>) {
      // Loop over all the keys in the action payload
      Object.keys(action.payload).forEach((key) => {
        // Cast the key to keyof ToolState to ensure it's a valid key
        const typedKey = key as k;
        const value = action.payload[typedKey];
        if (value !== undefined) {
          // @ts-ignore
          state[typedKey] = value;
        }
      });
    },
  },
});

export const {
  resetErrorMessage,
  setField
} = toolSlice.actions;

export default toolSlice.reducer;
