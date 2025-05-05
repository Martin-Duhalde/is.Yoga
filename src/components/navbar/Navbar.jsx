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
import { NavLink } from "react-router-dom";

import IconTema from "../IconTema";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";

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
                to={link.title}
                href={link.path}
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

            {/* <IconTema toggleColorMode={toggleColorMode} mode={mode} /> */}
          </Box>
        </Toolbar>
        {/* <Button onClick={() => setOpen(true)}>Abrir menú</Button> */}
      </AppBar>

      <Drawer open={open} anchor="right" onClose={() => setOpen(false)}>
        <NavListDrawer navLinks={navLinksDrawer} />
      </Drawer>
    </>
  );
}
