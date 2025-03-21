import { Container } from "@mui/material"

import { useStep } from "~/app/hook/use-step"
import { mock } from "~/i18n/mock"

import { CardContainer } from "~/components/organisms/card-container/card-container"
import { Button } from "~/components/atoms/button/button"

export const IntroRedeem = () => {
  const { nextStep } = useStep()

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        flexDirection: "column",
        background: "#EFF6FF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        padding: { mobile: "40px 20px", tablet: "100px 140px" },
      }}
    >
      <CardContainer {...mock.intro}>
        <Button variant="contained" onClick={() => nextStep()} disableElevation >Começar!</Button>
      </CardContainer>
    </Container>
  )
}