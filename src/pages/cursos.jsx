import { Box, Typography, Container } from "@mui/material";
import BoxTereCircular from "../components/BoxTereCircular";

export default function Cursos() {
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
        <BoxTereCircular variacion="verde" />
        <Box>
          <Typography variant="h3" gutterBottom>
            Cursos
          </Typography>
          <Typography variant="body1">
            Bienvenido a la página de Cursos. Explorá nuestras formaciones
            completas para profundizar en tu práctica de yoga, meditación y
            bienestar integral.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
