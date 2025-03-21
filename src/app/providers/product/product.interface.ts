import { ProductProps } from "~/types/product";

export interface IProductContext {
  selectedProducts: ProductProps[];
  toggleProduct: (product: ProductProps) => void;
}
