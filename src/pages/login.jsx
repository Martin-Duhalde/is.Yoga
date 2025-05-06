import { useSnackbar } from "notistack";
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Container,
  Typography,
} from "@mui/material";
import BoxTereCircular from "../components/BoxTereCircular";

export default function Login() {
  const { enqueueSnackbar } = useSnackbar(); // Hook para mostrar notificaciones

  const handleClick = () => {
    enqueueSnackbar("This is a success message!", {
      variant: "success",
      autoHideDuration: 3000,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "right",
      },
      // action: (key) => (
      //   <Button onClick={() => closeSnackbar(key)}>Close</Button>
      // ),
    });
  };

  return (
    <Container sx={{ py: 6 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // vertical en mobile, horizontal en desktop
          alignItems: "center",
          gap: 4,
        }}
      >
        <BoxTereCircular variacion="gris" />

        <Box>
          <Typography variant="h3" gutterBottom>
            Login
          </Typography>
          <Typography variant="body1">
            Ingresa al sistema para tener tus clases favoritas a mano, además de
            administrar tu contenido de forma personalizada.
          </Typography>
          <Box sx={{ display: "grid", gap: "1rem" }}>
            <Alert severity="success">
              <AlertTitle>¡Éxito!</AlertTitle>
              This is a success Alert.
            </Alert>
            <Alert severity="info">This is an info Alert.</Alert>
            <Alert severity="warning">This is a warning Alert.</Alert>
            <Alert severity="error">This is an error Alert.</Alert>
          </Box>

          <Button variant="contained" onClick={handleClick}>
            Iniciar Sesión
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
