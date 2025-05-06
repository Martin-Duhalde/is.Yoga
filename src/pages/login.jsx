import { Box, Container, Typography } from "@mui/material";
import BoxTereCircular from "../components/BoxTereCircular";

export default function Login() {
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
        </Box>
      </Box>
    </Container>
  );
}
