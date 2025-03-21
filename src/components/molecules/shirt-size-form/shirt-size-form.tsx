import { useFormContext } from "react-hook-form";
import { mock } from "../../../i18n/mock";
import { FormSectionLayout } from "../../layout/form-layout/form-layout";
import { Box } from "@mui/material";
import { Select } from "../../atoms/select/select";
import { sizes } from "../../../constants/sizes";


export const ShirtSizeForm = () => {
  const {
    size: { title, shirt },
  } = mock.form;

  const { control, formState: { errors } } = useFormContext();

  return (
    <FormSectionLayout title={title}>
      <Box
        sx={{
          width: { tablet: "48%", mobile: "100%" },
        }}
      >
        <Select
          label={shirt}
          name="size"
          control={control}
          required
          options={sizes}
          helperText={typeof errors?.size?.message === "string" ? errors?.size?.message : ""}
        />
      </Box>
    </FormSectionLayout>
  );
};