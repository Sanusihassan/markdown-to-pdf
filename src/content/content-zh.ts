import type {
  tool as _tool,
  web2pdftool as _web2pdftool,
  tools as _tools,
  edit_page as _edit_page,
  footer as _footer,
  errors as _errors,
  downloadFile as _downloadFile,
  landing_page as _landing_page,
} from "../content";
import type { adBlockerContentType } from "./content";

export const tool: _tool = {
  Markdown_to_PDF: {
    title: "Markdown 转 PDF",
    seoTitle: "Markdown 转 PDF - Markdown 到 PDF 转换工具",
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
  placeholder: "问我任何事",
  loader_text: "请稍等...",
  loading_preview: "正在加载预览...",
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
    options: "选项",
    assistant: "助手"
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
  options: {
    title: "选项",
    theme: "主题",
    screen_size: "屏幕尺寸",
    orientation: "方向",
    margin: "页面边距",
    page_size: "页面大小",
    label_content: {
      orientation: ["竖直", "水平"],
      screen_sizes: {
        your_screen: "您的屏幕",
        desktop_hd: "桌面 HD (1920px)",
        desktop_144: "桌面 (1440px)",
        tablet: "平板电脑 768px",
        mobile: "移动设备 (320px)",
      },
      margin: {
        no_margin: "无边距",
        small: "小",
        big: "大",
      },
    },
    font_size: "字体大小",
    defaults: "默认",
    save_changes: "保存更改",
    direction: "文本方向",
    ltr: "从左到右",
    rtl: "从右到左",
  },
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
  ERR_MAX_USAGE: {
    message: "已超出最大使用限制。请升级或订阅以继续使用此服务。",
    code: "ERR_MAX_USAGE",
  },
  INVALID_GITHUB_URL: {
    message: "GitHub URL 无效。请输入有效的 GitHub URL。",
    code: "ERR_INVALID_GITHUB_URL",
  },
  MAX_DAILY_USAGE: {
    message: "您已达到每日使用上限。请升级您的套餐以继续不间断地使用此功能。",
    code: "MAX_DAILY_USAGE",
  },
  alerts: {
    singleFileSize: "单个文件大小必须低于 100 MB。升级以上传更大的文件！",
  },
};

export const adBlockerContent: adBlockerContentType = {
  title: "检测到广告拦截器",
  description: "我们注意到您正在使用广告拦截器。请考虑禁用它或升级到高级版以获得无广告体验！",
  reloadPage: "重新加载页面",
  upgradeToPremium: "升级到高级版"
};