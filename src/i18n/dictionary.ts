export type Dictionary = typeof portugueseDictionary;

export const portugueseDictionary = {
  common: {
    errors: {
      NOT_FOUND: "Não encontrado(a).",
      INTERNAL_ERROR: "Ocorreu um erro interno.",
      DUPLICATED: "Informações duplicadas.",
      BAD_REQUEST: "Pedido incorreto.",
      FORBIDDEN: "Ação proibida.",
      UNAUTHORIZED: "Não autorizado(a).",
      UNIQUE_CONSTRAINT_FAILED:
        "Verifique as informações inseridas! Algum dos elementos inseridos deve ser único na plataforma.",
      COLUMN_NOT_FOUND: "Não encontrado(a).",
      NOT_NULL: "Algum elemento não pode ser definido como 'null'.",
      required:
        "Verifique as informações! Há campos requeridos que não foram informados.",
    },
    types: {
      course: "Curso",
      event: "Evento",
      mentorship: "Mentoria",
      consultancy: "Consultoria",
      ebook: "Ebook",
      community: "Comunidade",
      services: "Serviços",
      software: "Software",
      other: "Outro",
    },
  },
};

export const englishDictionary: Dictionary = {
  common: {
    errors: {
      NOT_FOUND: "Not found.",
      INTERNAL_ERROR: "An internal error has occurred.",
      DUPLICATED: "Duplicate information.",
      BAD_REQUEST: "Incorrect request.",
      FORBIDDEN: "Action prohibited.",
      UNAUTHORIZED: "Unauthorized.",
      UNIQUE_CONSTRAINT_FAILED:
        "Check the information entered! Some of the elements inserted must be unique on the platform.",
      COLUMN_NOT_FOUND: "Not found.",
      NOT_NULL: "Some element cannot be set to 'null'.",
      required:
        "Check the information! There are required fields that were not provided.",
    },
    types: {
      course: "Course",
      event: "Event",
      mentorship: "Mentoring",
      consultancy: "Consultancy",
      ebook: "Ebook",
      community: "Community",
      services: "Services",
      software: "Software",
      other: "Other",
    },
  },
};
