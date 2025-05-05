import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

export default function NavListDrawer({ navLinks }) {
  return (
    <Box sx={{ wid: 250 }}>
      <nav>
        <List>
          {navLinks.map((link) => (
            <ListItem key={link.title} disablePadding>
              <ListItemButton component="a" href={link.path}>
                <ListItemIcon>{link.icon}</ListItemIcon>
                <ListItemText> {link.title}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
          {/*
          <ListItem>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItem> */}
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
