import { FormGrid } from "./styled";
import { useFormContext } from "react-hook-form";
import { Input } from "../../../components/atoms/input/input";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Grid,
} from "@mui/material";
import { Select } from "../../../components/atoms/select/select";
import {
  brazilianStates,
  languages,
  medicalSpecialties,
} from "../../../constants/mock";
import { useState } from "react";

export const ProfessionalData = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const [state, setState] = useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { gilad, jason, antoine } = state;
  const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

  return (
    <Grid container spacing={3}>
      <FormGrid size={{ xs: 12, md: 6 }}>
        <Input
          control={control}
          fullWidth
          placeholder="Numero do CRM"
          label="CRM"
          name="crm"
          id="crm"
          error={!errors.root?.message}
        />
      </FormGrid>
      <FormGrid size={{ xs: 12, md: 6 }}>
        <Select
          control={control}
          label="UF do CRM"
          options={brazilianStates}
          name="uf-crm"
          id="uf-crm"
          error={!errors.root?.message}
          helperText={errors.root?.message}
        />
      </FormGrid>

      <FormGrid size={{ xs: 12, md: 12 }}>
        <Select
          control={control}
          label="Especialidades"
          options={medicalSpecialties.map((option) => ({
            value: option.toLowerCase(),
            label: option,
          }))}
          name="especialidade"
          id="especialidade"
          error={!errors.root?.message}
          helperText={errors.root?.message}
        />
      </FormGrid>

      <FormGrid size={{ xs: 12, md: 12 }}>
        <Input
          control={control}
          fullWidth
          placeholder="ex:5"
          label="Anos de experiência"
          name="uf-crm"
          id="uf-crm"
          type="number"
          error={!errors.root?.message}
        />
      </FormGrid>

      <FormGrid size={{ xs: 12, md: 12 }}>
        <Input
          control={control}
          fullWidth
          placeholder="Descrição profissional"
          label="Descrição profissional"
          name="professional-description"
          id="professional-description"
          error={!errors.root?.message}
        />
      </FormGrid>

      <FormGrid size={{ xs: 12, md: 12 }} >
        <FormControl component="fieldset" variant="standard">
          <FormLabel component="legend">Linguas</FormLabel>
          <FormGroup sx={{ flexDirection: "row", height: "200px", width: "100%" }}>
            {languages.map((language) => (
              <FormControlLabel
                key={language}
                control={
                  <Checkbox
                    checked={gilad}
                    onChange={handleChange}
                    name={language}
                  />
                }
                label={language}
              />
            ))}
          </FormGroup>
        </FormControl>
      </FormGrid>
    </Grid>
  );
};
