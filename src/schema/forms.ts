import { z, ZodSchema } from "zod";

import { UserPasswordMinChar } from "src/utils/const";

export function trim(pred: ZodSchema<any>) {
  return z.preprocess(
    (u: unknown) => (typeof u === "string" ? u.trim() : u),
    pred
  );
}

export const RegisterFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(UserPasswordMinChar),
  passwordConfirmation: z.string().min(UserPasswordMinChar),
});

export type RegisterFormData = z.infer<typeof RegisterFormSchema>;

export const LoginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(UserPasswordMinChar),
  rememberMe: z.boolean(),
});

export type LoginFormData = z.infer<typeof LoginFormSchema>;
