import { useRedeem } from "~/app/hook/use-redeem"
import { useStep } from "~/app/hook/use-step"

import { IntroRedeem } from "~/components/molecules/intro-redeem/intro-redeem"
import { SelectProductsRedeem } from "~/components/molecules/select-products-redeem/select-products-redeem"
import { DetailsPersonRedeem } from "~/components/molecules/details-person-redeem/details-person-redeem"
import { GiftSuccessRedeemed } from "~/components/molecules/gift-success-redeemed/gift-success-redeemed"
import { ErrorRedeem } from "~/components/molecules/error-redeem/error-redeem"


const redeemSteps: Record<number, React.FC> = {
  0: IntroRedeem,
  1: SelectProductsRedeem,
  2: DetailsPersonRedeem,
  3: GiftSuccessRedeemed,
  4: ErrorRedeem,
};

export const StepsRedeemProduct = () => {
  const { step } = useStep()
  const { redeem } = useRedeem()


  if (redeem && redeem.status !== "ACTIVE") {
    return <ErrorRedeem />;
  }

  const CurrentStep = redeemSteps[step] ?? ErrorRedeem;

  return <CurrentStep />
}