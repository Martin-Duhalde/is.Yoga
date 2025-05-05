import { Box, Container, Typography } from "@mui/material";

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
        <Box
          component="img"
          src="/tere-gris-der.png"
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
