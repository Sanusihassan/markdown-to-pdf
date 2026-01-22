import type {
  tool as _tool,
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
    title: "تحويل النص بتنسيق ماركداون إلى ملف PDF",
    seoTitle: "تحويل النص بتنسيق ماركداون إلى PDF - تحويل ماركداون إلى ملف PDF",
    description: "تحويل النص بتنسيق ماركداون إلى ملف PDF",
    color: "#6c5ce7",
    type: ".pdf",
    to: "/markdown-to-pdf",
  },
};

export const tools: _tools = {
  select: "اختر",
  or_drop: "أو قم بإسقاط الملفات هنا",
  files: "ملفات",
  drop_files: "قم بوضع الملفات هنا",
};

export const downloadFile: _downloadFile = {
  titles: {
    "markdown-to-pdf": [
      "تم تحويل ملفات Markdown إلى PDF!",
      "تم تحويل ملف Markdown إلى PDF!",
    ],
  },
  btnText: {
    "markdown-to-pdf": ["تحميل ملفات PDF المحولة", "تحميل ملف PDF المحول"],
  },
  backto: {
    "markdown-to-pdf": "العودة إلى Markdown إلى PDF",
  },
};

export const edit_page: _edit_page = {
  edit_page_titles: {
    markdown_to_pdf: "خيارات تحويل ماركداون إلى PDF",
  },
  loader_text: "يرجى الانتظار...",
  add_more_button: "إضافة المزيد من الملفات",
  action_buttons: {
    markdown_to_pdf: "تحويل ماركداون إلى PDF",
  },
  pages: "صفحة",
  page: "صفحة واحدة",
  toolbar: {
    rename_file: "إعادة تسمية الملف",
    upload_file: "رفع ملف",
    upload_from_github: "تحميل من GitHub",
    options: "الخيارات",
    assistant: "مساعد"
  },
  document_name: {
    doc_name: "اسم المستند",
    untitled: "مستند بلا عنوان",
  },
  github_popup: {
    label: "عنوان المجلد في GitHub:",
    placeholder: "أدخل عنوان GitHub",
    submit: "موافق",
  },
  download_pdf_text: "تحميل ملف PDF",
  placeholder: "اسأل عن أي شيء",
  options: {
    title: "الخيارات",
    theme: "السمة",
    screen_size: "حجم الشاشة",
    orientation: "الاتجاه",
    margin: "الهامش",
    page_size: "حجم الصفحة",
    label_content: {
      orientation: ["عمودي", "أفقي"],
      screen_sizes: {
        your_screen: "شاشتك",
        desktop_hd: "سطح المكتب HD (1920 بكسل)",
        desktop_144: "سطح المكتب (1440 بكسل)",
        tablet: "الجهاز اللوحي 768 بكسل",
        mobile: "الهاتف المحمول (320 بكسل)",
      },
      margin: {
        no_margin: "بلا هوامش",
        small: "صغير",
        big: "كبير",
      },
    },
    font_size: "حجم الخط",
    defaults: "الإعدادات الافتراضية",
    save_changes: "حفظ التغييرات",
  },
};

export const errors: _errors = {
  EMPTY_FILE: {
    message: "الملف فارغ. يرجى اختيار ملف صالح.",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "حجم الملف كبير جدًا. يرجى اختيار ملف أصغر، أو استخدام أداة ضغط PDF الخاصة بنا لتقليل حجم الملف.",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  NOT_SUPPORTED_TYPE: {
    message: "الملف غير مدعوم.",
    types: {
      PDF: "يرجى اختيار ملف PDF صالح.",
      JPG: "يرجى اختيار ملف صورة JPEG صالح.",
      DOC: "يرجى اختيار ملف مستند Word صالح.",
      DOCX: "يرجى اختيار ملف مستند Word صالح.",
      XLS: "يرجى اختيار ملف جدول بيانات Excel صالح.",
      XLSX: "يرجى اختيارملف جدول بيانات Excel صالح.",
      PPT: "يرجى اختيار ملف عرض تقديمي PowerPoint صالح.",
      PPTX: "يرجى اختيار ملف عرض تقديمي PowerPoint صالح.",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message: "الملف تالف ولا يمكن معالجته. يرجى اختيار ملف صالح.",
    code: "ERR_FILE_CORRUPT",
  },
  MAX_FILES_EXCEEDED: {
    message:
      "لقد تجاوزت الحد الأقصى لعدد الملفات المسموح به. يرجى حذف بعض الملفات والمحاولة مرة أخرى.",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message: "لم يتم اختيار أي ملفات. يرجى اختيار ملف واحد على الأقل.",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message:
      "حدث خطأ غير معروف. يرجى المحاولة مرة أخرى لاحقًا أو الاتصال بالدعم.",
    code: "ERR_UNKNOWN",
  },
  ERR_NETWORK: {
    message:
      "حدث خطأ في الشبكة. يرجى التحقق من اتصالك بالإنترنت وحاول مرة أخرى.",
    code: "ERR_NETWORK",
  },
  ERR_MAX_USAGE: {
    message: "تم تجاوز الحد الأقصى للاستخدام. يرجى الترقية أو الاشتراك لمواصلة استخدام هذه الخدمة.",
    code: "ERR_MAX_USAGE",
  },
  INVALID_GITHUB_URL: {
    message: "رابط GitHub غير صالح. يرجى إدخال رابط GitHub صالح.",
    code: "ERR_INVALID_GITHUB_URL",
  },
  MAX_DAILY_USAGE: {
    message:
      "لقد وصلت إلى الحد الأقصى للاستخدام اليومي. يُرجى ترقية خطتك لمواصلة استخدام هذه الميزة دون انقطاع.",
    code: "MAX_DAILY_USAGE",
  },
  alerts: {
    singleFileSize:
      "يجب أن يكون حجم الملف الفردي أقل من 100 ميغابايت. قم بالترقية لتحميل ملفات أكبر!",
  },
};

export const adBlockerContent: adBlockerContentType = {
  title: "تم اكتشاف مانع الإعلانات",
  description: "لاحظنا أنك تستخدم مانع الإعلانات. يرجى التفكير في تعطيله أو الترقية إلى النسخة المميزة للحصول على تجربة خالية من الإعلانات!",
  reloadPage: "إعادة تحميل الصفحة",
  upgradeToPremium: "الترقية إلى النسخة المميزة"
}