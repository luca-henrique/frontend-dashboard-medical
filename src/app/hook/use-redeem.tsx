import { useContext } from "react";
import { RedeemContext } from "../providers/redeem/redeem";

const useRedeem = () => {
  const context = useContext(RedeemContext);

  if (!context) {
    throw new Error("useRedeem deve ser usado dentro de um RedeemProvider");
  }

  return context;
};

export { useRedeem };
