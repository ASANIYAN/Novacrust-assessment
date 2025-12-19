import { z } from "zod";

export const StepOneSchema = z.object({
  bank: z.string().min(1, "Please select a bank"),
  accountNumber: z
    .string()
    .min(10, "Account number must be at least 10 digits")
    .regex(/^\d+$/, "Account number must only contain digits"),
});

export const StepTwoSchema = z.object({
  recipientEmail: z.email("Please enter a valid email address"),
  recipientPhoneNumber: z
    .string()
    .min(6, "Please enter a valid phone number")
    .regex(
      /^[\d\s-]+$/,
      "Phone number can only contain digits, spaces, or hyphens"
    ),
  countryCode: z.string().min(1, "Required"),
});

export const TransferFormSchema = StepOneSchema.merge(StepTwoSchema);

// Types derived from schemas
export type StepOneFormType = z.infer<typeof StepOneSchema>;
export type StepTwoFormType = z.infer<typeof StepTwoSchema>;
export type TransferFormType = z.infer<typeof TransferFormSchema>;
