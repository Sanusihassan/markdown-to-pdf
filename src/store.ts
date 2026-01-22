import { createSlice, type Draft, type PayloadAction } from "@reduxjs/toolkit";
import { INITIAL_MARKDOWN } from "../components/InitialMarkdownContent";
type WritableDraft<T> = {
  -readonly [K in keyof T]: Draft<T[K]>;
};

type k = keyof WritableDraft<ToolState>;
export type ThemeName =
  | "github"
  | "github-dark"
  | "almond"
  | "awsm"
  | "axist"
  | "bamboo"
  | "bullframe"
  | "holiday"
  | "kacit"
  | "latex"
  | "marx"
  | "mini"
  | "modest"
  | "new"
  | "no-class"
  | "pico"
  | "retro"
  | "sakura"
  | "sakura-vader"
  | "semantic"
  | "simple"
  | "style-sans"
  | "style-serif"
  | "stylize"
  | "superstylin"
  | "tacit"
  | "vanilla"
  | "water"
  | "water-dark"
  | "writ";
export interface ToolState {
  showTool: boolean;
  isSubmitted: boolean;
  errorMessage: string;
  errorCode: string | null;
  showDownloadBtn: boolean;
  showOptions: boolean;
  nav_height: number;
  fileName: string;
  limitationMsg: string;
  rotations: { k: string; r: number }[];
  files: { name: string; size: number; url: string }[];
  subscriptionStatus: boolean | null;
  originalFileSize: number;
  compressedFileSize: number;
  isAdBlocked: boolean;
  markdown: string;
  show_files_list: boolean;
  alertVarient: "success" | "info" | "warning" | "error";
  options: {
    theme: ThemeName;
    screenSize: string;
    orientation: "Portrait" | "Landscape";
    pageSize: "A4" | "Letter" | "Legal" | "A3" | "A5" | "US Letter";
    pageMargin: "No margin" | "Small" | "Big";
    fontSize: number;
  };
  preview: boolean;
}

const initialState: ToolState = {
  showTool: true,
  errorMessage: "",
  isSubmitted: false,
  errorCode: null,
  showDownloadBtn: false,
  showOptions: false,
  nav_height: 0,
  fileName: "",
  limitationMsg: "",
  rotations: [],
  subscriptionStatus: null,
  compressedFileSize: 0,
  originalFileSize: 0,
  isAdBlocked: false,
  alertVarient: "error",
  markdown: INITIAL_MARKDOWN,
  files: [],
  show_files_list: false,
  options: {
    theme: "github",
    orientation: "Portrait",
    screenSize: "screen",
    pageMargin: "Small",
    pageSize: "A4",
    fontSize: 16
  },
  preview: false
};

const toolSlice = createSlice({
  name: "tool",
  initialState,
  reducers: {
    resetErrorMessage(state: ToolState) {
      state.errorMessage = "";
      state.errorCode = null;
      state.isSubmitted = false;
    },
    setField(state, action: PayloadAction<Partial<ToolState>>) {
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

export const { resetErrorMessage, setField } = toolSlice.actions;

export default toolSlice.reducer;
