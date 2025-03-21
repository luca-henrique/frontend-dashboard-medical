import { Box, CircularProgress, Container, Typography } from "@mui/material";

import { useRedeem } from "~/app/hook/use-redeem";
import { useStep } from "~/app/hook/use-step";
import { useProduct } from "~/app/hook/use-product";

import { Button } from "~/components/atoms/button/button";
import { Product } from "~/components/organisms/product/product";
import { Copyright } from "~/components/molecules/copyright/copyright";
import { CardForm } from "~/components/atoms/card-form/card-form";

import { mock } from "~/i18n/mock";
import { checkIsEmpty } from "~/utils/check-is-empty";

export const SelectProductsRedeem = () => {

  const { redeem, isLoading, isError, error } = useRedeem();
  const { selectedProducts } = useProduct()
  const { nextStep, previousStep } = useStep();

  const {
    step2: { title },
    common: { buttonBackStep, buttonNextStep },
  } = mock;


  const isNotSelectedProducts = checkIsEmpty(selectedProducts.length)

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        flexDirection: "column",
        background: "#EFF6FF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: { mobile: "40px 20px", tablet: "100px 140px" },
      }}
    >
      <CardForm maxWidth={false} disableGutters>
        {(() => {
          if (isLoading) {
            return <CircularProgress />;
          }

          if (isError) {
            return (
              <div>
                Erro ao carregar produtos:{" "}
                {error instanceof Error ? error.message : "Erro desconhecido"}
              </div>
            );
          }
          return (
            <>
              <Typography
                variant="h2"
                fontWeight="600"
                sx={{ fontSize: { mobile: "16px", tablet: "20px" } }}
              >
                {title}
              </Typography>
              <Box
                display="flex"
                justifyContent="space-between"
                flexWrap="wrap"
                gap={1.5}
                pt={2}
                pb={4}
              >
                {redeem?.items.map((item) => {
                  return (
                    <Product
                      key={item.customer_product_id}
                      product={item}
                    />
                  );
                })}
              </Box>
            </>
          );
        })()}
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
          width={"100%"}
          marginBottom={"40px"}
        >
          <Button variant="outlined" onClick={() => previousStep()}>
            {buttonBackStep}
          </Button>
          <Button disabled={isNotSelectedProducts} onClick={() => nextStep()}>{buttonNextStep}</Button>
        </Box>
        <Copyright />
      </CardForm>
    </Container>
  );
};
