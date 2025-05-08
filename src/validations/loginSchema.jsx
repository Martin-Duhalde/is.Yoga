// validations/loginSchema.jsx
import { z } from "zod";

// const patterns = {
//   email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//   password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
// };

export const loginSchema = z.object({
  email: z.string().email("Email inválido").nonempty("Email requerido"),
  // .refine(
  //   (text) => {
  //     return patterns.email.test(text);
  //   },
  //   { message: "Email inválido" }
  // )
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
  // .refine(
  //   (text) => {
  //     return patterns.password.test(text);
  //   },
  //   { message: "La contraseña debe contener al menos una letra y un número" }
  // )
});

//export type LoginSchema = z.infer<typeof loginSchema>;

export const defaultValues = { email: "", password: "" };
