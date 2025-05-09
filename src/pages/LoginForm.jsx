// // loginPage.jsx - React Hook Form + Zod
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, defaultValues } from "../validations/loginSchema";
import { Stack, TextField, Button, CircularProgress } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import { useSnackbar } from "notistack";
import { useState } from "react";

export default function LoginForm() {
  const { login } = useAuth();
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    resolver: zodResolver(loginSchema),
    defaultValues: defaultValues,
  });

  const onSubmit = (data) => {
    setLoading(true);
    console.log("submit");
    console.log(data);

    login(data.email, data.password)
      .then((loginResponseDto) => {
        const userName = loginResponseDto?.userName;
        const error = loginResponseDto?.error;
        if (userName) {
          enqueueSnackbar("¡Hola " + loginResponseDto.userName + "!", {
            variant: "success",
          });
        } else {
          console.error("Ocurrió un Error loginResponseDto=", loginResponseDto);
          enqueueSnackbar(
            "No se pudo iniciar sesión: " + error, // + JSON.stringify(loginResponseDto)
            {
              variant: "error",
            }
          );
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Ocurrió un Error:", err.message);
        enqueueSnackbar(err.message, { variant: "error" });
        setLoading(false);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Stack sx={{ gap: 2, mt: 4 }}>
          <TextField
            {...register("email")}
            label="Emal"
            error={!!errors.email}
            helperText={errors.email?.message}
            required
          />
          <TextField
            {...register("password")}
            label="Contraseña"
            type="password"
            error={!!errors.password}
            helperText={errors.password?.message}
            required
          />

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Button
              type="submit"
              variant="contained"
              disabled={loading}
              startIcon={loading && <CircularProgress size={16} />}
            >
              Inicias sesión
            </Button>
            <Button type="button" variant="outlined">
              Registrarme
            </Button>
            <Button type="button" variant="outlined">
              recuperar contrasña
            </Button>
          </Stack>
        </Stack>
      </form>
    </>
  );
}

// const schema = z.object({
//   email: z.string().email(),
//   password: z.string().min(6),
// });

//**************************************************************************************************************** */

// export default function LoginPage() {
//   const { register, handleSubmit } = useForm({
//     resolver: zodResolver(loginSchema),
//   });

//   const onSubmit = (data) => {
//     console.log("submit");
//     console.log(data);
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input {...register("email")} placeholder="Email" />
//       <input {...register("password")} type="password" placeholder="Password" />
//       <button type="submit">Login</button>
//     </form>
//   );
// }

//**************************************************************************************************************** */
// export default function LoginPage() {
//   return <div>Hola </div>;
// }

// const schema = z.object({
//     email: z.string().email(),
//     password: z.string().min(6),
//   });

//   export default function LoginPage() {
//     const { register, handleSubmit } = useForm({ resolver: zodResolver(schema) });
//     const onSubmit = (data) => console.log(data);

//     return (
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <input {...register("email")} placeholder="Email" />
//         <input {...register("password")} type="password" placeholder="Password" />
//         <button type="submit">Login</button>
//       </form>
//     );
//   }
