import { ProductProps } from "~/types/product";

export const mockProducts: ProductProps[] = [
  {
    customer_product_id: "1",
    name: "Produto 1",
    image_url: "/produto1.jpg",
    quantity: 10,
    optional: false,
    sizes_grid: {
      name: "Camiseta",
    },
    sizes: [],
  },
  {
    customer_product_id: "2",
    name: "Produto 2",
    image_url: "/produto2.jpg",
    quantity: 5,
    optional: true,
    sizes_grid: null,
    sizes: [],
  },
];
