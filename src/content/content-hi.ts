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
    title: "PDF संपीड़ित करें",
    seoTitle: "ऑनलाइन PDF संपीड़न – निःशुल्क फ़ाइल आकार कम करने वाला टूल",
    description: "गुणवत्ता बनाए रखते हुए PDF फ़ाइल का आकार कम करें",
    color: "var(--green)",
    type: ".pdf",
    to: "/compress-pdf",
    features: [
      {
        title: "बहुउद्देश्यीय PDF संपीड़न",
        description:
          "हर बार तेज़ और भरोसेमंद परिणाम प्राप्त करें। अपने फ़ाइल आकार को समायोजित करने के लिए विभिन्न संपीड़न स्तरों में से चुनें, बिना दस्तावेज़ की गुणवत्ता से समझौता किए।",
      },
      {
        title: "ईमेल पंजीकरण की आवश्यकता नहीं",
        description:
          "तुरंत अपने PDF संपीड़ित करना शुरू करें – कोई ईमेल साइन-अप नहीं, कोई क्रेडिट कार्ड विवरण नहीं। बस अपना दस्तावेज़ अपलोड करें और आवश्यकतानुसार संपीड़ित करें।",
      },
      {
        title: "हमेशा गुणवत्ता बनाए रखें",
        description:
          "PDFEquips उन्नत तकनीक का उपयोग करता है जो आपके PDF की छवियों के आकार और गुणवत्ता दोनों को अनुकूलित करता है। इससे आपको बहुत छोटे फ़ाइल आकार मिलते हैं बिना दस्तावेज़ की स्पष्टता कम किए।",
      },
    ],
    keywords:
      "PDF संपीड़न, ऑनलाइन PDF संपीड़न, PDF आकार कम करें, निःशुल्क PDF संपीड़न, PDF फ़ाइल संपीड़न, ऑनलाइन PDF कम्प्रेसर, PDF कम्प्रेस टूल, PDF आकार घटाएं, PDF दस्तावेज़ संपीड़ित करें, सुरक्षित PDF संपीड़न, PDF ऑप्टिमाइज़र, मुफ्त PDF संपीड़न, बिना पंजीकरण PDF कम्प्रेस, तेज़ PDF संपीड़न",
  },
};

export const edit_page: _edit_page = {
  edit_page_titles: {
    compress_pdf: "PDF संपीड़न विकल्प",
  },
  loader_text: "कृपया प्रतीक्षा करें...",
  add_more_button: "अधिक पृष्ठ जोड़ें",
  action_buttons: {
    compress_pdf: "PDF संपीड़ित करें",
  },
  pages: "पृष्ठ",
  page: "पृष्ठ",
  filenameOptions: {
    label: "आउटपुट फ़ाइल का नाम (वैकल्पिक)",
    placeholder: "फ़ाइल का नाम दर्ज करें",
    helperText: "डाउनलोड करते समय यह संकुचित PDF का नाम होगा।",
    cta: "योजनाएँ देखें",
    upgradeNotice: {
      msg: "2.0 से 10.0 तक के स्तर प्रीमियम में उपलब्ध हैं।",
      cta: "अभी अपग्रेड करें",
    },
  },

  compress_pdf: [
    {
      title: "अनुशंसित संपीड़न",
      description: "आकार और गुणवत्ता के बीच सबसे अच्छा संतुलन",
    },
    {
      title: "कम संपीड़न",
      description: "थोड़ा बड़ा फ़ाइल आकार लेकिन उच्च गुणवत्ता",
    },
    {
      title: "अत्यधिक संपीड़न",
      description: "बहुत छोटा फ़ाइल आकार लेकिन गुणवत्ता में कमी",
    },
    {
      title: "कस्टम संपीड़न",
      description: "अपना स्वयं का संपीड़न स्तर चुनें",
    },
  ],
};

export const downloadFile: _downloadFile = {
  titles: {
    "compress-pdf": [
      "PDF फ़ाइलें संपीड़ित कर दी गई हैं!",
      "PDF फ़ाइल संपीड़ित कर दी गई है!",
    ],
  },

  btnText: {
    "compress-pdf": [
      "संपीड़ित PDF फ़ाइलें डाउनलोड करें",
      "संपीड़ित PDF फ़ाइल डाउनलोड करें",
    ],
  },

  backto: {
    "compress-pdf": "PDF संपीड़न पर वापस जाएँ",
  },
  compressionAnalyticsContent: {
    title: "संपीड़न विश्लेषण",
    description: "आपकी PDF संपीड़न के परिणामों का विस्तृत विवरण",
    sizeComparisonTitle: "आकार तुलना",
    reductionBreakdownTitle: "कमी का विश्लेषण",
    sizeSavedLabel: "बचाई गई जगह",
    compressionRatioLabel: "संपीड़न अनुपात",
    sizeReducedLabel: "कम किया गया आकार",
    chart: {
      original: "मूल",
      compressed: "संपीड़ित",
      reduced: "कम किया गया",
      remaining: "शेष",
    },
  },
};

export const tools: _tools = {
  select: "चुनें",
  or_drop: "या फ़ाइलें यहां छोड़ें",
  files: "फाइलें",
  drop_files: "फ़ाइलें यहाँ खींचें",
};

export const footer: _footer = {
  brand: "PDFEquips",
  terms: "शर्तें",
  conditions: "उपयोग की शर्तें",
  privacy_policy: "गोपनीयता नीति",
};

export const errors: _errors = {
  EMPTY_FILE: {
    message: "फ़ाइल खाली है। कृपया एक मान्य फ़ाइल चुनें।",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "फ़ाइल बहुत बड़ी है। कृपया एक छोटी फ़ाइल चुनें या हमारा कंप्रेस-पीडीएफ़ उपकरण उपयोग करके फ़ाइल का आकार कम करें।",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  NOT_SUPPORTED_TYPE: {
    message: "फ़ाइल एक समर्थित प्रकार नहीं है।",
    types: {
      PDF: "कृपया एक मान्य पीडीएफ़फ़ाइल चुनें।",
      JPG: "कृपया एक मान्य जेपेग छवि फ़ाइल चुनें।",
      DOC: "कृपया एक मान्य वर्ड दस्तावेज़ फ़ाइल चुनें।",
      DOCX: "कृपया एक मान्य वर्ड दस्तावेज़ फ़ाइल चुनें।",
      XLS: "कृपया एक मान्य एक्सेल स्प्रेडशीट फ़ाइल चुनें।",
      XLSX: "कृपया एक मान्य एक्सेल स्प्रेडशीट फ़ाइल चुनें।",
      PPT: "कृपया एक मान्यपावरपॉइंट प्रस्तुति फ़ाइल चुनें।",
      PPTX: "कृपया एक मान्य पावरपॉइंट प्रस्तुति फ़ाइल चुनें।",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message:
      "फ़ाइल का डाटा भ्रष्ट है और इसे प्रसंस्करण नहीं किया जा सकता है। कृपया एक मान्य फ़ाइल चुनें।",
    code: "ERR_FILE_CORRUPT",
  },
  MISSING_FONTS: {
    message:
      "फ़ाइल में फ़ॉन्ट गुम हैं। कृपया सुनिश्चित करें कि पीडीएफफ़ाइल में सभी फ़ॉन्ट एम्बेड हैं।",
    code: "ERR_MISSING_FONTS",
  },
  INVALID_IMAGE_DATA: {
    message:
      "फ़ाइल में अवैध छवि डेटा है। कृपया सुनिश्चित करें कि सभी छवियाँ सही ढंग से फ़ॉर्मेटेड हैं।",
    code: "ERR_INVALID_IMAGE_DATA",
  },
  SECURITY_RISK: {
    message:
      "फ़ाइल में सुरक्षा जोखिम हो सकता है और इसे प्रसंस्करण नहीं किया जा सकता है। कृपया एक मान्य फ़ाइल चुनें।",
    code: "ERR_SECURITY_RISK",
  },
  MAX_FILES_EXCEEDED: {
    message:
      "आपने अनुमति दी हुई अधिकतम फ़ाइलों की संख्या पार कर दी है। कृपया कुछ फ़ाइलें हटाएं और पुनः प्रयास करें।",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message: "कोई फ़ाइल चयनित नहीं की गई है। कृपया कम से कम एक फ़ाइल चुनें।",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message:
      "एक अज्ञात त्रुटि हुई है। कृपया बाद में पुनः प्रयास करें या सहायता से संपर्क करें।",
    code: "ERR_UNKNOWN",
  },
  ERR_NETWORK: {
    message:
      "नेटवर्क में त्रुटि हो गई है। कृपया अपना इंटरनेट कनेक्शन जांचें और पुनः प्रयास करें।",
    code: "ERR_NETWORK",
  },
  PASSWORD_REQUIRED: {
    message: "PDF को पासवर्ड की आवश्यकता है।",
    code: "PASSWORD_REQUIRED",
  },

  INCORRECT_PASSWORD: {
    message: "आपने जो पासवर्ड दर्ज किया है वह गलत है।",
    code: "INCORRECT_PASSWORD",
  },
  MAX_DAILY_USAGE: {
    message:
      "आपने अपनी दैनिक उपयोग सीमा पूरी कर ली है। कृपया इस सुविधा का निर्बाध उपयोग जारी रखने के लिए अपनी योजना अपग्रेड करें।",
    code: "MAX_DAILY_USAGE",
  },
  alerts: {
    maxFiles: "अधिकतम 15 फ़ाइलें अनुमति हैं। अधिक के लिए सब्सक्राइब करें!",
    singleFileSize:
      "एकल फ़ाइल का आकार 100 एमबी से कम होना चाहिए। बड़ी फ़ाइलें अपलोड करने के लिए अपग्रेड करें!",
    fileSize:
      "प्रत्येक फ़ाइल का आकार 50 एमबी से कम होना चाहिए। सब्सक्रिप्शन के साथ उच्चतर सीमाएँ अनलॉक करें!",
  },
};

export const adBlockerContent: adBlockerContentType = {
  title: "विज्ञापन अवरोधक का पता चला",
  description: "हमने देखा है कि आप विज्ञापन अवरोधक का उपयोग कर रहे हैं। कृपया इसे अक्षम करने या विज्ञापन-मुक्त अनुभव के लिए प्रीमियम में अपग्रेड करने पर विचार करें!",
  reloadPage: "पेज फिर से लोड करें",
  upgradeToPremium: "प्रीमियम में अपग्रेड करें"
};
