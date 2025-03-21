import { CardContent } from "../../molecules/card-content/card-content"
import { Copyright } from "../../molecules/copyright/copyright";

import { Card } from "./styled"


interface ContentProps {
  title: string;
  subTitle: string
  description: string
  children?: React.ReactNode
}

export const CardContainer = ({ children, ...props }: ContentProps) => {
  return (
    <Card>
      <CardContent {...props} >
        {children}
      </CardContent>
      <Copyright />
    </Card>
  )
}




