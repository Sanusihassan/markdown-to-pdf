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
    title: "Comprimir PDF",
    seoTitle:
      "Comprimir PDFs en línea — Reductor gratuito de tamaño de archivo",
    description: "Reduce el tamaño de un archivo PDF manteniendo la calidad",
    color: "var(--green)",
    type: ".pdf",
    to: "/compress-pdf",
    features: [
      {
        title: "Compresión de PDF versátil",
        description:
          "Obtén resultados rápidos y fiables en los que puedes confiar cada vez. Elige entre varios niveles de compresión para ajustar el tamaño del archivo sin comprometer la calidad del documento.",
      },
      {
        title: "No es necesario registrarse por correo",
        description:
          "Comienza a comprimir tus PDFs de inmediato: sin registro por correo electrónico y sin necesidad de datos de tarjeta de crédito. Simplemente sube tu documento y comprímelo según lo necesites.",
      },
      {
        title: "Manteniendo la calidad en todo momento",
        description:
          "PDFEquips utiliza tecnología avanzada para optimizar tanto el tamaño como la calidad de las imágenes en tus PDFs. Esto garantiza archivos significativamente más pequeños sin sacrificar la fidelidad de tus documentos.",
      },
    ],
    keywords:
      "comprimir PDF, comprimir PDF en línea, reducir tamaño de PDF, compresión de PDF gratis, compresor de PDF, compresor de PDF en línea, herramienta de compresión de PDF, reducción de tamaño de PDF, reductor de tamaño de archivo PDF, comprimir documentos PDF, achicar archivos PDF, compresión segura de PDF, optimizador de PDF, comprimir PDFs gratis, compresor de archivos PDF en línea, compresión PDF sin registro, reducir tamaño PDF en línea, reductor gratuito de PDF, compresión rápida de PDF",
  },
};

export const tools: _tools = {
  select: "Seleccionar",
  or_drop: "o soltar archivos aquí",
  files: "archivos",
  drop_files: "Arrastra los archivos aquí",
};

export const edit_page: _edit_page = {
  edit_page_titles: {
    compress_pdf: "Opciones de compresión de PDF",
  },
  loader_text: "Por favor, espere...",
  add_more_button: "Agregar más páginas",
  action_buttons: {
    compress_pdf: "Comprimir PDF",
  },
  pages: "páginas",
  page: "página",
  filenameOptions: {
    label: "Nombre del archivo de salida (opcional)",
    placeholder: "Ingrese el nombre del archivo",
    helperText: "Este será el nombre del PDF comprimido al descargarlo.",
    cta: "Ver planes",
    upgradeNotice: {
      msg: "Los niveles del 2.0 al 10.0 están disponibles con la versión premium.",
      cta: "Actualizar ahora",
    },
  },

  compress_pdf: [
    {
      title: "Compresión recomendada",
      description: "Mejor equilibrio entre tamaño y calidad",
    },
    {
      title: "Menos compresión",
      description: "Tamaño de archivo más pequeño pero calidad inferior",
    },
    {
      title: "Compresión extrema",
      description:
        "Tamaño de archivo significativamente menor pero calidad mucho más baja",
    },
    {
      title: "Compresión personalizada",
      description: "Elige tu propio nivel de compresión",
    },
  ],
};

export const downloadFile: _downloadFile = {
  titles: {
    "compress-pdf": [
      "¡Los archivos PDF han sido comprimidos!",
      "¡El archivo PDF ha sido comprimido!",
    ],
  },

  btnText: {
    "compress-pdf": [
      "Descargar archivos PDF comprimidos",
      "Descargar archivo PDF comprimido",
    ],
  },

  backto: {
    "compress-pdf": "Volver a Comprimir PDF",
  },
  compressionAnalyticsContent: {
    title: "Análisis de Compresión",
    description:
      "Desglose detallado de los resultados de la compresión de tu PDF",
    sizeComparisonTitle: "Comparación de Tamaños",
    reductionBreakdownTitle: "Desglose de Reducción",
    sizeSavedLabel: "Espacio Ahorrado",
    compressionRatioLabel: "Relación de Compresión",
    sizeReducedLabel: "Tamaño Reducido",
    chart: {
      original: "Original",
      compressed: "Comprimido",
      reduced: "Reducido",
      remaining: "Restante",
    },
  },
};

export const footer: _footer = {
  brand: "PDFEquips",
  terms: "términos",
  conditions: "condiciones",
  privacy_policy: "política de privacidad",
};

export const errors: _errors = {
  EMPTY_FILE: {
    message: "El archivo está vacío. Por favor, elija un archivo válido.",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "El archivo es demasiado grande. Por favor, elija un archivo más pequeño o use nuestra herramienta de compresión de PDF para reducir el tamaño del archivo.",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  NOT_SUPPORTED_TYPE: {
    message: "El archivo no es un tipo compatible.",
    types: {
      PDF: "Por favor, elija un archivo PDF válido.",
      JPG: "Por favor, elija un archivo de imagen JPEG válido.",
      DOC: "Por favor, elija un archivo de documento de Word válido.",
      DOCX: "Por favor, elija un archivo de documento de Word válido.",
      XLS: "Por favor, elija un archivo de hoja de cálculo de Excel válido.",
      XLSX: "Por favor, elija un archivo de hoja de cálculo de Excel válido.",
      PPT: "Por favor, elija un archivo de presentación de PowerPoint válido.",
      PPTX: "Por favor, elija un archivo de presentación de PowerPoint válido.",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message:
      "El archivo estácorrupto y no se puede procesar. Por favor, elija un archivo válido.",
    code: "ERR_FILE_CORRUPT",
  },
  MISSING_FONTS: {
    message:
      "El archivo contiene fuentes faltantes. Por favor, asegúrese de que todas las fuentes estén incrustadas en el archivo PDF.",
    code: "ERR_MISSING_FONTS",
  },
  INVALID_IMAGE_DATA: {
    message:
      "El archivo contiene datos de imagen no válidos. Por favor, asegúrese de que todas las imágenes estén correctamente formateadas.",
    code: "ERR_INVALID_IMAGE_DATA",
  },
  SECURITY_RISK: {
    message:
      "El archivo contiene un riesgo de seguridad y no se puede procesar. Por favor, elija un archivo válido.",
    code: "ERR_SECURITY_RISK",
  },
  MAX_FILES_EXCEEDED: {
    message:
      "Ha excedido el número máximo de archivos permitidos. Por favor, elimine algunos archivos e intente nuevamente.",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message:
      "No se han seleccionado archivos. Por favor, seleccione al menos un archivo.",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message:
      "Ha ocurrido un error desconocido. Por favor, inténtelo de nuevo más tarde o contacte al soporte.",
    code: "ERR_UNKNOWN",
  },
  ERR_NETWORK: {
    message:
      "Ha ocurrido un error en la red. Por favor, comprueba tu conexión a internet e inténtalo de nuevo.",
    code: "ERR_NETWORK",
  },
  PASSWORD_REQUIRED: {
    message: "El PDF requiere una contraseña.",
    code: "PASSWORD_REQUIRED",
  },

  INCORRECT_PASSWORD: {
    message: "La contraseña que ingresaste es incorrecta.",
    code: "INCORRECT_PASSWORD",
  },
  MAX_DAILY_USAGE: {
    message:
      "Has alcanzado tu límite de uso diario. Por favor, actualiza tu plan para seguir usando esta función sin interrupciones.",
    code: "MAX_DAILY_USAGE",
  },
  alerts: {
    maxFiles: "Máximo 15 archivos permitidos. ¡Suscríbete para más!",
    singleFileSize:
      "El tamaño de un solo archivo debe ser menor a 100 MB. ¡Actualiza para subir archivos más grandes!",
    fileSize:
      "Cada archivo debe ser menor a 50 MB. ¡Desbloquea límites más altos con la suscripción!",
  },
};

export const adBlockerContent: adBlockerContentType = {
  title: "Bloqueador de anuncios detectado",
  description: "Notamos que estás usando un bloqueador de anuncios. ¡Por favor considera desactivarlo o actualizar a premium para una experiencia sin anuncios!",
  reloadPage: "Recargar página",
  upgradeToPremium: "Actualizar a Premium"
}