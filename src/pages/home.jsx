// src/pages/Home.jsx
import { Box, Typography, Container, Paper, styled } from "@mui/material";
import Product from "../components/Product";
import BoxTereCircular from "../components/BoxTereCircular";
//import mantraImg from "../assets/mantra.png";

const RotatingImg = styled("img")({
  width: 180,
  margin: 20,
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
  animation: "spin 5s linear infinite",
  "@keyframes spin": {
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(360deg)" },
  },
});
export default function Home() {
  return (
    <Container sx={{ mt: 8, textAlign: "center" }}>
      <Paper
        elevation={4}
        sx={{
          p: 4,
          borderRadius: 4,
          //background: "linear-gradient(135deg, #e3f2fd, #fce4ec)",
        }}
      >
        {/* <RotatingImg src={mantraImg} alt="imagen del producto" /> */}

        <BoxTereCircular />

        <Typography variant="h4" gutterBottom>
          Bienvenida a Yoga con Tere
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: 600, mx: "auto" }}>
          Soy Tere, profesora de yoga. Te invito a explorar clases, videos,
          capacitaciones y seminarios diseñados para equilibrar tu cuerpo, mente
          y espíritu. <br />
          ¡Sumate a esta experiencia de bienestar!
        </Typography>

        <Product
          name="Clase de Yoga "
          description="Clase para relajar cuerpo y mente."
          price={19.99}
          image="/tere-gris-der.png"
          rotate={false}
        />

        <Product
          name="Clase de Yoga"
          description="Clase para relajar cuerpo y mente"
          price={19.99}
          image="/tere-roja-der.png"
          rotate={false}
        />

        <Product
          name="Yoga Presencial"
          description="Martes y Jueves 09:00hs. Reserva tu cupo. Apto principiantes e intermedios."
          price={19.99}
          image="/tere-gris-der.png"
          rotate={false}
        />

        <Product
          name="Seminario de Caderas"
          description="Sábado 20 Septiembre 09:00hs. Reserva tu cupo. Apto principiantes e intermedios."
          price={19.99}
          image="/tere-celeste-der.png"
          rotate={false}
        />

        <Product />
        <Product />
      </Paper>
    </Container>
  );
}
