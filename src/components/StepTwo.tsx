import CustomInput from "./common/custom-input";
import { type Control } from "react-hook-form";
import type { TransferFormType } from "@/lib/schema";
import CustomSelect from "./common/custom-select";

interface StepTwoProps {
  control: Control<TransferFormType>;
}

const StepTwo = ({ control }: StepTwoProps) => {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <CustomInput
        control={control}
        name="recipientEmail"
        label="Recipient email"
        placeholder="Enter recipient email"
        type="email"
        inputMode="email"
      />

      <CustomInput
        control={control}
        name="recipientPhoneNumber" // Corrected to match your schema!
        label="Recipient phone number"
        placeholder="000 - 000 - 00000"
        type="tel"
        prepend={
          <div className="w-34 [&_div]:space-y-0">
            <CustomSelect
              name="countryCode"
              control={control}
              options={[
                { value: "+234", label: "+234 🇳🇬" },
                { value: "+1", label: "+1 🇺🇸" },
                { value: "+44", label: "+44 🇬🇧" },
              ]}
              selectTriggerClassName="border-0 rounded-none w-full h-full focus:ring-0 px-6 bg-transparent text-main text-base"
              labelClassName="hidden"
            />
          </div>
        }
      />
    </div>
  );
};

export default StepTwo;
