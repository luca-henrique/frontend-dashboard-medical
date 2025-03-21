
import { Typography as TypographyMaterial, TypographyProps } from "@mui/material"

interface TypographyCustomProps extends TypographyProps {
  children: React.ReactNode
}

export const Typography = ({ children, ...props }: TypographyCustomProps) => {
  return (
    <TypographyMaterial {...props} gutterBottom>
      {children}
    </TypographyMaterial>
  )
}