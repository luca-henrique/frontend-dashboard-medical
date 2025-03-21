import { Box } from "@mui/material"
import { ImageLogo } from "../image-logo/image-logo"

import Error404Img from "~/assets/images/erro-404.png"
import { Typography } from "~/components/atoms/typography/typography"
import { Button } from "~/components/atoms/button/button"
import { mock } from "~/i18n/mock"
import { Container } from "~/components/atoms/container/container"
import { ImageError404 } from "./styled"
import { useStep } from "~/app/hook/use-step"

export const ErrorRedeem = () => {
  const { title, subTitle, backButton: { label } } = mock.error

  const { startStep } = useStep()

  return (
    <Container maxWidth={false} disableGutters sx={{ background: "#fff", height: "100vh", padding: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <ImageLogo />
        <ImageError404 src={Error404Img} width={500} height={200} alt="error 404" />
        <Typography
          variant="h5"
          sx={{
            color: "#22007F",
            marginBottom: { mobile: "34px", tablet: "16px" },
            fontSize: { mobile: "16px", tablet: "20px" },
            fontWeight: "700",
            textAlign: "center",
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="h5"
          sx={{
            color: "#64748B",
            marginBottom: { mobile: "64px", tablet: "40px" },
            fontSize: { mobile: "14px", tablet: "16px" },
            fontWeight: "400",
            textAlign: "center",
          }}
        >
          {subTitle}
        </Typography>
        <Button onClick={() => startStep()}>{label}</Button>
      </Box>
    </Container>
  )
}