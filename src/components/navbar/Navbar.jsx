// component/navbar/Navbar.jsx

import { useEffect, useState } from "react";
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

  const [userName, setUserName] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("userName");
    if (storedUser) {
      setUserName(storedUser);
    }
  }, []);

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
            {navLinks.map(
              (link) => (
                //userName == "" &&
                //link.title !== "Login" && (
                <Button
                  component={NavLink}
                  to={link.title}
                  key={link.title}
                  color="inherit"
                >
                  {link.title}
                </Button>
              )
              //)
            )}
            {userName && (
              <Button
                component={NavLink}
                //to={link.title}
                key={userName}
                color="inherit"
              >
                {userName ?? "sin usuario"}
              </Button>
            )}
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
        <NavListDrawer
          navLinks={navLinksDrawer}
          NavLink={NavLink}
          setOpen={setOpen}
        />
      </Drawer>
    </>
  );
}
