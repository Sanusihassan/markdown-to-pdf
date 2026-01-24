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
    title: "Markdown en PDF",
    seoTitle:
      "Convertir Markdown en PDF - Outil pour convertir Markdown en PDF",
    description: "Convertir des fichiers Markdown en documents PDF",
    color: "#6c5ce7",
    type: ".pdf",
    to: "/markdown-to-pdf",
  },
};

export const tools: _tools = {
  select: "Sélectionner",
  or_drop: "ou déposer des fichiers ici",
  files: "fichiers",
  drop_files: "Déposez les fichiers ici",
};

export const downloadFile: _downloadFile = {
  titles: {
    "markdown-to-pdf": [
      "Conversion de fichiers Markdown en PDF réussie !",
      "Conversion de fichier Markdown en PDF réussie !",
    ],
  },
  btnText: {
    "markdown-to-pdf": [
      "Télécharger les fichiers PDF convertis",
      "Télécharger le fichier PDF converti",
    ],
  },
  backto: {
    "markdown-to-pdf": "Retour à Markdown vers PDF",
  },
};

export const edit_page: _edit_page = {
  edit_page_titles: {
    markdown_to_pdf: "Options de Markdown vers PDF",
  },
  loader_text: "Veuillez patienter...",
  add_more_button: "Ajouter plus de fichiers",
  action_buttons: {
    markdown_to_pdf: "Markdown vers PDF",
  },
  placeholder: "Demandez n'importe quoi",
  pages: "pages",
  page: "page",
  toolbar: {
    rename_file: "Renommer le fichier",
    upload_file: "Télécharger le fichier",
    upload_from_github: "Télécharger depuis GitHub",
    options: "Options",
    assistant: "Assistant"
  },
  document_name: {
    doc_name: "NOM DU DOCUMENT",
    untitled: "Document sans titre",
  },
  github_popup: {
    label: "URL du dossier GitHub :",
    placeholder: "Entrez l'URL GitHub",
    submit: "Valider",
  },
  download_pdf_text: "Télécharger le PDF",
  options: {
    title: "Options",
    theme: "Thème",
    screen_size: "Taille de l'écran",
    orientation: "Orientation",
    margin: "Marge",
    page_size: "Taille de la Page",
    label_content: {
      orientation: ["Portrait", "Paysage"],
      screen_sizes: {
        your_screen: "Votre Écran",
        desktop_hd: "Bureau HD (1920px)",
        desktop_144: "Bureau (1440px)",
        tablet: "Tablette 768px",
        mobile: "Mobile (320px)",
      },
      margin: {
        no_margin: "Sans Marge",
        small: "Petit",
        big: "Grand",
      },
    },
    font_size: "Taille de la police",
    defaults: "Paramètres par défaut",
    save_changes: "Enregistrer les modifications",
    direction: "Direction du Texte",
    ltr: "G-D",
    rtl: "D-G",
  },
};

export const errors: _errors = {
  EMPTY_FILE: {
    message: "Le fichier est vide. Veuillez choisir un fichier valide.",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "Le fichier est trop volumineux. Veuillez choisir un fichier plus petit ou utiliser notre outil de compression PDF pour réduire la taille du fichier.",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  NOT_SUPPORTED_TYPE: {
    message: "Le fichier n'est pas d'un type pris en charge.",
    types: {
      PDF: "Veuillez choisir un fichier PDF valide.",
      JPG: "Veuillez choisir un fichier d'image JPEG valide.",
      DOC: "Veuillez choisir un fichier de document Word valide.",
      DOCX: "Veuillez choisir un fichier de document Word valide.",
      XLS: "Veuillez choisir un fichier de feuille de calcul Excel valide.",
      XLSX: "Veuillez choisir un fichier de feuille de calcul Excel valide.",
      PPT: "Veuillez choisir un fichier de présentation PowerPoint valide.",
      PPTX: "Veuillez choisir un fichier de présentation PowerPoint valide.",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message:
      "Le fichier est corrompu et ne peut pas être traité. Veuillez choisir un fichier valide.",
    code: "ERR_FILE_CORRUPT",
  },
  MAX_FILES_EXCEEDED: {
    message:
      "Vous avez dépassé le nombre maximal de fichiers autorisés. Veuillez supprimer certains fichiers et réessayer.",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message:
      "Aucun fichier sélectionné. Veuillez sélectionner au moins un fichier.",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message:
      "Une erreur inconnue s'est produite. Veuillez réessayer plus tard ou contacter le support.",
    code: "ERR_UNKNOWN",
  },
  ERR_NETWORK: {
    message:
      "Une erreur de réseau s'est produite. Veuillez vérifier votre connexion Internet et réessayer.",
    code: "ERR_NETWORK",
  },
  ERR_MAX_USAGE: {
    message: "Utilisation maximale dépassée. Veuillez mettre à niveau ou vous abonner pour continuer à utiliser ce service.",
    code: "ERR_MAX_USAGE",
  },
  INVALID_GITHUB_URL: {
    message:
      "L'URL GitHub n'est pas valide. Veuillez entrer une URL GitHub valide.",
    code: "ERR_INVALID_GITHUB_URL",
  },
  MAX_DAILY_USAGE: {
    message:
      "Vous avez atteint votre limite d’utilisation quotidienne. Veuillez mettre à niveau votre forfait pour continuer à utiliser cette fonctionnalité sans interruption.",
    code: "MAX_DAILY_USAGE",
  },
  alerts: {
    singleFileSize:
      "La taille d'un fichier unique doit être inférieure à 100 Mo. Passez à la version supérieure pour télécharger des fichiers plus volumineux !",
  },
};


export const adBlockerContent: adBlockerContentType = {
  title: "Bloqueur de publicités détecté",
  description: "Nous avons remarqué que vous utilisez un bloqueur de publicités. Veuillez envisager de le désactiver ou de passer à la version premium pour une expérience sans publicité!",
  reloadPage: "Recharger la page",
  upgradeToPremium: "Passer à Premium"
}