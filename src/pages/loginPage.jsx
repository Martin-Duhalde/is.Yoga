// // loginPage.jsx - React Hook Form + Zod
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export default function LoginPage() {
  const { register, handleSubmit } = useForm({ resolver: zodResolver(schema) });
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email")} placeholder="Email" />
      <input {...register("password")} type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}

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
