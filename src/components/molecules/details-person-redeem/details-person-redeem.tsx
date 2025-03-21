import { Container } from "../../atoms/container/container";
import { Typography } from "../../atoms/typography/typography";

import { mock } from "~/i18n/mock";
import { Box } from "@mui/material";

import { Copyright } from "../copyright/copyright";
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from "../../atoms/button/button";
import { RecipientForm } from "../recipient-form/recipient-form";
import { AddressForm } from "../address-form/address-form";
import { ShirtSizeForm } from "../shirt-size-form/shirt-size-form";
import { ExtraQuestionForm } from "../extra-question-form/extra-question-form";
import { CardForm } from "./styled";
import { useForm, FormProvider } from "react-hook-form";
import { useStep } from "~/app/hook/use-step";
import { DetailsPersonRedeemSchema, DetailsPersonRedeemSchemaProps } from "~/schemas/detail-user.schema";
import { useRedeem } from "~/app/hook/use-redeem";
import { useProduct } from "~/app/hook/use-product";
import { useRedeemerMutation } from "~/service/redeems";

export const DetailsPersonRedeem = () => {
  const {
    form: { title },
    common: { buttonBackStep, buttonNextStep },
  } = mock;

  const { selectedProducts } = useProduct();

  const args = useForm<DetailsPersonRedeemSchemaProps>({
    resolver: zodResolver(DetailsPersonRedeemSchema),
    mode: "all",
  })

  const { handleSubmit } = args
  const mutation = useRedeemerMutation();

  const { nextStep, previousStep } = useStep()
  const { redeem } = useRedeem();

  const onSubmit = (data: DetailsPersonRedeemSchemaProps) => {
    const validData = {
      id: redeem?.id ?? "",
      redeemer_name: data.fullName,
      redeemer_email: data.email,
      redeemer_document_number: data.document,
      redeemer_zipcode: data.cep,
      redeemer_street: data.street,
      redeemer_number: String(data.number),
      redeemer_complement: data.complement ?? "",
      redeemer_neighborhood: data.neighborhood,
      redeemer_city: data.city,
      redeemer_state: data.uf,
      redeemer_country: data.country,
      items: selectedProducts.map((product) => ({
        customer_product_id: product.customer_product_id ?? "",
        size_name: product.sizes.length > 0 ? product.sizes[0].name : "",
      })),
      extra_question_responses:
        data.extra_question?.map((q) => ({
          extra_question_id: q.extra_question_id ?? 0,
          answer: q.answer ?? "",
        })) || [],

    };

    mutation.mutate(validData, {
      onSuccess: () => nextStep(),
      onError: (error) => {
        console.error("Error:", error);
      },
    });
  }

  return (
    <FormProvider {...args}>
      <form onSubmit={handleSubmit(onSubmit)}>
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
            <Box
              height="100%"
              width="100%"
              display="flex"
              alignItems="center"
              flexDirection="column"
              gap="40px"
            >
              <Typography
                variant="h2"
                fontWeight="600"
                sx={{ fontSize: { mobile: "16px", tablet: "20px" } }}
              >
                {title}
              </Typography>
              <RecipientForm />
              <AddressForm />
              <ShirtSizeForm />
              <ExtraQuestionForm />
            </Box>
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-between"}
              width={"100%"}
              marginBottom={"40px"}
            >
              <Button variant="outlined" onClick={() => previousStep()}>{buttonBackStep}</Button>
              <Button type="submit">{buttonNextStep}</Button>
            </Box>
            <Copyright />
          </CardForm>
        </Container>
      </form>
    </FormProvider>
  );
};
