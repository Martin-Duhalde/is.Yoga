import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

export default function NavListDrawer({ navLinks, NavLink, setOpen }) {
  const { logout } = useAuth();
  const navigate = useNavigate(); // ⬅️ hook de navegación
  const { enqueueSnackbar } = useSnackbar();

  // const handleLogout = () => {
  //   console.log("Logout Clicked!!");
  //   logout(); // limpiar estado y localStorage
  //   navigate("/login"); // redirigir al login
  // };
  const handleLogout = async () => {
    try {
      await logout(); // limpia estado y localStorage
      enqueueSnackbar("Sesión cerrada con éxito", {
        variant: "success",
      });
      navigate("/login");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
      enqueueSnackbar("Error al cerrar sesión", {
        variant: "error",
        autoHideDuration: 5000,
      });
    }
  };

  /// https://www.youtube.com/watch?v=f-0eN7QpO54&list=PLPl81lqbj-4J2xx_YAb97dpCG1rxl2wv-&index=15
  return (
    <Box sx={{ width: 250 }}>
      <nav>
        <List>
          {navLinks.map((link) => (
            <ListItem key={link.title} disablePadding>
              <ListItemButton
                component={NavLink}
                to={link.path}
                onClick={() => setOpen(false)} /// para cerrar el menú despues del click
              >
                <ListItemIcon>{link.icon}</ListItemIcon>
                <ListItemText> {link.title}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
      <Divider />
      <nav>
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={handleLogout}>
              <ListItemText primary="Cerrar sesión" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}
