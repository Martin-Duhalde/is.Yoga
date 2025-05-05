import { Box, Typography, Container } from "@mui/material";

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
        <Box
          component="img"
          src="/tere-roja-der.png"
          alt="Tere"
          sx={{
            width: 200,
            height: 200,
            borderRadius: "50%",
            objectFit: "cover",
            boxShadow: 4,
            transition: "transform 0.5s ease-in-out",
            "&:hover": {
              transform: "scale(1.05) rotate(-2deg)",
            },
          }}
        />
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
