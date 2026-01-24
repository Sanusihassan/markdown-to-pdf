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
    title: "Markdown a PDF",
    seoTitle:
      "Convertir Markdown a PDF - Herramienta para convertir Markdown a PDF",
    description: "Convertir Markdown a PDF",
    color: "#6c5ce7",
    type: ".pdf",
    to: "/markdown-to-pdf",
  },
};

export const edit_page: _edit_page = {
  edit_page_titles: {
    markdown_to_pdf: "Opciones de Markdown a PDF",
  },
  placeholder: "Pregunta lo que sea",
  loader_text: "Por favor espera...",
  add_more_button: "Agrega más archivos",
  action_buttons: {
    markdown_to_pdf: "Markdown a PDF",
  },
  pages: "paginas",
  page: "página",
  toolbar: {
    rename_file: "Renombrar archivo",
    upload_file: "Subir archivo",
    upload_from_github: "Subir desde GitHub",
    options: "Opciones",
    assistant: "Asistente"
  },
  document_name: {
    doc_name: "NOMBRE DEL DOCUMENTO",
    untitled: "Documento sin título",
  },
  github_popup: {
    label: "URL de la carpeta de GitHub:",
    placeholder: "Introduce la URL de GitHub",
    submit: "Aceptar",
  },
  download_pdf_text: "Descargar PDF",
  options: {
    title: "Opciones",
    theme: "Tema",
    screen_size: "Tamaño de Pantalla",
    orientation: "Orientación",
    margin: "Margen de Página",
    page_size: "Tamaño de Página",
    label_content: {
      orientation: ["Vertical", "Horizontal"],
      screen_sizes: {
        your_screen: "Tu Pantalla",
        desktop_hd: "Escritorio HD (1920px)",
        desktop_144: "Escritorio (1440px)",
        tablet: "Tableta 768px",
        mobile: "Móvil (320px)",
      },
      margin: {
        no_margin: "Sin Margen",
        small: "Pequeño",
        big: "Grande",
      },
    },
    font_size: "Tamaño de fuente",
    defaults: "Valores predeterminados",
    save_changes: "Guardar cambios",
    direction: "Dirección del Texto",
    ltr: "IZQ-DER",
    rtl: "DER-IZQ",
  },
};

export const tools: _tools = {
  select: "Seleccionar",
  or_drop: "o soltar archivos aquí",
  files: "archivos",
  drop_files: "Arrastra los archivos aquí",
};

export const downloadFile: _downloadFile = {
  titles: {
    "markdown-to-pdf": [
      "¡Conversión de archivos Markdown a PDF exitosa!",
      "¡Conversión de archivo Markdown a PDF exitosa!",
    ],
  },
  btnText: {
    "markdown-to-pdf": [
      "Descargar archivos PDF convertidos",
      "Descargar archivo PDF convertido",
    ],
  },
  backto: {
    "markdown-to-pdf": "Volver a Markdown a PDF",
  },
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
  ERR_MAX_USAGE: {
    message: "Se ha excedido el uso máximo. Por favor, actualice o suscríbase para continuar utilizando este servicio.",
    code: "ERR_MAX_USAGE",
  },
  INVALID_GITHUB_URL: {
    message:
      "La URL de GitHub no es válida. Por favor, ingrese una URL de GitHub válida.",
    code: "ERR_INVALID_GITHUB_URL",
  },
  MAX_DAILY_USAGE: {
    message:
      "Has alcanzado tu límite de uso diario. Por favor, actualiza tu plan para seguir usando esta función sin interrupciones.",
    code: "MAX_DAILY_USAGE",
  },
  alerts: {
    singleFileSize:
      "El tamaño de un solo archivo debe ser menor a 100 MB. ¡Actualiza para subir archivos más grandes!",
  },
};

export const adBlockerContent: adBlockerContentType = {
  title: "Bloqueador de anuncios detectado",
  description: "Notamos que estás usando un bloqueador de anuncios. ¡Por favor considera desactivarlo o actualizar a premium para una experiencia sin anuncios!",
  reloadPage: "Recargar página",
  upgradeToPremium: "Actualizar a Premium"
}