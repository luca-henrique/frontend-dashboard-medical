import { errorMessages } from "~/i18n/error-message";
import { z } from "zod";

export const productSchema = z.object({
  customer_product_id: z.string().min(1, errorMessages.product.idRequired),
  name: z.string().min(1, errorMessages.product.nameRequired),
  quantity: z.number().int().positive(errorMessages.product.quantityPositive),
  optional: z.boolean(),
  image_url: z.string().url(errorMessages.product.imageUrlInvalid),
  sizes_grid: z
    .object({
      name: z.string().min(1, errorMessages.product.sizeGridNameRequired),
    })
    .nullable(),
  sizes: z
    .array(
      z.object({
        id: z.string().min(1, errorMessages.product.sizeIdRequired),
        name: z.string().min(1, errorMessages.product.sizeNameRequired),
      })
    )
    .min(1, errorMessages.product.sizeMin),
});

export const ProductsSchema = z
  .array(z.any())
  .nonempty({ message: errorMessages.tags.nonEmpty });

export type ProductsSchemaProps = z.infer<typeof ProductsSchema>;
