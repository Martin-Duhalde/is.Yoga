// App.jsx

import { useState, useMemo } from "react"; // Importación de React y hooks

import { Container, CssBaseline, ThemeProvider } from "@mui/material"; // Importación de Material UI y componentes relacionados con la UI

import { themeOptions } from "./ThemeOptions"; /// Importación de las configuraciones de tema
import Product from "./components/Product";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/login";
import Clases from "./pages/clases";
import Cursos from "./pages/cursos";
import Seminarios from "./pages/seminarios";

import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import SchoolIcon from "@mui/icons-material/School";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import BubbleChartIcon from "@mui/icons-material/BubbleChart";
import CrueltyFreeIcon from "@mui/icons-material/CrueltyFree";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import GroupIcon from "@mui/icons-material/Group";
import PersonIcon from "@mui/icons-material/Person";
import Posturas from "./pages/posturas";

const navLinks = [
  { title: "Home", path: "/home" },
  { title: "Posturas", path: "/posturas" },
  { title: "Clases", path: "/clases" },
  { title: "Cursos", path: "/cursos" },
  { title: "Seminarios", path: "/seminarios" },
  { title: "Login", path: "/login" },
];

const navLinksDrawer = [
  { title: "Inbox", path: "/home", icon: <CrueltyFreeIcon /> },
  { title: "Clases", path: "/clases", icon: <SelfImprovementIcon /> },
  { title: "Cursos", path: "/cursos", icon: <SchoolIcon /> },
  { title: "Seminarios", path: "/seminarios", icon: <SchoolIcon /> },
  { title: "Alumnos", path: "/alumnos", icon: <PersonIcon /> },
  { title: "Videos", path: "/login", icon: <SlideshowIcon /> },
];

export default function App() {
  const storedMode = localStorage.getItem("colorMode") || "dark";
  const [mode, setMode] = useState(storedMode);

  const toggleColorMode = () => {
    setMode((prev) => {
      const newMode = prev === "light" ? "dark" : "light";
      localStorage.setItem("colorMode", newMode); /// Guardar preferencia en localStorage
      return newMode;
    });
  };
  const theme = useMemo(() => themeOptions(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Navbar
        navLinks={navLinks}
        navLinksDrawer={navLinksDrawer}
        toggleColorMode={toggleColorMode}
        mode={mode}
      />
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
          <Route path="/posturas" element={<Posturas />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}
