import { Box, Typography, Avatar, Paper } from "@mui/material";
import { useAuth } from "../context/AuthContext";

export default function Perfil() {
  const { user } = useAuth();

  return (
    <Paper elevation={3} sx={{ p: 3, maxWidth: 400, mx: "auto", mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Perfil
      </Typography>

      {user?.avatarUrl && (
        <Avatar
          src={user.avatarUrl}
          alt={user.userName}
          sx={{ width: 80, height: 80, mb: 2 }}
        />
      )}

      <Box mb={2}>
        <Typography variant="subtitle2" color="text.secondary">
          Nombre de usuario:
        </Typography>
        <Typography variant="body1" color="primary">
          {user?.userName}
        </Typography>
      </Box>

      <Box mb={2}>
        <Typography variant="subtitle2" color="text.secondary">
          Email:
        </Typography>
        <Typography variant="body1" color="primary">
          {user?.email}
        </Typography>
      </Box>

      <Box mb={2}>
        <Typography variant="subtitle2" color="text.secondary">
          Rol:
        </Typography>
        <Typography variant="body1" color="primary">
          {user?.role}
        </Typography>
      </Box>
    </Paper>
  );
}
