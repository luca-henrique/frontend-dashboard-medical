import { Container as DefaultContainer, ContainerProps } from "@mui/material"

interface CustomContainerProps extends ContainerProps {
  children: React.ReactNode
}

export const Container = ({ children, ...props }: CustomContainerProps) => {
  return (<DefaultContainer {...props}>{children}</DefaultContainer>)
}