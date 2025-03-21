import { Box, styled } from "@mui/material";

export const Image = styled("img")({
  width: "189px",
  height: "54px",
  marginBottom: "40px",
});

export const ContentWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  maxHeight: "440px",
  marginBottom: "42px",

  [theme.breakpoints.down("mobile")]: {
    maxHeight: "559px",
  },
}));
