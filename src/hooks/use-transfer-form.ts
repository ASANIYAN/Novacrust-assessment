import { useState } from "react";
import { useForm, type UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  StepOneSchema,
  TransferFormSchema,
  type TransferFormType,
} from "@/lib/schema";
import { toast } from "sonner";

type UseTransferFormReturn = {
  form: UseFormReturn<TransferFormType>;
  currentStep: number;
  nextStep: () => void;
  prevStep: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
  handleStepOneSubmit: () => Promise<boolean>;
  handleFinalSubmit: (data: TransferFormType) => void;
};

export const useTransferForm = (): UseTransferFormReturn => {
  const [currentStep, setCurrentStep] = useState(1);

  const form = useForm<TransferFormType>({
    resolver: zodResolver(TransferFormSchema),
    mode: "onChange",
    defaultValues: {
      bank: "",
      accountNumber: "",
      recipientEmail: "",
      recipientPhoneNumber: "",
      countryCode: "+234",
    },
  });

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(1, prev - 1));
  };
  const resetStep = () => {
    setCurrentStep(1);
  };

  const isFirstStep = currentStep === 1;
  const isLastStep = currentStep === 2;

  const handleStepOneSubmit = async (): Promise<boolean> => {
    const stepOneData = {
      bank: form.getValues("bank"),
      accountNumber: form.getValues("accountNumber"),
    };

    const result = StepOneSchema.safeParse(stepOneData);

    if (!result.success) {
      result.error.issues.forEach((issue) => {
        const fieldName = issue.path[0] as "bank" | "accountNumber";
        form.setError(fieldName, {
          type: "manual",
          message: issue.message,
        });
      });
      return false;
    }

    return true;
  };

  const handleFinalSubmit = (data: TransferFormType) => {
    console.log(data);
    form.reset();
    toast.success("Submission successful");
    resetStep();
  };

  return {
    form,
    currentStep,
    nextStep,
    prevStep,
    isFirstStep,
    isLastStep,
    handleStepOneSubmit,
    handleFinalSubmit,
  };
};
