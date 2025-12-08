// please translate these 3 ts objects to arabic, same names i.e export const tool, export const edit_page and export const downloadFile
// but we'll be using our pre-defined ts interfaces to preserve the schema, please make sure to preserve the schema and just translate the text content.
// we'll be using the _tool, _edit_page, _downloadFile interfaces respectively for each obj.
export const tool = {
  Compress_PDF: {
    title: "Compress PDF",
    seoTitle: "Compress PDFs Online - Free File Size Reducer",
    description: "Reduce the file size of a PDF while maintaining quality",
    color: "var(--green)",
    type: ".pdf",
    to: "/compress-pdf",
    features: [
      {
        title: "Versatile PDF Compression",
        description:
          "Get fast and reliable results that you can count on every time, Choose from a range of compression levels to adjust your file size without compromising document quality",
      },
      {
        title: "No need for email registration",
        description:
          "Start compressing your PDFs right away - no email sign-up, no need for credit card details Just upload your document and compress it as needed",
      },
      {
        title: "Maintaining quality all the time",
        description:
          "PDFEquips uses advanced technology to optimize both the size and quality of images in your PDFs This ensures that you achieve significantly smaller file sizes without compromising the fidelity of your documents",
      },
    ],
    keywords:
      "compress PDF, compress PDF online, reduce PDF file size, free PDF compression, PDF file compressor, online PDF compressor, PDF compression tool, PDF size reduction, PDF file size reducer, compress PDF documents, shrink PDF files, secure PDF compression, PDF optimizer, compress PDFs for free, online PDF file compressor, no registration PDF compression, reduce PDF size online, free PDF shrinker, fast PDF compression",
  },
};

export const edit_page = {
  edit_page_titles: {
    compress_pdf: "Compress PDF options",
  },
  loader_text: "please wait...",
  add_more_button: "Add more pages",
  action_buttons: {
    compress_pdf: "Compress PDF",
  },
  pages: "pages",
  page: "page",
  filenameOptions: {
    label: "Output File Name (Optional)",
    placeholder: "Enter file name",
    helperText: "This will be the name of the compressed PDF when downloaded.",
    cta: "View Plans",
    upgradeNotice: {
      msg: "Levels from 2.0 to 10.0 are available with premium.",
      cta: "Upgrade now",
    },
  },
  compress_pdf: [
    {
      title: "Recommended compression",
      description: "Best balance between size and quality",
    },
    {
      title: "Less compression",
      description: "Smaller file size but lower quality",
    },
    {
      title: "Extreme compression",
      description: "Significantly smaller file size but much lower quality",
    },
    {
      title: "Custom compression",
      description: "Choose your own compression amount",
    },
  ],
};

export const downloadFile = {
  titles: {
    "compress-pdf": [
      "PDF files have been compressed!",
      "PDF file has been compressed!",
    ],
  },

  btnText: {
    "compress-pdf": [
      "Download Compressed PDF files",
      "Download Compressed PDF file",
    ],
  },

  backto: {
    "compress-pdf": "Back To Compress PDF",
  },
  compressionAnalyticsContent: {
    title: "Compression Analytics",
    description: "Detailed breakdown of your PDF compression results",
    sizeComparisonTitle: "Size Comparison",
    reductionBreakdownTitle: "Reduction Breakdown",
    sizeSavedLabel: "Space Saved",
    compressionRatioLabel: "Compression Ratio",
    sizeReducedLabel: "Size Reduced",
    chart: {
      original: "Original",
      compressed: "Compressed",
      reduced: "Reduced",
      remaining: "Remaining",
    },
  },
};

export const tools = {
  select: "Select",
  or_drop: "or drop files here",
  files: "files",
  drop_files: "Drag files here",
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
  MISSING_FONTS: {
    message:
      "The file contains missing fontsand cannot be processed. Please ensure all fonts are embedded in the PDF file.",
    code: "ERR_MISSING_FONTS",
  },
  INVALID_IMAGE_DATA: {
    message:
      "The file contains invalid image data. Please ensure all images are properly formatted.",
    code: "ERR_INVALID_IMAGE_DATA",
  },
  SECURITY_RISK: {
    message:
      "The file contains a security risk and cannot be processed. Please choose a valid file.",
    code: "ERR_SECURITY_RISK",
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
  PASSWORD_REQUIRED: {
    message: "PDF requires a password.",
    code: "PASSWORD_REQUIRED",
  },

  INCORRECT_PASSWORD: {
    message: "The password you entered is incorrect.",
    code: "INCORRECT_PASSWORD",
  },
  MAX_DAILY_USAGE: {
    message:
      "You’ve reached your daily usage limit. Please upgrade your plan to continue using this feature without interruption.",
    code: "MAX_DAILY_USAGE",
  },
  alerts: {
    maxFiles: "Max 15 files allowed. Subscribe for more!",
    singleFileSize:
      "file size must be under 100 MB. Upgrade to upload bigger files!",
    fileSize:
      "Each file must be under 50 MB. Unlock higher limits with subscription!",
  },
};
