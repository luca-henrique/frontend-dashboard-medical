import { Container } from "@mui/material"
import { mock } from "../../../i18n/mock"
import { CardContainer } from "../../organisms/card-container/card-container"


export const GiftSuccessRedeemed = () => {
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
      <CardContainer {...mock.finish} />
    </Container>
  )
}