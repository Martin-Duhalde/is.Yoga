import { Box, Typography, Container } from "@mui/material";
import BoxTereCircular from "../components/BoxTereCircular";

export default function Seminarios() {
  return (
    <Container sx={{ py: 6 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: 4,
        }}
      >
        <BoxTereCircular variacion="roja" />
        <Box>
          <Typography variant="h3" gutterBottom>
            Seminarios
          </Typography>
          <Typography variant="body1">
            Los seminarios son encuentros intensivos para profundizar en
            aspectos clave de la práctica del yoga. A través de teoría, práctica
            y reflexión, Tere propone un espacio de transformación y
            aprendizaje, ideal para quienes buscan ir más allá de la clase
            habitual y conectar con una comunidad que comparte el mismo camino
            de conciencia y bienestar.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
