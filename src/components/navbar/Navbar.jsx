// component/navbar/Navbar.jsx

import { useState } from "react";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import NavListDrawer from "./NavListDrawer";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";

import IconTema from "../IconTema";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import { useAuth } from "../../context/AuthContext";

export default function Navbar({
  navLinks,
  navLinksDrawer,
  toggleColorMode,
  mode,
}) {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();

  return (
    <>
      <AppBar position="static" sx={{ paddingLeft: 1 }}>
        <Toolbar>
          <IconButton color="inherit" size="large" onClick={toggleColorMode}>
            <SelfImprovementIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Yoga con Tere
          </Typography>
          <Box>
            {navLinks.map((link) => (
              <Button
                component={NavLink}
                to={link.path}
                key={link.title}
                color="inherit"
              >
                {link.title}
              </Button>
            ))}

            <IconButton
              color="inherit"
              size="large"
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>

            <IconButton color="inherit" size="large" onClick={toggleColorMode}>
              <IconTema mode={mode} />
            </IconButton>

            {user && ( // ✅ Mostrar solo si el usuario está autenticado
              <IconButton
                color="inherit"
                size="large"
                component={NavLink}
                to="/perfil"
              >
                <Avatar
                  alt="Avatar del usuario"
                  // src={user.avatarUrl}
                  src={`https://localhost:7060/api/Avatars?${Date.now()}`}
                  sx={{ width: 36, height: 36 }}
                />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer open={open} anchor="right" onClose={() => setOpen(false)}>
        <NavListDrawer
          navLinks={navLinksDrawer}
          NavLink={NavLink}
          setOpen={setOpen}
        />
      </Drawer>
    </>
  );
}
