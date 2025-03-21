import { useFormContext } from "react-hook-form";
import { mock } from "../../../i18n/mock";
import { FormSectionLayout } from "../../layout/form-layout/form-layout";
import { Input } from "../../atoms/input/input";
import { BoxRow } from "../details-person-redeem/styled";

export const RecipientForm = () => {
  const {
    recipientForm: { title, fullName, document, email },
  } = mock.form;

  const { control, formState: { errors } } = useFormContext();



  return (
    <FormSectionLayout title={title}>
      <Input
        label={fullName}
        name="fullName"
        control={control}
        required
        type="text"
        error={!!errors?.fullName?.message}
        helperText={typeof errors?.fullName?.message === "string" ? errors?.fullName?.message : ""}
      />
      <BoxRow >
        <Input
          label={document}
          name="document"
          mask="document"
          control={control}
          required
          type="text"
          error={!!errors?.document?.message}
          helperText={typeof errors?.document?.message === "string" ? errors?.document?.message : ""}
        />
        <Input
          label={email}
          name="email"
          control={control}
          required
          type="email"
          error={!!errors?.email?.message}
          helperText={typeof errors?.email?.message === "string" ? errors?.email?.message : ""}
        />
      </BoxRow>
    </FormSectionLayout>
  );
};
