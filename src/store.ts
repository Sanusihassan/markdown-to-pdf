import { createSlice, PayloadAction, Draft } from "@reduxjs/toolkit";
type WritableDraft<T> = {
  -readonly [K in keyof T]: Draft<T[K]>;
};

type k = keyof WritableDraft<ToolState>;
type ThemeName =
  | 'github'
  | 'github-dark'
  | 'almond'
  | 'awsm'
  | 'axist'
  | 'bamboo'
  | 'bullframe'
  | 'holiday'
  | 'kacit'
  | 'latex'
  | 'marx'
  | 'mini'
  | 'modest'
  | 'new'
  | 'no-class'
  | 'pico'
  | 'retro'
  | 'sakura'
  | 'sakura-vader'
  | 'semantic'
  | 'simple'
  | 'style-sans'
  | 'style-serif'
  | 'stylize'
  | 'superstylin'
  | 'tacit'
  | 'vanilla'
  | 'water'
  | 'water-dark'
  | 'writ';

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
  options: {
    theme: ThemeName;
    screenSize: string;
    orientation: 'Portrait' | 'Landscape';
    pageMargin: 'No margin' | 'Small' | 'Big';
  }
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
  markdown: "# Convert your Markdown to PDF with PDFEquips\n\nTo convert your Markdown to PDF, simply start by typing in the editor or paste from your clipboard. You can also drop your Markdown file into the editor.\n\n**tip:** Click on the pencil icon on the left to clear the editor\n\n## Privacy First\nAt PDFEquips, we prioritize your privacy. Unlike version 1 of Markdown to PDF, your content is no longer stored in a file before being read/converted and subsequently removed from our servers. Instead, your content is now sent securely via our API before returning the converted file. This ensures that your data is never stored and remains secure.\n\n## GitHub-Flavored Styling by Default\nWe use GitHub-flavored styling by default, so your PDF files will have a clean and modern look.\n\n## Image Support\nImages are base64-encoded into the PDF document, so they do not depend on a remote source that could go offline, rendering your image broken. Moreover, they do not require an internet connection.\n\n## Next Steps\nUp next, we're working on Emoji support, which will make your PDF documents more fun and expressive! Stay tuned for more updates.",
  alertVarient: "error",
  options: {
    theme: "github",
    orientation: "Portrait",
    screenSize: "screen",
    pageMargin: "No margin"
  }
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
