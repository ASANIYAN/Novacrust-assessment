import { Controller, type Control } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Field, FieldError, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import CustomSelect from "./custom-select";

interface CustomPhoneInputProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  codeName: string;
  numberName: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  options?: { value: string; label: string; flag?: string }[];
  containerClassName?: string;
}

const CustomPhoneInput: React.FC<CustomPhoneInputProps> = ({
  control,
  codeName,
  numberName,
  label,
  placeholder = "000 - 000 - 00000",
  disabled,
  options = [
    { value: "+234", label: "+234 🇳🇬" },
    { value: "+1", label: "+1 🇺🇸" },
    { value: "+44", label: "+44 🇬🇧" },
  ],
  containerClassName,
}) => {
  return (
    <Controller
      name={numberName}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid} className={containerClassName}>
          <div className="space-y-4">
            {label && (
              <FieldLabel
                className={cn(
                  "text-main text-base font-medium",
                  fieldState.invalid && "text-red-500"
                )}
              >
                {label}
              </FieldLabel>
            )}

            {/* The Pill Container */}
            <div
              className={cn(
                "flex items-stretch w-full h-15 p-0 rounded-full border overflow-hidden transition-all duration-200",
                "bg-white",
                fieldState.invalid
                  ? "border-red-500"
                  : "border-secondary focus-within:border-main focus-within:ring-0",
                disabled && "bg-disabled cursor-not-allowed opacity-50"
              )}
            >
              {/* Country Code Select */}
              <div className="w-34 border-r border-secondary bg-tertiary flex [&_div]:space-y-0">
                <CustomSelect
                  name={codeName}
                  control={control}
                  options={options}
                  disabled={disabled}
                  selectTriggerClassName="border-0 rounded-none w-full h-full focus:ring-0 px-6 bg-transparent text-main text-base"
                  labelClassName="hidden"
                />
              </div>

              {/* Phone Number Input */}
              <div className="flex-1">
                <Input
                  {...field}
                  placeholder={placeholder}
                  disabled={disabled}
                  className={cn(
                    "border-0 h-15 w-full rounded-none focus-visible:ring-0 px-6 py-0 bg-transparent shadow-none",
                    "text-base font-normal text-main placeholder:text-placeholder"
                  )}
                />
              </div>
            </div>
          </div>

          {/* Error Message */}
          {fieldState.invalid && (
            <FieldError
              className="text-red-500 mt-2"
              errors={[{ message: fieldState.error?.message }]}
            />
          )}
          {<>{fieldState.error?.message}</>}
        </Field>
      )}
    />
  );
};

export default CustomPhoneInput;
