import { ReactNode } from "react";

export interface StepContextProps {
  nextStep(): void;
  previousStep(): void;
  startStep(): void;
  step: number;
}

export interface StepProps {
  children: ReactNode;
}
