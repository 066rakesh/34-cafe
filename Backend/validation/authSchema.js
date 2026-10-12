import z from "zod";

export const signupSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(15),
  phone: z
    .string()
    .trim()
    .regex(/^\d{10}$/, "Phone must be 10 digits"),
  email: z.string().trim().email("Enter a valid email"),
});
