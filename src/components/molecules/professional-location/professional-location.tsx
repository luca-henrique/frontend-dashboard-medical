import React from "react";
import { Input } from "../../atoms/input/input";
import Grid from "@mui/material/Grid";
import { FormGrid } from "../professional-data/styled";
import { useFormContext } from "react-hook-form";
import { useEffect } from "react";
import { mock } from "../../../i18n/mock";
import { fetchAddressByCep } from "../../../services/cep";
import { useDebounce } from "../../../app/hook/use-debounce";
import { Select } from "../../atoms/select/select";
import { brazilianStates } from "../../../constants/mock";
import { countries } from "../../../constants/country";

export const DEBAUNCE_TIME_CEP_FETCH = 1500;

export default function Review() {
  const {
    control,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();

  const {
    address: {
      title,
      cep,
      street,
      number,
      complement,
      neighborhood,
      city,
      state,
      country,
    },
  } = mock.form;

  const handleCepChange = async (cep: string) => {
    if (cep.length === 10) {
      const addressData = await fetchAddressByCep(cep);
      if (addressData) {
        setValue("street", addressData.street);
        setValue("city", addressData.city);
        setValue("neighborhood", addressData.neighborhood);
        setValue("uf", addressData.state);
      }
    }
  };

  const cepValue = watch("cep");
  const debouncedCep = useDebounce(cepValue, DEBAUNCE_TIME_CEP_FETCH); // Aplica debounce de 500ms

  useEffect(() => {
    if (debouncedCep) {
      handleCepChange(debouncedCep);
    }
  }, [debouncedCep]);

  return (
    <Grid container>
      <Grid size={{ xs: 12, md: 6 }}>
        <Input
          mask="cep"
          label={cep}
          name="cep"
          control={control}
          required
          fullWidth
          type="text"
          error={!!errors?.cep?.message}
          helperText={!errors?.cep?.message}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Input
          label={city}
          name="city"
          control={control}
          required
          fullWidth
          type="text"
          error={!!errors?.city?.message}
          helperText={!errors?.city?.message}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Input
          label={street}
          name="street"
          control={control}
          required
          type="text"
          error={!!errors?.street?.message}
          helperText={!errors?.street?.message}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Input
          label={number}
          name="number"
          control={control}
          required
          type="text"
          error={!!errors?.number?.message}
          helperText={!errors?.number?.message}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Input
          label={complement}
          name="complement"
          control={control}
          type="text"
          error={!!errors?.complement?.message}
          helperText={!errors?.complement?.message}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Input
          label={neighborhood}
          name="neighborhood"
          control={control}
          required
          type="text"
          error={!!errors?.neighborhood?.message}
          helperText={!errors?.neighborhood?.message}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Input
          label={city}
          name="city"
          control={control}
          required
          type="text"
          error={!!errors?.city?.message}
          helperText={!errors?.city?.message}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Select
          label={state}
          name="uf"
          control={control}
          required
          options={brazilianStates}
          error={!!errors?.uf?.message}
          helperText={
            typeof errors?.uf?.message === "string" ? errors?.uf?.message : ""
          }
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Select
          label={country}
          name="country"
          control={control}
          required
          options={countries}
          error={!!errors?.country?.message}
          helperText={
            typeof errors?.country?.message === "string"
              ? errors?.country?.message
              : ""
          }
        />
      </Grid>
    </Grid>
  );
}
