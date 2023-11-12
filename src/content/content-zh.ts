import type {
  tool as _tool,
  web2pdftool as _web2pdftool,
  tools as _tools,
  edit_page as _edit_page,
  footer as _footer,
  errors as _errors,
  downloadFile as _downloadFile,
  landing_page as _landing_page,
} from "../../content";

export const tool: _tool = {
  Markdown_to_PDF: {
    title: "Markdown 转 PDF",
    description: "将 Markdown 转换为 PDF",
    color: "#6c5ce7",
    type: ".pdf",
    to: "/markdown-to-pdf",
  },
};

export const downloadFile: _downloadFile = {
  titles: {
    "markdown-to-pdf": [
      "Markdown文件已转换为PDF！",
      "Markdown文件已转换为PDF！",
    ],
  },
  btnText: {
    "markdown-to-pdf": ["下载转换后的PDF文件", "下载转换后的PDF文件"],
  },
  backto: {
    "markdown-to-pdf": "返回Markdown转PDF",
  },
};

export const edit_page: _edit_page = {
  edit_page_titles: {
    markdown_to_pdf: "Markdown 到 PDF 的选项",
  },
  loader_text: "请稍等...",
  add_more_button: "添加更多文件",
  action_buttons: {
    markdown_to_pdf: "Markdown 到 PDF",
  },
  pages: "页",
  page: "页",
  toolbar: {
    rename_file: "重命名文件",
    upload_file: "上传文件",
    upload_from_github: "从GitHub上传",
  },
  document_name: {
    doc_name: "文件名称",
    untitled: "无标题文件",
  },
  github_popup: {
    label: "GitHub文件夹网址：",
    placeholder: "输入GitHub网址",
    submit: "确定",
  },
  download_pdf_text: "下载PDF",
};

export const tools: _tools = {
  select: "选择",
  or_drop: "或将文件拖放到此处",
  files: "文件",
  drop_files: "在此处拖放文件",
};

export const errors: _errors = {
  EMPTY_FILE: {
    message: "文件为空，请选择一个有效的文件。",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "文件太大。请选择一个更小的文件，或使用我们的压缩PDF工具来减小文件大小。",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  NOT_SUPPORTED_TYPE: {
    message: "文件不是受支持的类型。",
    types: {
      PDF: "请选择一个有效的PDF文件。",
      JPG: "请选择一个有效的JPEG图片文件。",
      DOC: "请选择一个有效的Word文档文件。",
      DOCX: "请选择一个有效的Word文档文件。",
      XLS: "请选择一个有效的Excel电子表格文件。",
      XLSX: "请选择一个有效的Excel电子表格文件。",
      PPT: "请选择一个有效的PowerPoint演示文稿文件。",
      PPTX: "请选择一个有效的PowerPoint演示文稿文件。",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message: "文件已损坏，无法处理。请选择一个有效的文件。",
    code: "ERR_FILE_CORRUPT",
  },
  MAX_FILES_EXCEEDED: {
    message: "您已超出允许的最大文件数。请删除一些文件并重试。",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message: "未选择任何文件。请选择至少一个文件。",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message: "发生未知错误。请稍后重试或联系支持人员。",
    code: "ERR_UNKNOWN",
  },
  ERR_NETWORK: {
    message: "网络错误，请检查您的互联网连接并重试。",
    code: "ERR_NETWORK",
  },
  INVALID_GITHUB_URL: {
    message: "GitHub URL 无效。请输入有效的 GitHub URL。",
    code: "ERR_INVALID_GITHUB_URL",
  },
};
