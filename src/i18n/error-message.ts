import { VALIDATION } from "../validations/validations";

export const errorMessages = {
  document: {
    invalid: "CPF/CNPJ inválido",
    minLength: `O CPF/CNPJ deve ter pelo menos ${VALIDATION.DOCUMENT.MIN_LENGTH} caracteres`,
    maxLength: `O CPF/CNPJ deve ter no máximo ${VALIDATION.DOCUMENT.MAX_LENGTH} caracteres`,
  },
  address: {
    cep: {
      required: "O CEP é obrigatório",
      invalid: "CEP inválido",
      minLength: `O CEP deve ter ${VALIDATION.ADDRESS.CEP_LENGTH} caracteres`,
    },
    street: {
      required: "O endereço é obrigatório",
    },
    number: {
      required: "O número é obrigatório",
    },
    complement: {
      maxLength: `O complemento deve ter no máximo ${VALIDATION.ADDRESS.COMPLEMENT_MAX_LENGTH} caracteres`,
    },
    bairro: {
      required: "O bairro é obrigatório",
    },
    city: {
      required: "A cidade é obrigatória",
    },
    uf: {
      required: "O estado (UF) é obrigatório",
      invalid: `UF inválida, deve conter ${VALIDATION.ADDRESS.UF_LENGTH} caracteres`,
    },
    country: {
      required: "O país é obrigatório",
    },
  },
  product: {
    idRequired: "ID do produto é obrigatório",
    nameRequired: "Nome do produto é obrigatório",
    quantityPositive: "A quantidade deve ser um número inteiro positivo",
    imageUrlInvalid: "URL da imagem inválida",
    sizeGridNameRequired: "Nome da grade de tamanhos é obrigatório",
    sizeIdRequired: "ID do tamanho é obrigatório",
    sizeNameRequired: "Nome do tamanho é obrigatório",
    sizeMin: "Pelo menos um tamanho deve ser informado",
  },
  tags: {
    nonEmpty: "Tags não pode ser vazio",
  },
};
