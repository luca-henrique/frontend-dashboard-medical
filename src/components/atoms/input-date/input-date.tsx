import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { Input } from '@mui/material';
import CalendarIcon from "../../../assets/icons/calendar.svg"

export default function DateValidationDisableFuture() {
  return (
    <FormControl fullWidth variant="standard">
      <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
      <Input
        id="standard-adornment-amount"
        endAdornment={<img src={CalendarIcon} alt='' width={16} height={16} />}
      />
    </FormControl>
  );
}