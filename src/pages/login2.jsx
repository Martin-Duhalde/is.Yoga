// import Cookies from "js-cookie";
// import { useState } from "react";
// import { useSnackbar } from "notistack";
// import { decodeToken, isExpired } from "react-jwt";

// import {
//   Box,
//   Button,
//   Container,
//   TextField,
//   Typography,
//   CircularProgress,
// } from "@mui/material";
// import BoxTereCircular from "../components/BoxTereCircular";

// export default function Login() {
//   const { enqueueSnackbar } = useSnackbar();
//   const [email, setEmail] = useState("");
//   const [error, setError] = useState({ error: false, message: "" });
//   const [loading, setLoading] = useState(false);

//   const [userRole, setUserRole] = useState("");
//   const [userName, setUserName] = useState("");

//   const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

//   // const registerUser = async (email) => {
//   //   const payload = {
//   //     userName: "Jane Doe",
//   //     email,
//   //     password: "P@ssw0rd",
//   //   };

//   //   const response = await fetch("https://localhost:7060/api/Auth/register", {
//   //     method: "POST",
//   //     headers: {
//   //       Accept: "text/plain",
//   //       "Content-Type": "application/json",
//   //     },
//   //     body: JSON.stringify(payload),
//   //   });

//   //   if (!response.ok) {
//   //     const errorText = await response.text();
//   //     throw new Error(errorText || `Error ${response.status}`);
//   //   }

//   //   return await response.text(); // o response.json() si tu backend lo devuelve
//   // };

//   const loginUser = async (email) => {
//     const payload = {
//       email: email, //"jane.doe@example.com",
//       password: "123456", ///"P@ssw0rd",
//     };

//     const response = await fetch("https://localhost:7060/api/Auth/login", {
//       method: "POST",
//       headers: {
//         Accept: "text/plain",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(payload),
//     });

//     if (!response.ok) {
//       const errorText = await response.text();
//       throw new Error(errorText || `Error ${response.status}`);
//     }

//     const jsonResponse = await response.json(); // o response.text() si tu backend lo devuelve
//     console.log("Respuesta del servidor:", jsonResponse); // Verifica la respuesta del servidor

//     // 🟢 Guardar token en cookie
//     Cookies.set("authToken", jsonResponse.token, {
//       expires: 7, // opcional: duración en días
//       secure: true, // solo en HTTPS
//       sameSite: "Strict", // o "Lax" dependiendo del flujo
//     });

//     // if (jsonResponse.token) {
//     //   const decoded = jwtDecode(jsonResponse.token);
//     //   console.log("Datos del usuario desde el token:", decoded);

//     // Cookies.set("authUser", JSON.stringify(decoded), {
//     //   expires: 7, // opcional: duración en días
//     //   secure: true, // solo en HTTPS
//     //   sameSite: "Strict", // o "Lax" dependiendo del flujo
//     // });

//     // return decoded;
//     //}

//     return jsonResponse; // o response.json() si tu backend lo devuelve
//     //return await response.text(); // o response.json() si tu backend lo devuelve
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateEmail(email)) {
//       setError({ error: true, message: "Ingrese un email válido" });
//       enqueueSnackbar("Email inválido", { variant: "error" });
//       return;
//     }

//     setError({ error: false, message: "" });
//     setLoading(true);

//     try {
//       const result = await loginUser(email);
//       //const result = await registerUser(email);
//       console.log("Registro exitoso:", result);

//       const decodedToken = decodeToken(result.token);
//       const tokenExpirado = isExpired(result.token);

//       // Mapeo manual de los claims
//       const userId =
//         decodedToken[
//           "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
//         ];
//       const userName =
//         decodedToken[
//           "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"
//         ];
//       const userEmail =
//         decodedToken[
//           "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"
//         ];
//       const userRole =
//         decodedToken[
//           "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
//         ];

//       localStorage.setItem("userName", userName);
//       setUserName(userName);
//       setUserRole(userRole);

//       enqueueSnackbar("Hola " + userName + "!", {
//         variant: "success",
//       });
//     } catch (err) {
//       console.error("Error:", err.message);
//       enqueueSnackbar(err.message, { variant: "error" });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Container sx={{ py: 6 }}>
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: { xs: "column", md: "row" },
//           alignItems: "center",
//           gap: 4,
//         }}
//       >
//         <BoxTereCircular variacion="gris" />
//         <Box>
//           <Typography variant="h3" gutterBottom>
//             Login
//           </Typography>
//           <Typography variant="body1">
//             Ingresa al sistema para tener tus clases favoritas a mano, además de
//             administrar tu contenido de forma personalizada.
//           </Typography>
//         </Box>
//       </Box>

//       <Box component="form" onSubmit={handleSubmit} sx={{ mt: 6 }}>
//         <TextField
//           id="email"
//           label="Email"
//           type="email"
//           required
//           fullWidth
//           variant="outlined"
//           error={error.error}
//           helperText={error.message}
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           sx={{ mb: 2 }}
//         />

//         <Box sx={{ display: "flex", gap: 2 }}>
//           <Button
//             variant="contained"
//             onClick={() => {
//               enqueueSnackbar("Iniciando sesión...", { variant: "info" });
//               localStorage.setItem("userName", "");
//             }}
//           >
//             Iniciar sesión
//           </Button>
//           <Button
//             type="submit"
//             variant="outlined"
//             disabled={loading}
//             startIcon={loading && <CircularProgress size={16} />}
//           >
//             Registrarme
//           </Button>
//         </Box>
//       </Box>
//     </Container>
//   );
// }

// // import { useState } from "react";
// // import { useSnackbar } from "notistack";
// // import { Box, Button, Container, TextField, Typography } from "@mui/material";
// // import BoxTereCircular from "../components/BoxTereCircular";

// // export default function Login() {
// //   const { enqueueSnackbar } = useSnackbar(); // Hook para mostrar notificaciones
// //   const [email, setEmail] = useState(""); // Estado para almacenar el email ingresado
// //   const [error, setError] = useState({ error: false, message: "" }); // Estado para manejar errores});
// //   const [loading, setLoading] = useState(false); // Estado para manejar el loading

// //   const handleClick = () => {
// //     enqueueSnackbar("This is a success message!", {
// //       variant: "success",
// //       // action: (key) => (
// //       //   <Button onClick={() => closeSnackbar(key)}>Close</Button>
// //       // ),
// //     });
// //   };

// //   const handleSubmit = async (e) => {
// //     // setLoading(true); // Inicia el loading
// //     e.preventDefault();
// //     console.log("Submit: ", email);
// //     // if (validateEmail(email)) {
// //     //   setError({ error: false, message: "" }); /// borrar el error
// //     //   console.log("Email correcto: ", email);
// //     // } else {
// //     //   setError({ error: true, message: "Ingrese un email valido" });

// //     //   enqueueSnackbar("Ingrese un email valido", {
// //     //     variant: "error",
// //     //   });
// //     // }
// //     try {
// //       const response = await fetch("https://localhost:7060/api/Auth/register", {
// //         method: "POST",
// //         headers: {
// //           Accept: "text/plain",
// //           "Content-Type": "application/json",
// //           "User-Agent": "Thunder Client (https://www.thunderclient.com)",
// //         },
// //         body: JSON.stringify({
// //           userName: "Jane Doe",
// //           email: "jane.doe@example.com",
// //           password: "P@ssw0rd",
// //         }),
// //       });

// //       if (!response.ok) {
// //         const errorText = await response.text();
// //         throw new Error(`Error ${response.status}: ${errorText}`);
// //       }

// //       const data = await response.text(); // o .json() si la respuesta es JSON
// //       console.log("Registro exitoso:", data);

// //       enqueueSnackbar("Registro exitoso:", {
// //         variant: "success",
// //       });
// //     } catch (err) {
// //       console.error("Error al enviar el email: ", err);
// //       setError({ error: true, message: "Ingrese un email valido" });

// //       enqueueSnackbar(err.message, {
// //         variant: "error",
// //         message: err.message,
// //       });
// //     }

// //     // setLoading(false); // Inicia el loading
// //   };

// //   const validateEmail = (email) => {
// //     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// //     return regex.test(email);
// //   };

// //   return (
// //     <Container sx={{ py: 6 }}>
// //       <Box
// //         sx={{
// //           display: "flex",
// //           flexDirection: { xs: "column", md: "row" }, // vertical en mobile, horizontal en desktop
// //           alignItems: "center",
// //           gap: 4,
// //         }}
// //       >
// //         <BoxTereCircular variacion="gris" />
// //         <Box>
// //           <Typography variant="h3" gutterBottom>
// //             Login
// //           </Typography>
// //           <Typography variant="body1">
// //             Ingresa al sistema para tener tus clases favoritas a mano, además de
// //             administrar tu contenido de forma personalizada.
// //           </Typography>
// //         </Box>
// //       </Box>
// //       <br />
// //       <br />
// //       <Box component="form" onSubmit={handleSubmit}>
// //         <TextField
// //           id="email"
// //           label="Email"
// //           type="email"
// //           required
// //           variant="outlined"
// //           fullWidth
// //           error={error.error}
// //           helperText={error.error} //"Ingrese un email valido"
// //           value={email}
// //           onChange={(e) => setEmail(e.target.value)}
// //         ></TextField>
// //         <Button
// //           type="submit"
// //           variant="outlined"
// //           loading={loading}
// //           loadingIndicator="Registrándote..."
// //         >
// //           Registrame
// //         </Button>
// //         <Button variant="contained" onClick={handleClick}>
// //           Iniciar Sesión
// //         </Button>
// //       </Box>
// //     </Container>
// //   );
// // }
