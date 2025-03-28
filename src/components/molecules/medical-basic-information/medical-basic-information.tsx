
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { Input } from "../../atoms/input/input";
import { useFormContext } from "react-hook-form";

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
}));

export const MedicalBasicInformation = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Grid container spacing={3}>
      <FormGrid size={{ xs: 12, md: 6 }}>
        <Input
          control={control}
          fullWidth
          placeholder="Lucas"
          label="Nome"
          name="first-name"
          id="first-name"
          error={!errors.root?.message}
        />
      </FormGrid>
      <FormGrid size={{ xs: 12, md: 6 }}>
        <Input
          control={control}
          fullWidth
          placeholder="Snow"
          label="Sobrenome"
          name="last-name"
          id="last-name"
          error={!errors.root?.message}
        />
      </FormGrid>
      <FormGrid size={{ xs: 12 }}>
        <Input
          control={control}
          fullWidth
          placeholder="email@gmail.com"
          label="Email"
          name="email"
          id="email"
          type="email"
          error={!errors.root?.message}
        />
      </FormGrid>
      <FormGrid size={{ xs: 6 }}>
        <Input
          control={control}
          fullWidth
          placeholder="********"
          label="Senha"
          name="password"
          id="password"
          type="password"
          error={!errors.root?.message}
        />
      </FormGrid>
      <FormGrid size={{ xs: 6 }}>
        <Input
          control={control}
          fullWidth
          placeholder="********"
          label="Confirmação de senha"
          name="paswsword-confirmation"
          id="password-confirmation"
          type="password"
          error={!errors.root?.message}
        />
      </FormGrid>
      <FormGrid size={{ xs: 12 }}>
        <Input
          control={control}
          fullWidth
          placeholder="87999999999"
          label="Telefone"
          name="phone"
          id="phone"
          type="email"
          error={!errors.root?.message}
        />
      </FormGrid>
    </Grid>
  );
};
