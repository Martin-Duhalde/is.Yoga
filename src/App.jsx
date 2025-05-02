import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function App() {
  return (
    <Container sx={{ border: 4, boxShadow: 3, pb: 2 }}>
      <h1>React Material</h1>
      <Typography variant="h2" component="h2">
        Esto es un texto
      </Typography>
      <Button variant="contained">Esto es un boton</Button>
    </Container>
  );
}
