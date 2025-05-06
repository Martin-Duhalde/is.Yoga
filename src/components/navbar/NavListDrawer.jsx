import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

export default function NavListDrawer({ navLinks, NavLink, setOpen }) {
  /// https://www.youtube.com/watch?v=f-0eN7QpO54&list=PLPl81lqbj-4J2xx_YAb97dpCG1rxl2wv-&index=15
  return (
    <Box sx={{ wid: 250 }}>
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
            <ListItemButton component="a" href="#">
              <ListItemText primary="Cerrar sesión" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}
