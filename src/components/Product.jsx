// componentes/Product.jsx
import { Box, Button, Paper, styled, Typography } from "@mui/material";
import mantraImg from "../assets/mantra.png";

export default function Product({
  name = "Producto",
  description = "Descripción del producto.",
  price = 0.0,
  image = mantraImg,
  rotate = true,
}) {
  const Img = styled("img")({
    width: 200,
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
  });

  const RotatingImg = styled("img")({
    width: 180,
    margin: 20,
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
    animation: rotate ? "spin 5s linear infinite" : "none",
    "@keyframes spin": {
      from: { transform: "rotate(0deg)" },
      to: { transform: "rotate(360deg)" },
    },
  });

  return (
    <Paper
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        overflow: "hidden",
        mt: 5,
      }}
    >
      <RotatingImg src={image} alt="imagen del producto" />

      <Box sx={{ flexGrow: 1, display: "grid", gap: 2 }}>
        <Typography variant="h4">{name}</Typography>
        <Typography variant="body1">{description}</Typography>
        <Button variant="contained">Add Chart</Button>
      </Box>
      <Box sx={{ mr: 2 }} component="p">
        {price}
      </Box>
    </Paper>
  );
}
