// componentes/Product.jsx
import { Box, Button, Paper, styled, Typography } from "@mui/material";
import mantraImg from "../assets/mantra.png";

export default function Product() {
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
    animation: "spin 5s linear infinite",
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
      <RotatingImg src={mantraImg} alt="imagen del producto" />

      <Box sx={{ flexGrow: 1, display: "grid", gap: 2 }}>
        <Typography variant="h4">Product Name</Typography>
        <Typography variant="body1">Product Description</Typography>
        <Button variant="contained">Add Chart</Button>
      </Box>
      <Box sx={{ mr: 2 }} component="p">
        19.99
      </Box>
    </Paper>
  );
}
