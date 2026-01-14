import type { HowTo, WithContext } from 'schema-dts';

// English
export const MarkdownToPDFHOWTO: WithContext<HowTo> = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Convert Markdown to PDF",
  description: "Step-by-step guide to convert Markdown files to PDF.",
  step: [
    {
      "@type": "HowToStep",
      name: "Option 1: Write and Edit Markdown",
      text: "Open the Markdown editor tool.",
      itemListElement: [
        {
          "@type": "HowToDirection",
          text: "Click on the 'Rename File' icon to customize the file name for the PDF.",
        },
        {
          "@type": "HowToDirection",
          text: "Write and edit Markdown in the editor.",
        },
        {
          "@type": "HowToDirection",
          text: "Click 'Download PDF' to generate and download the PDF file.",
        },
      ],
    },
    {
      "@type": "HowToStep",
      name: "Option 2: Upload Markdown File/s",
      text: "Upload Markdown file/s.",
      itemListElement: [
        {
          "@type": "HowToDirection",
          text: "Click 'Upload Markdown Files' button.",
        },
        {
          "@type": "HowToDirection",
          text: "Select file/s from your device.",
        },
        {
          "@type": "HowToDirection",
          text: "Click 'Markdown to PDF'.",
        },
        {
          "@type": "HowToDirection",
          text: "Click 'Download' to get the converted PDF.",
        },
        {
          "@type": "HowToDirection",
          text: "Optionally, delete unwanted files.",
        },
      ],
    },
    {
      "@type": "HowToStep",
      name: "Option 3: Upload from GitHub URL",
      text: "Insert GitHub URL/s for Markdown files.",
      itemListElement: [
        {
          "@type": "HowToDirection",
          text: "Enter the GitHub URL/s.",
        },
        {
          "@type": "HowToDirection",
          text: "Click 'Fetch from GitHub'.",
        },
        {
          "@type": "HowToDirection",
          text: "Filter and select files.",
        },
        {
          "@type": "HowToDirection",
          text: "Click 'Markdown to PDF'.",
        },
        {
          "@type": "HowToDirection",
          text: "Click 'Download' to get the combined PDF.",
        },
      ],
    },
  ],
};

// Arabic (ar)
export const MarkdownToPDFHOWTO_AR: WithContext<HowTo> = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  inLanguage: "ar",
  name: "كيفية تحويل Markdown إلى PDF",
  description: "دليل خطوة بخطوة لتحويل ملفات Markdown إلى PDF.",
  step: [
    {
      "@type": "HowToStep",
      name: "الخيار 1: كتابة وتحرير Markdown",
      text: "افتح أداة محرر Markdown.",
      itemListElement: [
        {
          "@type": "HowToDirection",
          text: "انقر على أيقونة 'إعادة تسمية الملف' لتخصيص اسم ملف PDF.",
        },
        {
          "@type": "HowToDirection",
          text: "اكتب وحرر Markdown في المحرر.",
        },
        {
          "@type": "HowToDirection",
          text: "انقر على 'تنزيل PDF' لإنشاء وتنزيل ملف PDF.",
        },
      ],
    },
    {
      "@type": "HowToStep",
      name: "الخيار 2: تحميل ملفات Markdown",
      text: "قم بتحميل ملفات Markdown.",
      itemListElement: [
        {
          "@type": "HowToDirection",
          text: "انقر على زر 'تحميل ملفات Markdown'.",
        },
        {
          "@type": "HowToDirection",
          text: "حدد الملفات من جهازك.",
        },
        {
          "@type": "HowToDirection",
          text: "انقر على 'Markdown إلى PDF'.",
        },
        {
          "@type": "HowToDirection",
          text: "انقر على 'تنزيل' للحصول على ملف PDF المحول.",
        },
        {
          "@type": "HowToDirection",
          text: "اختياريًا، احذف الملفات غير المرغوب فيها.",
        },
      ],
    },
    {
      "@type": "HowToStep",
      name: "الخيار 3: التحميل من رابط GitHub",
      text: "أدخل عناوين URL من GitHub لملفات Markdown.",
      itemListElement: [
        {
          "@type": "HowToDirection",
          text: "أدخل عنوان URL من GitHub.",
        },
        {
          "@type": "HowToDirection",
          text: "انقر على 'جلب من GitHub'.",
        },
        {
          "@type": "HowToDirection",
          text: "قم بتصفية وتحديد الملفات.",
        },
        {
          "@type": "HowToDirection",
          text: "انقر على 'Markdown إلى PDF'.",
        },
        {
          "@type": "HowToDirection",
          text: "انقر على 'تنزيل' للحصول على ملف PDF المدمج.",
        },
      ],
    },
  ],
};

// Spanish (es)
export const MarkdownToPDFHOWTO_ES: WithContext<HowTo> = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  inLanguage: "es",
  name: "Cómo Convertir Markdown a PDF",
  description: "Guía paso a paso para convertir archivos Markdown a PDF.",
  step: [
    {
      "@type": "HowToStep",
      name: "Opción 1: Escribir y Editar Markdown",
      text: "Abre la herramienta de editor Markdown.",
      itemListElement: [
        {
          "@type": "HowToDirection",
          text: "Haz clic en el ícono 'Renombrar Archivo' para personalizar el nombre del archivo PDF.",
        },
        {
          "@type": "HowToDirection",
          text: "Escribe y edita Markdown en el editor.",
        },
        {
          "@type": "HowToDirection",
          text: "Haz clic en 'Descargar PDF' para generar y descargar el archivo PDF.",
        },
      ],
    },
    {
      "@type": "HowToStep",
      name: "Opción 2: Subir Archivos Markdown",
      text: "Sube archivos Markdown.",
      itemListElement: [
        {
          "@type": "HowToDirection",
          text: "Haz clic en el botón 'Subir Archivos Markdown'.",
        },
        {
          "@type": "HowToDirection",
          text: "Selecciona archivos desde tu dispositivo.",
        },
        {
          "@type": "HowToDirection",
          text: "Haz clic en 'Markdown a PDF'.",
        },
        {
          "@type": "HowToDirection",
          text: "Haz clic en 'Descargar' para obtener el PDF convertido.",
        },
        {
          "@type": "HowToDirection",
          text: "Opcionalmente, elimina archivos no deseados.",
        },
      ],
    },
    {
      "@type": "HowToStep",
      name: "Opción 3: Subir desde URL de GitHub",
      text: "Inserta URLs de GitHub para archivos Markdown.",
      itemListElement: [
        {
          "@type": "HowToDirection",
          text: "Ingresa las URLs de GitHub.",
        },
        {
          "@type": "HowToDirection",
          text: "Haz clic en 'Obtener desde GitHub'.",
        },
        {
          "@type": "HowToDirection",
          text: "Filtra y selecciona archivos.",
        },
        {
          "@type": "HowToDirection",
          text: "Haz clic en 'Markdown a PDF'.",
        },
        {
          "@type": "HowToDirection",
          text: "Haz clic en 'Descargar' para obtener el PDF combinado.",
        },
      ],
    },
  ],
};

// French (fr)
export const MarkdownToPDFHOWTO_FR: WithContext<HowTo> = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  inLanguage: "fr",
  name: "Comment Convertir Markdown en PDF",
  description: "Guide étape par étape pour convertir des fichiers Markdown en PDF.",
  step: [
    {
      "@type": "HowToStep",
      name: "Option 1 : Écrire et Éditer Markdown",
      text: "Ouvrez l'outil d'édition Markdown.",
      itemListElement: [
        {
          "@type": "HowToDirection",
          text: "Cliquez sur l'icône 'Renommer le Fichier' pour personnaliser le nom du fichier PDF.",
        },
        {
          "@type": "HowToDirection",
          text: "Écrivez et éditez Markdown dans l'éditeur.",
        },
        {
          "@type": "HowToDirection",
          text: "Cliquez sur 'Télécharger PDF' pour générer et télécharger le fichier PDF.",
        },
      ],
    },
    {
      "@type": "HowToStep",
      name: "Option 2 : Téléverser des Fichiers Markdown",
      text: "Téléversez des fichiers Markdown.",
      itemListElement: [
        {
          "@type": "HowToDirection",
          text: "Cliquez sur le bouton 'Téléverser des Fichiers Markdown'.",
        },
        {
          "@type": "HowToDirection",
          text: "Sélectionnez des fichiers depuis votre appareil.",
        },
        {
          "@type": "HowToDirection",
          text: "Cliquez sur 'Markdown vers PDF'.",
        },
        {
          "@type": "HowToDirection",
          text: "Cliquez sur 'Télécharger' pour obtenir le PDF converti.",
        },
        {
          "@type": "HowToDirection",
          text: "Optionnellement, supprimez les fichiers indésirables.",
        },
      ],
    },
    {
      "@type": "HowToStep",
      name: "Option 3 : Téléverser depuis une URL GitHub",
      text: "Insérez des URLs GitHub pour les fichiers Markdown.",
      itemListElement: [
        {
          "@type": "HowToDirection",
          text: "Entrez les URLs GitHub.",
        },
        {
          "@type": "HowToDirection",
          text: "Cliquez sur 'Récupérer depuis GitHub'.",
        },
        {
          "@type": "HowToDirection",
          text: "Filtrez et sélectionnez les fichiers.",
        },
        {
          "@type": "HowToDirection",
          text: "Cliquez sur 'Markdown vers PDF'.",
        },
        {
          "@type": "HowToDirection",
          text: "Cliquez sur 'Télécharger' pour obtenir le PDF combiné.",
        },
      ],
    },
  ],
};

// Hindi (hi)
export const MarkdownToPDFHOWTO_HI: WithContext<HowTo> = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  inLanguage: "hi",
  name: "Markdown को PDF में कैसे बदलें",
  description: "Markdown फ़ाइलों को PDF में बदलने के लिए चरण-दर-चरण गाइड।",
  step: [
    {
      "@type": "HowToStep",
      name: "विकल्प 1: Markdown लिखें और संपादित करें",
      text: "Markdown एडिटर टूल खोलें।",
      itemListElement: [
        {
          "@type": "HowToDirection",
          text: "PDF के लिए फ़ाइल का नाम कस्टमाइज़ करने के लिए 'फ़ाइल का नाम बदलें' आइकन पर क्लिक करें।",
        },
        {
          "@type": "HowToDirection",
          text: "एडिटर में Markdown लिखें और संपादित करें।",
        },
        {
          "@type": "HowToDirection",
          text: "PDF फ़ाइल बनाने और डाउनलोड करने के लिए 'PDF डाउनलोड करें' पर क्लिक करें।",
        },
      ],
    },
    {
      "@type": "HowToStep",
      name: "विकल्प 2: Markdown फ़ाइलें अपलोड करें",
      text: "Markdown फ़ाइलें अपलोड करें।",
      itemListElement: [
        {
          "@type": "HowToDirection",
          text: "'Markdown फ़ाइलें अपलोड करें' बटन पर क्लिक करें।",
        },
        {
          "@type": "HowToDirection",
          text: "अपने डिवाइस से फ़ाइलें चुनें।",
        },
        {
          "@type": "HowToDirection",
          text: "'Markdown से PDF' पर क्लिक करें।",
        },
        {
          "@type": "HowToDirection",
          text: "परिवर्तित PDF प्राप्त करने के लिए 'डाउनलोड' पर क्लिक करें।",
        },
        {
          "@type": "HowToDirection",
          text: "वैकल्पिक रूप से, अनचाही फ़ाइलें हटाएं।",
        },
      ],
    },
    {
      "@type": "HowToStep",
      name: "विकल्प 3: GitHub URL से अपलोड करें",
      text: "Markdown फ़ाइलों के लिए GitHub URL डालें।",
      itemListElement: [
        {
          "@type": "HowToDirection",
          text: "GitHub URL दर्ज करें।",
        },
        {
          "@type": "HowToDirection",
          text: "'GitHub से प्राप्त करें' पर क्लिक करें।",
        },
        {
          "@type": "HowToDirection",
          text: "फ़ाइलें फ़िल्टर और चुनें।",
        },
        {
          "@type": "HowToDirection",
          text: "'Markdown से PDF' पर क्लिक करें।",
        },
        {
          "@type": "HowToDirection",
          text: "संयुक्त PDF प्राप्त करने के लिए 'डाउनलोड' पर क्लिक करें।",
        },
      ],
    },
  ],
};

// Chinese (zh)
export const MarkdownToPDFHOWTO_ZH: WithContext<HowTo> = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  inLanguage: "zh",
  name: "如何将 Markdown 转换为 PDF",
  description: "将 Markdown 文件转换为 PDF 的分步指南。",
  step: [
    {
      "@type": "HowToStep",
      name: "选项 1：编写和编辑 Markdown",
      text: "打开 Markdown 编辑器工具。",
      itemListElement: [
        {
          "@type": "HowToDirection",
          text: '点击"重命名文件"图标以自定义 PDF 的文件名。',
        },
        {
          "@type": "HowToDirection",
          text: "在编辑器中编写和编辑 Markdown。",
        },
        {
          "@type": "HowToDirection",
          text: '点击"下载 PDF"以生成并下载 PDF 文件。',
        },
      ],
    },
    {
      "@type": "HowToStep",
      name: "选项 2：上传 Markdown 文件",
      text: "上传 Markdown 文件。",
      itemListElement: [
        {
          "@type": "HowToDirection",
          text: '点击"上传 Markdown 文件"按钮。',
        },
        {
          "@type": "HowToDirection",
          text: "从您的设备中选择文件。",
        },
        {
          "@type": "HowToDirection",
          text: '点击"Markdown 转 PDF"。',
        },
        {
          "@type": "HowToDirection",
          text: '点击"下载"以获取转换后的 PDF。',
        },
        {
          "@type": "HowToDirection",
          text: "可选择删除不需要的文件。",
        },
      ],
    },
    {
      "@type": "HowToStep",
      name: "选项 3：从 GitHub URL 上传",
      text: "插入 Markdown 文件的 GitHub URL。",
      itemListElement: [
        {
          "@type": "HowToDirection",
          text: "输入 GitHub URL。",
        },
        {
          "@type": "HowToDirection",
          text: '点击"从 GitHub 获取"。',
        },
        {
          "@type": "HowToDirection",
          text: "筛选并选择文件。",
        },
        {
          "@type": "HowToDirection",
          text: '点击"Markdown 转 PDF"。',
        },
        {
          "@type": "HowToDirection",
          text: '点击"下载"以获取合并的 PDF。',
        },
      ],
    },
  ],
};