export interface SizeGridProps {
  name: string;
}

export interface SizeProps {
  id: string;
  name: string;
}

export interface ProductProps {
  customer_product_id: string;
  name: string;
  quantity: number;
  optional: boolean;
  image_url: string;
  sizes_grid: SizeGridProps | null;
  sizes: Array<SizeProps>;
}
