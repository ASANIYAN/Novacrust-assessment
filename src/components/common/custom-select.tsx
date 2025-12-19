"use client";
import { Controller, type Control } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Field, FieldError, FieldLabel } from "../ui/field";
import { cn } from "@/lib/utils";

interface CustomSelectProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  name: string;
  label?: string;
  placeholder?: string;
  labelClassName?: string;
  selectClassName?: string;
  selectContainerClassName?: string;
  selectContentClassName?: string;
  selectTriggerClassName?: string;
  selectValueClassName?: string;
  selectItemClassName?: string;
  labelLeftComponent?: React.ReactNode;
  options: { value: string; label: string }[];
  disabled?: boolean;
}

const CustomSelect: React.FC<
  CustomSelectProps & React.SelectHTMLAttributes<HTMLSelectElement>
> = ({
  name,
  label,
  control,
  placeholder = "",
  labelClassName,
  selectContainerClassName,
  selectContentClassName,
  selectTriggerClassName,
  selectValueClassName,
  selectItemClassName,
  labelLeftComponent,
  options,
  disabled,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <div className={cn("space-y-4", selectContainerClassName)}>
            <div className="flex justify-between items-center">
              <FieldLabel
                className={cn(
                  "text-main text-base font-medium",
                  fieldState.invalid && "text-red-500",
                  labelClassName
                )}
              >
                {label}
              </FieldLabel>
              {labelLeftComponent}
            </div>
            <Select
              onValueChange={field.onChange}
              defaultValue={field.value}
              disabled={disabled}
            >
              <SelectTrigger
                className={cn(
                  "w-full py-4 px-6 h-15! rounded-xxx border text-base font-normal text-main",
                  "shadow-none transition-colors duration-200",
                  "focus:ring-0 focus:ring-offset-0",
                  !fieldState.invalid && !disabled && "border-secondary",
                  !fieldState.invalid && !disabled && "focus:border-main",
                  fieldState.invalid && "border-red-500",
                  disabled &&
                    "bg-disabled border-secondary cursor-not-allowed opacity-50",
                  selectTriggerClassName
                )}
              >
                <SelectValue
                  placeholder={placeholder}
                  className={cn(
                    "text-placeholder placeholder:text-placeholder",
                    selectValueClassName
                  )}
                />
              </SelectTrigger>
              <SelectContent
                position="popper"
                className={cn(
                  "bg-white rounded-xl shadow-md",
                  selectContentClassName
                )}
              >
                {options.map((option) => (
                  <SelectItem
                    key={option.value}
                    value={option.value}
                    className={cn(
                      "text-main text-base font-normal cursor-pointer font-outfit",
                      selectItemClassName
                    )}
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {fieldState.invalid && (
            <FieldError className="text-red-500" errors={[fieldState.error]} />
          )}
        </Field>
      )}
    />
  );
};

export default CustomSelect;
