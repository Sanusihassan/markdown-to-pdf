export const tool = {
  Markdown_to_PDF: {
    title: "Markdown to PDF",
    description: "Convert Markdown to PDF",
    color: "#6c5ce7",
    type: ".pdf",
    to: "/markdown-to-pdf",
  },
};

export const edit_page = {
  edit_page_titles: {
    merge_pdf: "Merge PDF options",
  },
  loader_text: "please wait...",
  add_more_button: "Add more files",
  action_buttons: {
    merge_pdf: "Merge PDF",
  },
  pages: "pages",
  page: "page",
  toolbar: {
    rename_file: "Rename File",
    upload_file: "Upload File",
    upload_from_github: "Upload from GitHub",
  },
  document_name: {
    doc_name: "DOCUMENT NAME",
    untitled: "Untitled Document",
  },
  github_popup: {
    label: "GitHub Folder URL:",
    placeholder: "Enter GitHub URL",
    submit: "OK",
  },
};

export const tools = {
  select: "Select",
  or_drop: "or drop files here",
  files: "files",
  drop_files: "Drag files here",
};

export const downloadFile = {
  titles: {
    "markdown-to-pdf": [
      "Markdown files have been converted to PDF!",
      "Markdown file has been converted to PDF!",
    ],
  },

  btnText: {
    "markdown-to-pdf": [
      "Download Converted PDF files",
      "Download Converted PDF file",
    ],
  },

  backto: {
    "markdown-to-pdf": "Back To Markdown to PDF",
  },
};

export const errors = {
  EMPTY_FILE: {
    message: "The file is empty. Please choose a valid file.",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "The file is too large. Please choose a smaller file, or use our compress-pdf tool to reduce the file size.",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  NOT_SUPPORTED_TYPE: {
    message: "The file is not a supported type.",
    types: {
      PDF: "Please choose a valid PDF file.",
      JPG: "Please choose a valid JPEG image file.",
      DOC: "Please choose a valid Word document file.",
      DOCX: "Please choose a valid Word document file.",
      XLS: "Please choose a valid Excel spreadsheet file.",
      XLSX: "Please choose a valid Excel spreadsheet file.",
      PPT: "Please choose a valid PowerPoint presentation file.",
      PPTX: "Please choose a valid PowerPoint presentation file.",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message:
      "The file is corrupt and cannot be processed. Please choose a valid file.",
    code: "ERR_FILE_CORRUPT",
  },
  MAX_FILES_EXCEEDED: {
    message:
      "You have exceeded the maximum number of files allowed. Please delete some files and try again.",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message: "No files selected. Please select at least one file.",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message:
      "An unknown error occurred. Please try again later or contact support.",
    code: "ERR_UNKNOWN",
  },
  ERR_NETWORK: {
    message:
      "A network error occurred. Please check your internet connection and try again.",
    code: "ERR_NETWORK",
  },
};
