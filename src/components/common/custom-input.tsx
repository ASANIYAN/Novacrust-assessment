import { Controller, type Control } from "react-hook-form";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { Field, FieldError, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  name: string;
  label?: string;
  prepend?: ReactNode;
  append?: ReactNode;
  inputClassName?: string;
  containerClassName?: string;
  formLabelClassName?: string;
  wrapperClassName?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  name,
  label,
  control,
  prepend,
  append,
  inputClassName,
  formLabelClassName,
  containerClassName,
  wrapperClassName,
  disabled,
  ...rest
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid} className={containerClassName}>
          <div className="space-y-4">
            {label && (
              <FieldLabel
                htmlFor={field.name}
                className={cn(
                  "text-main text-base font-medium",
                  fieldState.invalid && "text-red-500",
                  formLabelClassName
                )}
              >
                {label}
              </FieldLabel>
            )}

            {/* The Wrapper / Pill Container */}
            <div
              className={cn(
                "flex items-stretch w-full h-15 rounded-full border transition-all duration-200 overflow-hidden bg-white",
                !fieldState.invalid &&
                  !disabled &&
                  "border-secondary focus-within:border-main",
                fieldState.invalid && "border-red-500",
                disabled && "bg-disabled border-secondary cursor-not-allowed",
                wrapperClassName
              )}
            >
              {prepend && (
                <div className="flex items-center shrink-0 border-r border-secondary bg-tertiary">
                  {prepend}
                </div>
              )}

              <Input
                {...field}
                id={field.name}
                disabled={disabled}
                aria-invalid={fieldState.invalid}
                className={cn(
                  "border-0 h-full w-full rounded-none px-6 py-0 bg-transparent text-base text-main placeholder:text-placeholder focus-visible:ring-0 shadow-none",
                  inputClassName
                )}
                {...rest}
              />

              {append && (
                <div className="flex items-center shrink-0 border-l border-secondary">
                  {append}
                </div>
              )}
            </div>
          </div>

          {fieldState.invalid && (
            <FieldError
              className="text-red-500 -mt-1"
              errors={[fieldState.error]}
            />
          )}
        </Field>
      )}
    />
  );
};

export default CustomInput;
