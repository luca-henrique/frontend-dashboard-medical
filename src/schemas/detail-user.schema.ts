import { z } from "zod";
import { validateDocument } from "../utils/validate-document";
import { errorMessages } from "../i18n/error-message";
import {
  MIN_DOCUMENT_SIZE,
  MAX_DOCUMENT_SIZE,
  VALIDATION,
} from "../validations/validations";

const ExtraQuestionResponsesSchema = z.array(
  z.object({
    extra_question_id: z.number().optional(),
    answer: z.string().optional(),
  })
);

export const DetailsPersonRedeemSchema = z.object({
  fullName: z.string(),
  document: z
    .string()
    .min(MIN_DOCUMENT_SIZE, errorMessages.document.minLength)
    .max(MAX_DOCUMENT_SIZE, errorMessages.document.maxLength)
    .refine((value) => validateDocument(value), {
      message: errorMessages.document.invalid,
    }),
  email: z.string().email(),
  cep: z
    .string()
    .min(VALIDATION.ADDRESS.CEP_LENGTH, errorMessages.address.cep.minLength)
    .regex(/^\d{2}\.\d{3}-\d{3}$/, errorMessages.address.cep.invalid),
  street: z.string().min(1, errorMessages.address.street.required),
  number: z.string().min(1, errorMessages.address.number.required),
  complement: z
    .string()
    .max(
      VALIDATION.ADDRESS.COMPLEMENT_MAX_LENGTH,
      errorMessages.address.complement.maxLength
    )
    .optional(),
  neighborhood: z.string().min(1, errorMessages.address.bairro.required),
  city: z.string().min(1, errorMessages.address.city.required),
  uf: z
    .string()
    .length(VALIDATION.ADDRESS.UF_LENGTH, errorMessages.address.uf.invalid)
    .regex(/^[A-Z]{2}$/, errorMessages.address.uf.invalid),
  country: z.string().min(1, errorMessages.address.country.required),
  size: z.string().optional(),
  extra_question: ExtraQuestionResponsesSchema,
});

export type DetailsPersonRedeemSchemaProps = z.infer<
  typeof DetailsPersonRedeemSchema
>;
