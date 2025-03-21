import { validateCnpj } from "./validate-cnpj";
import { validateCpf } from "./validate-cpf";

export const validateDocument = (value: string): boolean => {
  const cleanedValue = value.replace(/\D/g, "");

  if (cleanedValue.length === 11) {
    return validateCpf(cleanedValue);
  }

  if (cleanedValue.length === 14) {
    return validateCnpj(cleanedValue);
  }

  return false;
};
