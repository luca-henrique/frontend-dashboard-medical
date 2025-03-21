import { Container } from "../../atoms/container/container"

interface MainContainerProps {
  children: React.ReactNode
}


export const MainContainer = ({ children }: MainContainerProps) => {
  return (
    <Container maxWidth={false} disableGutters sx={{ background: "#EFF6FF", height: "100vh", padding: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
      {children}
    </Container>
  )
}