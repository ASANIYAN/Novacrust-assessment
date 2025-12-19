import CustomSelect from "./common/custom-select";
import CustomInput from "./common/custom-input";
import { type Control } from "react-hook-form";
import type { TransferFormType } from "@/lib/schema";

interface StepOneProps {
  control: Control<TransferFormType>;
}

// Mock bank data - replace with your actual bank list
const BANKS = [
  { value: "access", label: "Access Bank" },
  { value: "gtbank", label: "Guaranty Trust Bank" },
  { value: "zenith", label: "Zenith Bank" },
  { value: "uba", label: "United Bank for Africa" },
  { value: "firstbank", label: "First Bank of Nigeria" },
  { value: "fidelity", label: "Fidelity Bank" },
];

const StepOne = ({ control }: StepOneProps) => {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <CustomSelect
        control={control}
        name="bank"
        label="Bank"
        placeholder="Select an option"
        options={BANKS}
      />

      <CustomInput
        control={control}
        name="accountNumber"
        label="Account number"
        placeholder="Enter your account number"
        type="text"
        inputMode="numeric"
      />

      <CustomInput
        control={control}
        name="accountName"
        label="Account name"
        placeholder="ODUTUGA GBEKE"
        disabled
      />
    </div>
  );
};

export default StepOne;
