import { Button as DefaultButton, ButtonProps } from '@mui/material';


interface CustomButtonProps extends ButtonProps {
  children: React.ReactNode
}

export const Button = ({ children, disableElevation = true, ...props }: CustomButtonProps) => {
  return (
    <DefaultButton sx={{ textTransform: "capitalize" }} variant="contained" disableElevation={disableElevation} {...props}>
      {children}
    </DefaultButton>
  );
}