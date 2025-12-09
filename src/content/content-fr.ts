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
    title: "Compresser PDF",
    seoTitle:
      "Compressez vos PDF en ligne – Réducteur de taille de fichier gratuit",
    description:
      "Réduisez la taille d’un fichier PDF tout en préservant sa qualité",
    color: "var(--green)",
    type: ".pdf",
    to: "/compress-pdf",
    features: [
      {
        title: "Compression PDF polyvalente",
        description:
          "Obtenez des résultats rapides et fiables à chaque fois. Choisissez parmi plusieurs niveaux de compression pour ajuster la taille de votre fichier sans compromettre la qualité du document.",
      },
      {
        title: "Aucune inscription par e-mail requise",
        description:
          "Commencez à compresser vos fichiers PDF immédiatement – pas d’inscription par e-mail, pas besoin de carte bancaire. Téléversez simplement votre document et compressez-le selon vos besoins.",
      },
      {
        title: "Qualité préservée à tout moment",
        description:
          "PDFEquips utilise une technologie avancée pour optimiser la taille et la qualité des images dans vos fichiers PDF. Vous obtenez ainsi des fichiers beaucoup plus légers sans perte notable de qualité.",
      },
    ],
    keywords:
      "compresser PDF, compresser PDF en ligne, réduire la taille d’un PDF, compression PDF gratuite, compresseur PDF, outil de compression PDF, réduction de taille PDF, réducteur de fichiers PDF, compresser des documents PDF, réduire taille fichiers PDF, compression PDF sécurisée, optimiser PDF, compresser PDF gratuitement, compresseur PDF en ligne, compression sans inscription, réduire PDF en ligne, compression PDF rapide",
  },
};

export const tools: _tools = {
  select: "Sélectionner",
  or_drop: "ou déposer des fichiers ici",
  files: "fichiers",
  drop_files: "Déposez les fichiers ici",
};

export const edit_page: _edit_page = {
  edit_page_titles: {
    compress_pdf: "Options de compression PDF",
  },
  loader_text: "Veuillez patienter...",
  add_more_button: "Ajouter plus de pages",
  action_buttons: {
    compress_pdf: "Compresser PDF",
  },
  pages: "pages",
  page: "page",
  filenameOptions: {
    label: "Nom du fichier de sortie (facultatif)",
    placeholder: "Entrez le nom du fichier",
    helperText: "Ce sera le nom du PDF compressé lors du téléchargement.",
    cta: "Voir les forfaits",
    upgradeNotice: {
      msg: "Les niveaux de 2.0 à 10.0 sont disponibles avec la version premium.",
      cta: "Mettre à niveau maintenant",
    },
  },

  compress_pdf: [
    {
      title: "Compression recommandée",
      description: "Meilleur équilibre entre taille et qualité",
    },
    {
      title: "Moins de compression",
      description: "Taille de fichier plus grande mais meilleure qualité",
    },
    {
      title: "Compression extrême",
      description:
        "Taille de fichier beaucoup plus petite mais qualité inférieure",
    },
    {
      title: "Compression personnalisée",
      description: "Choisissez votre propre niveau de compression",
    },
  ],
};

export const downloadFile: _downloadFile = {
  titles: {
    "compress-pdf": [
      "Les fichiers PDF ont été compressés !",
      "Le fichier PDF a été compressé !",
    ],
  },

  btnText: {
    "compress-pdf": [
      "Télécharger les fichiers PDF compressés",
      "Télécharger le fichier PDF compressé",
    ],
  },

  backto: {
    "compress-pdf": "Retour à Compresser PDF",
  },
  compressionAnalyticsContent: {
    title: "Analyse de Compression",
    description:
      "Détails complets des résultats de la compression de votre PDF",
    sizeComparisonTitle: "Comparaison des Tailles",
    reductionBreakdownTitle: "Répartition de la Réduction",
    sizeSavedLabel: "Espace Économisé",
    compressionRatioLabel: "Taux de Compression",
    sizeReducedLabel: "Taille Réduite",
    chart: {
      original: "Original",
      compressed: "Compressé",
      reduced: "Réduit",
      remaining: "Restant",
    },
  },
};

export const footer: _footer = {
  brand: "PDFEquips",
  terms: "conditions",
  conditions: "conditions d'utilisation",
  privacy_policy: "politique de confidentialité",
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
  MISSING_FONTS: {
    message:
      "Le fichier contient des polices manquantes. Veuillez vous assurer que toutes les polices sont intégrées dans le fichier PDF.",
    code: "ERR_MISSING_FONTS",
  },
  INVALID_IMAGE_DATA: {
    message:
      "Le fichier contient des données d'image non valides. Veuillez vous assurer que toutes les images sont correctement formatées.",
    code: "ERR_INVALID_IMAGE_DATA",
  },
  SECURITY_RISK: {
    message:
      "Le fichier contient un risque de sécurité et ne peut pas être traité. Veuillez choisir un fichier valide.",
    code: "ERR_SECURITY_RISK",
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
  PASSWORD_REQUIRED: {
    message: "Le PDF nécessite un mot de passe.",
    code: "PASSWORD_REQUIRED",
  },

  INCORRECT_PASSWORD: {
    message: "Le mot de passe que vous avez saisi est incorrect.",
    code: "INCORRECT_PASSWORD",
  },
  MAX_DAILY_USAGE: {
    message:
      "Vous avez atteint votre limite d’utilisation quotidienne. Veuillez mettre à niveau votre forfait pour continuer à utiliser cette fonctionnalité sans interruption.",
    code: "MAX_DAILY_USAGE",
  },
  alerts: {
    maxFiles:
      "Maximum 15 fichiers autorisés. Abonnez-vous pour en ajouter plus !",
    singleFileSize:
      "La taille d'un fichier unique doit être inférieure à 100 Mo. Passez à la version supérieure pour télécharger des fichiers plus volumineux !",
    fileSize:
      "Chaque fichier doit être inférieur à 50 Mo. Débloquez des limites plus élevées avec un abonnement !",
  },
};

export const adBlockerContent: adBlockerContentType = {
  title: "Bloqueur de publicités détecté",
  description: "Nous avons remarqué que vous utilisez un bloqueur de publicités. Veuillez envisager de le désactiver ou de passer à la version premium pour une expérience sans publicité!",
  reloadPage: "Recharger la page",
  upgradeToPremium: "Passer à Premium"
}