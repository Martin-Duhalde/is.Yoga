// App.jsx

import { useState, useMemo } from "react"; // Importación de React y hooks

import {
  Button,
  Container,
  Typography,
  IconButton,
  CssBaseline,
  ThemeProvider,
} from "@mui/material"; // Importación de Material UI y componentes relacionados con la UI

import {
  Brightness4 as Brightness4Icon,
  Brightness7 as Brightness7Icon,
} from "@mui/icons-material"; // Importación de íconos

import { themeOptions } from "./ThemeOptions"; // // Importación de las configuraciones de tema

export default function App() {
  const [mode, setMode] = useState("dark");

  const toggleColorMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const theme = useMemo(() => themeOptions(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container sx={{ border: 4, boxShadow: 3, pb: 2 }}>
        <IconButton
          onClick={toggleColorMode}
          color="inherit"
          sx={{ float: "right" }}
        >
          {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        <Typography variant="h4">Yoga</Typography>
        <Typography>Esto es un texto parrafo</Typography>
        <Button variant="contained">Esto es un boton</Button>
      </Container>
    </ThemeProvider>
  );
}
