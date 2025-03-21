import { FormControl, FormLabel, TextField, TextFieldProps } from "@mui/material";
import { Controller } from "react-hook-form";
import { formatDocument } from "../../../utils/format-document";
import { formatCep } from "../../../utils/format-cep";

export type MaskType = "document" | 'cep';

export type InputProps = {
  label: string;
  control?: any;
  name: string;
  mask?: MaskType;
  error: boolean;
} & TextFieldProps;


const formatByMask = (value: string, mask?: MaskType): string => {
  if (!value) return "";

  switch (mask) {
    case "document":
      return formatDocument(value);
    case "cep":
      return formatCep(value);
    default:
      return value;
  }
};

export const Input = ({ label, control, name, mask, error, id, ...props }: InputProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <FormControl>
          <FormLabel htmlFor={id}>{label}</FormLabel>
          <TextField
            error={error}
            autoFocus
            required
            fullWidth
            variant="outlined"
            color={error ? 'error' : 'primary'}
            {...props}
            {...field}
            value={field.value ?? ""}
            onChange={(e) => field.onChange(formatByMask(e.target.value, mask))}
          />
        </FormControl>
      )}
    />
  );
};
