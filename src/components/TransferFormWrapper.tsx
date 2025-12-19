import { useTransferForm } from "@/hooks/use-transfer-form";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import type { FormEvent } from "react";

const TransferFormWrapper = () => {
  const {
    form,
    currentStep,
    nextStep,
    prevStep,
    isFirstStep,
    handleStepOneSubmit,
    handleFinalSubmit,
  } = useTransferForm();

  const handleNextClick = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (currentStep === 1) {
      const isValid = await handleStepOneSubmit();
      if (isValid) {
        nextStep();
      }
    } else if (currentStep === 2) {
      console.log(currentStep, "current step");
      form.handleSubmit(
        handleFinalSubmit,
        (errors) => console.log("Validation Errors:", errors) // Check your console for this!
      )();
    }
  };

  const handleBackClick = () => {
    if (!isFirstStep) {
      prevStep();
    }
  };

  return (
    <section className="w-full max-w-160 shadow-sm mx-auto rounded-xxx bg-white py-10 flex justify-center p-4 min-h-181.75">
      <form
        onSubmit={handleNextClick}
        className="w-full max-w-lg flex flex-col"
      >
        {/* Header */}
        <header className="flex justify-between items-center">
          <ArrowLeft
            size={24}
            color="var(--color-main)"
            onClick={handleBackClick}
          />

          <h1 className="text-main font-medium text-xl">Recipient details</h1>

          <div className="w-6" />
        </header>

        <div className="relative overflow-hidden mt-10">
          <div
            className="transition-all duration-350 ease-in-out"
            style={{
              transform: `translateX(-${(currentStep - 1) * 100}%)`,
            }}
          >
            <div className="flex">
              <div className="w-full shrink-0">
                <StepOne control={form.control} />
              </div>

              <div className="w-full shrink-0">
                <StepTwo control={form.control} />
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 flex items-end">
          <Button
            type="submit"
            className="bg-main text-center py-5 flex items-center justify-center rounded-xxx font-instrument-sans font-bold text-base w-full text-white h-15"
          >
            Next
          </Button>
        </div>
      </form>
    </section>
  );
};

export default TransferFormWrapper;
