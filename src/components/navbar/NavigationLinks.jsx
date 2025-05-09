// src/components/navbar/NavigationLinks.jsx
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import SchoolIcon from "@mui/icons-material/School";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import CrueltyFreeIcon from "@mui/icons-material/CrueltyFree";
import PersonIcon from "@mui/icons-material/Person";
import { useAuth } from "../../context/AuthContext";

export default function useNavigationLinks() {
  const { user } = useAuth();

  const navLinks = [
    { title: "Home", path: "/home" },
    { title: "Posturas", path: "/posturas" },
    { title: "Clases", path: "/clases" },
    { title: "Cursos", path: "/cursos" },
    { title: "Seminarios", path: "/seminarios" },
    user
      ? { title: user.userName || "Usuario", path: "/perfil" }
      : { title: "Login", path: "/login" },
  ];

  const navLinksDrawer = [
    { title: "Inbox", path: "/home", icon: <CrueltyFreeIcon /> },
    { title: "Clases", path: "/clases", icon: <SelfImprovementIcon /> },
    {
      title: "Nueva Clase",
      path: "/nuevaclase",
      icon: <SelfImprovementIcon />,
    },
    { title: "Cursos", path: "/cursos", icon: <SchoolIcon /> },
    { title: "Seminarios", path: "/seminarios", icon: <SchoolIcon /> },
    { title: "Alumnos", path: "/alumnos", icon: <PersonIcon /> },
    { title: "Videos", path: "/login", icon: <SlideshowIcon /> },
  ];

  return { navLinks, navLinksDrawer };
}
