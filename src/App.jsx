// App.jsx

import { useState, useMemo } from "react"; // Importación de React y hooks

import { Container, CssBaseline, ThemeProvider } from "@mui/material"; // Importación de Material UI y componentes relacionados con la UI

import { themeOptions } from "./ThemeOptions"; // // Importación de las configuraciones de tema
import Product from "./components/Product";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Clases from "./pages/clases";
import Cursos from "./pages/cursos";
import Seminarios from "./pages/seminarios";

export default function App() {
  const storedMode = localStorage.getItem("colorMode") || "dark";
  const [mode, setMode] = useState(storedMode);

  //const [mode, setMode] = useState("dark");

  // const toggleColorMode = () => {
  //   setMode((prev) => (prev === "light" ? "dark" : "light"));
  // };
  const toggleColorMode = () => {
    setMode((prev) => {
      const newMode = prev === "light" ? "dark" : "light";
      localStorage.setItem("colorMode", newMode); // Guardar preferencia
      return newMode;
    });
  };
  const theme = useMemo(() => themeOptions(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Navbar toggleColorMode={toggleColorMode} mode={mode} />
      <Container
        sx={{ border: 0, boxShadow: 0, pb: 2, borderColor: "primary.main" }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/clases" element={<Clases />} />
          <Route path="/seminarios" element={<Seminarios />} />
          <Route path="/cursos" element={<Cursos />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}
