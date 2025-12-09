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
  Compress_PDF: {
    title: "压缩 PDF",
    seoTitle: "在线压缩 PDF - 免费文件大小减小工具",
    description: "在保持质量的同时减少 PDF 文件大小",
    color: "var(--green)",
    type: ".pdf",
    to: "/compress-pdf",
    features: [
      {
        title: "多功能 PDF 压缩",
        description:
          "每次都能获得快速且可靠的结果。可从多个压缩级别中选择，在不影响文档质量的情况下调整文件大小。",
      },
      {
        title: "无需邮箱注册",
        description:
          "立即开始压缩您的 PDF 文件——无需邮箱注册，无需信用卡信息。只需上传文件并按需压缩即可。",
      },
      {
        title: "始终保持高质量",
        description:
          "PDFEquips 使用先进技术优化 PDF 中图像的大小和质量，确保在显著减小文件大小的同时保持文档的清晰度。",
      },
    ],
    keywords:
      "压缩PDF,在线压缩PDF,减小PDF文件大小,免费PDF压缩,PDF压缩工具,在线PDF压缩器,PDF文件优化,减小PDF大小,压缩PDF文档,安全PDF压缩,免费PDF压缩工具,无需注册PDF压缩,在线减小PDF大小,快速PDF压缩",
  },
};

export const edit_page: _edit_page = {
  edit_page_titles: {
    compress_pdf: "PDF 压缩选项",
  },
  loader_text: "请稍候...",
  add_more_button: "添加更多页面",
  action_buttons: {
    compress_pdf: "压缩 PDF",
  },
  pages: "页",
  page: "页",
  filenameOptions: {
    label: "输出文件名（可选）",
    placeholder: "输入文件名",
    helperText: "这将是下载时压缩 PDF 的名称。",
    cta: "查看方案",
    upgradeNotice: {
      msg: "2.0 到 10.0 的级别可在高级版中使用。",
      cta: "立即升级",
    },
  },
  compress_pdf: [
    {
      title: "推荐压缩",
      description: "文件大小与质量的最佳平衡",
    },
    {
      title: "较低压缩",
      description: "文件稍大但质量更高",
    },
    {
      title: "极限压缩",
      description: "文件体积大幅减小但质量降低",
    },
    {
      title: "自定义压缩",
      description: "选择您自己的压缩级别",
    },
  ],
};

export const downloadFile: _downloadFile = {
  titles: {
    "compress-pdf": ["PDF 文件已成功压缩！", "PDF 文件已压缩！"],
  },

  btnText: {
    "compress-pdf": ["下载压缩后的 PDF 文件", "下载压缩后的 PDF 文件"],
  },

  backto: {
    "compress-pdf": "返回 PDF 压缩",
  },
  compressionAnalyticsContent: {
    title: "压缩分析",
    description: "您的 PDF 压缩结果的详细分析",
    sizeComparisonTitle: "大小对比",
    reductionBreakdownTitle: "压缩比例分析",
    sizeSavedLabel: "节省的空间",
    compressionRatioLabel: "压缩比",
    sizeReducedLabel: "减小的大小",
    chart: {
      original: "原始",
      compressed: "已压缩",
      reduced: "已减少",
      remaining: "剩余",
    },
  },
};

export const tools: _tools = {
  select: "选择",
  or_drop: "或将文件拖放到此处",
  files: "文件",
  drop_files: "在此处拖放文件",
};

export const footer: _footer = {
  brand: "PDFEquips",
  terms: "条款",
  conditions: "条件",
  privacy_policy: "隐私政策",
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
  MISSING_FONTS: {
    message: "文件缺少字体。请确保所有字体都嵌入在PDF文件中。",
    code: "ERR_MISSING_FONTS",
  },
  INVALID_IMAGE_DATA: {
    message: "文件包含无效的图像数据。请确保所有图像格式正确。",
    code: "ERR_INVALID_IMAGE_DATA",
  },
  SECURITY_RISK: {
    message: "文件存在安全风险，无法处理。请选择一个有效的文件。",
    code: "ERR_SECURITY_RISK",
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
  PASSWORD_REQUIRED: {
    message: "该 PDF 需要密码。",
    code: "PASSWORD_REQUIRED",
  },

  INCORRECT_PASSWORD: {
    message: "您输入的密码不正确。",
    code: "INCORRECT_PASSWORD",
  },
  MAX_DAILY_USAGE: {
    message: "您已达到每日使用上限。请升级您的套餐以继续不间断地使用此功能。",
    code: "MAX_DAILY_USAGE",
  },
  alerts: {
    maxFiles: "最多允许 15 个文件。订阅以获取更多！",
    singleFileSize: "单个文件大小必须低于 100 MB。升级以上传更大的文件！",
    fileSize: "每个文件必须低于 50 MB。通过订阅解锁更高的限制！",
  },
};

export const adBlockerContent: adBlockerContentType = {
  title: "检测到广告拦截器",
  description: "我们注意到您正在使用广告拦截器。请考虑禁用它或升级到高级版以获得无广告体验！",
  reloadPage: "重新加载页面",
  upgradeToPremium: "升级到高级版"
};