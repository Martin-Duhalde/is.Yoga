// component/navbar/Navbar.jsx

import { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import NavListDrawer from "./NavListDrawer";
import MenuIcon from "@mui/icons-material/Menu";

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
import IconTema from "../IconTema";

// const navLinks = [
//   { title: "Home", path: "/home" },
//   { title: "Clases", path: "/clases" },
//   { title: "Cursos", path: "/cursos" },
//   { title: "Seminarios", path: "/seminarios" },
//   { title: "Login", path: "/login" },
// ];

// const navLinksDrawer = [
//   { title: "Inbox", path: "/home", icon: <CrueltyFreeIcon /> },
//   { title: "Clases", path: "/clases", icon: <SelfImprovementIcon /> },
//   { title: "Cursos", path: "/cursos", icon: <SchoolIcon /> },
//   { title: "Seminarios", path: "/seminarios", icon: <SchoolIcon /> },
//   { title: "Alumnos", path: "/alumnos", icon: <PersonIcon /> },
//   { title: "Videos", path: "/login", icon: <SlideshowIcon /> },
// ];

export default function Navbar({
  navLinks,
  navLinksDrawer,
  toggleColorMode,
  mode,
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position="static" sx={{ paddingLeft: 1 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            size="large"
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Yoga con Tere
          </Typography>
          <Box>
            {navLinks.map((link) => (
              <Button
                key={link.title}
                href={link.path}
                color="inherit"
                component="a"
              >
                {link.title}
              </Button>
            ))}
            <IconTema toggleColorMode={toggleColorMode} mode={mode} />
          </Box>
        </Toolbar>
        {/* <Button onClick={() => setOpen(true)}>Abrir menú</Button> */}
      </AppBar>

      <Drawer open={open} anchor="left" onClose={() => setOpen(false)}>
        <NavListDrawer navLinks={navLinksDrawer} />
      </Drawer>
    </>
  );
}
