import { Container, styled } from "@mui/material";

export const CardForm = styled(Container)(({ theme }) => ({
  backgroundColor: "#fff",
  width: "100%",
  maxWidth: "1000px",
  borderRadius: "20px",
  padding: "40px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "end",
  alignItems: "center",

  [theme.breakpoints.down("mobile")]: {
    maxWidth: "100%",
  },
}));
