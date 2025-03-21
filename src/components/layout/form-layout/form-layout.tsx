import { Box, styled } from "@mui/material"
import { Typography } from "../../atoms/typography/typography";

interface FormLayoutProps {
  children: React.ReactNode
  title: string
}

export const Title = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "16px",
}));

export const FormSectionLayout = ({ children, title }: FormLayoutProps) => {
  return (
    <Box
      width={'100%'}
      sx={{
        marginBottom: "40px",
        display: "flex",
        flexDirection: "column",
        gap: "32px",
      }}
    >
      <Title variant="h4">
        {title}
      </Title>
      {children}
    </Box>
  )
}