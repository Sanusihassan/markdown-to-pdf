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
    title: "Markdown से पीडीएफ में रूपांतरण",
    seoTitle:
      "Markdown से पीडीएफ में रूपांतरण - मार्कडाउन से पीडीएफ कनवर्टर टूल",
    description: "Markdown से पीडीएफ में रूपांतरण",
    color: "#6c5ce7",
    type: ".pdf",
    to: "/markdown-to-pdf",
  },
};

export const downloadFile: _downloadFile = {
  titles: {
    "markdown-to-pdf": [
      "मार्कडाउन फ़ाइलें PDF में रूपांतरित की गईं!",
      "मार्कडाउन फ़ाइल को PDF में रूपांतरित किया गया है!",
    ],
  },
  btnText: {
    "markdown-to-pdf": [
      "PDF में रूपांतरित की गई मार्कडाउन फ़ाइलें डाउनलोड करें",
      "PDF में रूपांतरित की गई मार्कडाउन फ़ाइल डाउनलोड करें",
    ],
  },
  backto: {
    "markdown-to-pdf": "मार्कडाउन से PDF को वापस जाएं",
  },
};

export const edit_page: _edit_page = {
  edit_page_titles: {
    markdown_to_pdf: "Markdown से PDF विकल्प",
  },
  loader_text: "कृपया प्रतीक्षा करें...",
  add_more_button: "अधिक फ़ाइलें जोड़ें",
  action_buttons: {
    markdown_to_pdf: "Markdown से PDF",
  },
  placeholder: "कुछ भी पूछें",
  pages: "पृष्ठों",
  page: "पृष्ठ",
  toolbar: {
    rename_file: "फ़ाइल का नाम बदलें",
    upload_file: "फ़ाइल अपलोड करें",
    upload_from_github: "GitHub से अपलोड करें",
    options: "विकल्प",
    assistant: "सहायक"
  },
  document_name: {
    doc_name: "दस्तावेज़ नाम",
    untitled: "शीर्षक रहित दस्तावेज़",
  },
  github_popup: {
    label: "GitHub फ़ोल्डर URL:",
    placeholder: "GitHub URL दर्ज करें",
    submit: "ठीक है",
  },
  download_pdf_text: "PDF डाउनलोड करें",
  options: {
    title: "विकल्प",
    theme: "थीम",
    screen_size: "स्क्रीन का आकार",
    orientation: "अभिविन्यास",
    margin: "पृष्ठ का किनारा",
    page_size: "पृष्ठ का आकार",
    label_content: {
      orientation: ["पोर्ट्रेट", "लैंडस्केप"],
      screen_sizes: {
        your_screen: "आपका स्क्रीन",
        desktop_hd: "डेस्कटॉप HD (1920px)",
        desktop_144: "डेस्कटॉप (1440px)",
        tablet: "टैबलेट 768px",
        mobile: "मोबाइल (320px)",
      },
      margin: {
        no_margin: "कोई मार्जिन नहीं",
        small: "छोटा",
        big: "बड़ा",
      },
    },
    font_size: "फ़ॉन्ट साइज़",
    defaults: "डिफ़ॉल्ट",
    save_changes: "परिवर्तन सहेजें",
    direction: "टेक्स्ट दिशा",
    ltr: "बाएं-दाएं",
    rtl: "दाएं-बाएं",
  },
};

export const tools: _tools = {
  select: "चुनें",
  or_drop: "या फ़ाइलें यहां छोड़ें",
  files: "फाइलें",
  drop_files: "फ़ाइलें यहाँ खींचें",
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
  ERR_MAX_USAGE: {
    message: "अधिकतम उपयोग सीमा पार हो गई है। कृपया इस सेवा का उपयोग जारी रखने के लिए अपग्रेड करें या सब्सक्राइब करें।",
    code: "ERR_MAX_USAGE",
  },
  INVALID_GITHUB_URL: {
    message: "GitHub URL अमान्य है। कृपया एक वैध GitHub URL दर्ज करें।",
    code: "ERR_INVALID_GITHUB_URL",
  },
  MAX_DAILY_USAGE: {
    message:
      "आपने अपनी दैनिक उपयोग सीमा पूरी कर ली है। कृपया इस सुविधा का निर्बाध उपयोग जारी रखने के लिए अपनी योजना अपग्रेड करें।",
    code: "MAX_DAILY_USAGE",
  },
  alerts: {
    singleFileSize:
      "एकल फ़ाइल का आकार 100 एमबी से कम होना चाहिए। बड़ी फ़ाइलें अपलोड करने के लिए अपग्रेड करें!",
  },
};

export const adBlockerContent: adBlockerContentType = {
  title: "विज्ञापन अवरोधक का पता चला",
  description: "हमने देखा है कि आप विज्ञापन अवरोधक का उपयोग कर रहे हैं। कृपया इसे अक्षम करने या विज्ञापन-मुक्त अनुभव के लिए प्रीमियम में अपग्रेड करने पर विचार करें!",
  reloadPage: "पेज फिर से लोड करें",
  upgradeToPremium: "प्रीमियम में अपग्रेड करें"
};
