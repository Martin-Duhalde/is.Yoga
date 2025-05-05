import { Image } from "@mui/icons-material";
import Product from "../components/Product";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Bienvenido a la página de inicio.</p>
      <Box
        component="img"
        src="/tere-gris.png"
        alt="Tere"
        sx={{
          width: 300,
          height: 300,
          borderRadius: "50%",
          float: "right",
          boxShadow: 3,
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
      />
      {/* <img src="/tere-gris.png" alt="Tere" width="500" height="500" />
      <Image src="/tere-gris.png" alt="Tere" width="100" height="100" /> */}
      <Product />
      <Product />
      <Product
        name="Clase de Yoga"
        description="Clase para relajar cuerpo y mente"
        price={19.99}
        image="/tere-gris-der.png"
        rotate={false}
      />
    </div>
  );
}
