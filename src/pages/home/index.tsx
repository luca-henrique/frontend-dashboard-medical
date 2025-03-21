import { StepProvider } from "~/app/providers/step/step"
import { StepsRedeemProduct } from "~/components/organisms/steps-redeem-product/steps-redeem-product"

export const Home = () => {
  return (
    <StepProvider>
      <StepsRedeemProduct />
    </StepProvider>
  )
}


