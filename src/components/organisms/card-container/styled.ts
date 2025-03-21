import { Box, styled } from "@mui/material";

export const Card = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  width: "100%",
  maxWidth: "1000px",
  height: "100%",
  maxHeight: "600px",
  borderRadius: "20px",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "end",
  alignItems: "center",

  [theme.breakpoints.down("mobile")]: {
    maxWidth: "100%",
    maxHeight: "559px",
  },
}));
