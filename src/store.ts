import { createSlice, PayloadAction, Draft } from "@reduxjs/toolkit";
type WritableDraft<T> = {
  -readonly [K in keyof T]: Draft<T[K]>;
};

type k = keyof WritableDraft<ToolState>;
type ThemeName =
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
    orientation: "Portrait" | "Landscape";
    // should be like this: 'letter' | 'legal' | 'tabloid' | 'ledger' | 'a0' | 'a1' | 'a2' | 'a3' | 'a4' | 'a5' | 'a6'
    pageSize: "A4" | "Letter" | "Legal" | "A3" | "A5" | "US Letter";
    pageMargin: "No margin" | "Small" | "Big";
    fontSize: number;
  };
  preview: boolean;
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
  markdown:
    `# Convert your Markdown to PDF with PDFEquips

PDFEquips is a powerful online tool that allows you to effortlessly convert Markdown documents into PDF files. With a user-friendly interface and a range of customization options, PDFEquips makes it easy to create professional-looking PDFs from your Markdown content.

## Features

### 1. Markdown to PDF Conversion
Easily convert your Markdown documents into high-quality PDF files.

### 2. File Management
- **Rename Files**: Rename your files before downloading to keep them organized.
- **Upload Files**: Upload Markdown files from your local machine or directly from GitHub.

### 3. Customization Options
- **Themes**: Choose from a variety of themes to customize the appearance of your PDF.
- **Screen Size**: Adjust the screen size to optimize the viewing experience.
- **Orientation**: Select either portrait or landscape orientation for your PDF.
- **Page Size**: Specify the size of the pages in your PDF.
- **Page Margin**: Set the margins for your PDF pages to control white space.
- **Font Size**: Customize the text size.

## How to Use

1. **Upload Markdown File**: Click on the upload button to select a Markdown file from your local machine or GitHub repository.
2. **Customize Settings**: Adjust the settings according to your preferences, including theme, screen size, orientation, page size, and page margin.
3. **Convert to PDF**: Click the "Download PDF" button to initiate the conversion process.
4. **Download PDF**: Once the conversion is complete, click on the download button to save your PDF file with the specified name.

## Try PDFEquips Now!

Visit [PDFEquips](https://www.pdfequips.com/markdown-to-pdf) to experience the convenience of converting Markdown to PDF with ease.
`,
  alertVarient: "error",
  options: {
    theme: "github",
    orientation: "Portrait",
    screenSize: "screen",
    pageMargin: "No margin",
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

export const { resetErrorMessage, setField } = toolSlice.actions;

export default toolSlice.reducer;
