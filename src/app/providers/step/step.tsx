import { createContext, FC, useCallback, useState } from "react";
import { StepContextProps, StepProps } from "./step.interface";

const StepContext = createContext<StepContextProps | undefined>(undefined);

const StepProvider: FC<StepProps> = ({ children }) => {
  const [step, setStep] = useState<number>(0);

  const nextStep = useCallback(() => {
    setStep((prevStep) => prevStep + 1);
  }, []);

  const previousStep = useCallback(() => {
    setStep((prevStep) => prevStep - 1);
  }, []);

  const startStep = useCallback(() => {
    setStep(0);
  }, []);

  return (
    <StepContext.Provider value={{ nextStep, previousStep, startStep, step }}>
      {children}
    </StepContext.Provider>
  );
};

export { StepContext, StepProvider };
