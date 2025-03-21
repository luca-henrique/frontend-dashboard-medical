import { Box, Typography } from "@mui/material";


import { CheckProduct } from "../../molecules/check-product/check-product";
import { useProduct } from "../../../app/hook/use-product";
import { ProductProps } from "~/types/product";
import { checkIsEmpty } from "~/utils/check-is-empty";



interface ProductComponentProps {
  product: ProductProps
}


export const Product = ({ product }: ProductComponentProps) => {

  const { toggleProduct, selectedProducts } = useProduct();
  const isChecked = selectedProducts.some(
    (p) => p.customer_product_id === product.customer_product_id
  );

  const handleSelect = () => {
    toggleProduct(product);
  };

  const isQuantityProductEmpty = checkIsEmpty(product?.quantity)

  if (isQuantityProductEmpty) return;

  return (

    <Box
      border={`0.5px solid ${isChecked ? "#000" : "#D8DCE2"
        }`}
      width={["100%", "calc(50% - 8px)", "calc(33.33% - 8px)"]}
      minHeight={290}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      flexDirection="column"
      p={1.75}
      borderRadius={1.5}
      position="relative"
      sx={{
        cursor: "pointer",
        boxSizing: "border-box",
        img: {
          objectFit: "contain",
          display: "block",
          width: "100%",
          maxWidth: 261,
        },
      }}
      onClick={handleSelect}
    >
      <CheckProduct checked={isChecked} />
      <img src={product.image_url} width={260} height={260} alt="text" />
      <Typography component="p" mt={2} fontWeight={600}>
        {product?.name}
      </Typography>
    </Box>

  );
};