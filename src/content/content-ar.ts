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
  Compress_PDF: {
    title: "ضغط PDF",
    seoTitle: "ضغط ملفات PDF عبر الإنترنت - أداة تقليل حجم الملفات مجاناً",
    description: "قلل من حجم ملف PDF مع الحفاظ على الجودة",
    color: "var(--green)",
    type: ".pdf",
    to: "/compress-pdf",
    features: [
      {
        title: "ضغط PDF متعدد الاستخدامات",
        description:
          "احصل على نتائج سريعة وموثوقة يمكنك الاعتماد عليها في كل مرة. اختر من بين مستويات ضغط مختلفة لتعديل حجم الملف دون المساس بجودة المستند.",
      },
      {
        title: "لا حاجة لتسجيل البريد الإلكتروني",
        description:
          "ابدأ في ضغط ملفات PDF الخاصة بك فوراً - بدون تسجيل بريد إلكتروني أو تفاصيل بطاقة ائتمان. فقط قم بتحميل المستند واضغطه حسب حاجتك.",
      },
      {
        title: "الحفاظ على الجودة دائماً",
        description:
          "يستخدم PDFEquips تقنية متقدمة لتحسين حجم وجودة الصور في ملفات PDF الخاصة بك، مما يضمن لك الحصول على ملفات أصغر بكثير دون فقدان دقة المستندات.",
      },
    ],
    keywords:
      "ضغط PDF، ضغط PDF عبر الإنترنت، تقليل حجم ملف PDF، ضغط PDF مجاناً، أداة ضغط PDF، تقليل حجم ملفات PDF، ضغط مستندات PDF، تصغير ملفات PDF، ضغط PDF آمن، تحسين PDF، ضغط ملفات PDF مجاناً، أداة ضغط PDF بدون تسجيل، تقليل حجم PDF عبر الإنترنت، ضغط PDF سريع",
  },
};

export const tools: _tools = {
  select: "اختر",
  or_drop: "أو قم بإسقاط الملفات هنا",
  files: "ملفات",
  drop_files: "قم بوضع الملفات هنا",
};

export const edit_page: _edit_page = {
  edit_page_titles: {
    compress_pdf: "خيارات ضغط PDF",
  },
  loader_text: "يرجى الانتظار...",
  add_more_button: "إضافة المزيد من الصفحات",
  action_buttons: {
    compress_pdf: "ضغط PDF",
  },
  pages: "صفحات",
  page: "صفحة",
  filenameOptions: {
    label: "اسم الملف الناتج (اختياري)",
    placeholder: "أدخل اسم الملف",
    helperText: "سيكون هذا هو اسم ملف PDF المضغوط عند تنزيله.",
    cta: "عرض الخطط",
    upgradeNotice: {
      msg: "المستويات من 2.0 إلى 10.0 متاحة مع الخطة المميزة.",
      cta: "الترقية الآن",
    },
  },

  compress_pdf: [
    {
      title: "الضغط الموصى به",
      description: "أفضل توازن بين الحجم والجودة",
    },
    {
      title: "ضغط أقل",
      description: "جودة أعلى لكن بحجم ملف أكبر",
    },
    {
      title: "ضغط عالي جداً",
      description: "حجم ملف أصغر بكثير ولكن بجودة أقل بكثير",
    },
    {
      title: "ضغط مخصص",
      description: "اختر مستوى الضغط الذي تريده بنفسك",
    },
  ],
};

export const downloadFile: _downloadFile = {
  titles: {
    "compress-pdf": ["تم ضغط ملفات PDF!", "تم ضغط ملف PDF!"],
  },

  btnText: {
    "compress-pdf": ["تحميل ملفات PDF المضغوطة", "تحميل ملف PDF المضغوط"],
  },

  backto: {
    "compress-pdf": "العودة إلى ضغط PDF",
  },
  compressionAnalyticsContent: {
    title: "تحليلات الضغط",
    description: "تفاصيل دقيقة لنتائج ضغط ملف PDF الخاص بك",
    sizeComparisonTitle: "مقارنة الحجم",
    reductionBreakdownTitle: "تفاصيل نسبة التخفيض",
    sizeSavedLabel: "المساحة المحفوظة",
    compressionRatioLabel: "نسبة الضغط",
    sizeReducedLabel: "الحجم المُخفض",
    chart: {
      original: "الأصلي",
      compressed: "المضغوط",
      reduced: "المُخفض",
      remaining: "المتبقي",
    },
  },
};

export const footer: _footer = {
  brand: "PDFEquips",
  terms: "الشروط",
  conditions: "والأحكام",
  privacy_policy: "سياسة الخصوصية",
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
  MISSING_FONTS: {
    message:
      "الملف يحتوي على خطوط أحرف مفقودة. يرجى التأكد من تضمين جميع الخطوط في ملف PDF.",
    code: "ERR_MISSING_FONTS",
  },
  INVALID_IMAGE_DATA: {
    message:
      "الملف يحتوي على بيانات صورة غير صالحة. يرجى التأكد من تنسيق جميع الصور بشكل صحيح.",
    code: "ERR_INVALID_IMAGE_DATA",
  },
  SECURITY_RISK: {
    message:
      "الملف يحتوي على مخاطر أمان ولا يمكن معالجته. يرجى اختيار ملف صالح.",
    code: "ERR_SECURITY_RISK",
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
  PASSWORD_REQUIRED: {
    message: "ملف PDF يتطلب كلمة مرور.",
    code: "PASSWORD_REQUIRED",
  },
  INCORRECT_PASSWORD: {
    message: "كلمة المرور التي أدخلتها غير صحيحة.",
    code: "INCORRECT_PASSWORD",
  },

  MAX_DAILY_USAGE: {
    message:
      "لقد وصلت إلى الحد الأقصى للاستخدام اليومي. يُرجى ترقية خطتك لمواصلة استخدام هذه الميزة دون انقطاع.",
    code: "MAX_DAILY_USAGE",
  },
  alerts: {
    maxFiles: "الحد الأقصى 15 ملفاً فقط مسموح. اشترك للحصول على المزيد!",
    singleFileSize:
      "يجب أن يكون حجم الملف الفردي أقل من 100 ميغابايت. قم بالترقية لتحميل ملفات أكبر!",
    fileSize:
      "يجب أن يكون حجم كل ملف أقل من 50 ميغابايت. افتح حدود أكبر بالاشتراك!",
  },
};

export const adBlockerContent: adBlockerContentType = {
  title: "تم اكتشاف مانع الإعلانات",
  description: "لاحظنا أنك تستخدم مانع الإعلانات. يرجى التفكير في تعطيله أو الترقية إلى النسخة المميزة للحصول على تجربة خالية من الإعلانات!",
  reloadPage: "إعادة تحميل الصفحة",
  upgradeToPremium: "الترقية إلى النسخة المميزة"
}