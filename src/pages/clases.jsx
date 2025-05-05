import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Container,
} from "@mui/material";

const classes = [
  {
    id: 11,
    title: "Meditación Guiada",
    description:
      "Conecta con tu interior a través de una práctica de mindfulness.",
    image: "/postura.png",
  },
  {
    id: 12,
    title: "Yoga Nidra",
    description: "Induce un descanso profundo y restaurador al final del día.",
    image: "/postura.png",
  },
  {
    id: 1,
    title: "Saludo al Sol",
    description: "Calienta y sincroniza tu respiración con movimiento suave.",
    image: "/postura-amarillo.png",
  },
  {
    id: 2,
    title: "Guerrero I y II",
    description: "Fortalece piernas y abre pecho en esta poderosa postura.",
    image: "/postura-verde.png",
  },
  {
    id: 3,
    title: "Torsiones Detox",
    description:
      "Mejora la digestión y alivia tensiones en la zona media del cuerpo.",
    image: "/postura-rosa.png",
  },
  {
    id: 4,
    title: "Apertura de Caderas",
    description: "Libera estrés acumulado y mejora tu rango de movimiento.",
    image: "/postura-violeta.png",
  },
  {
    id: 5,
    title: "Equilibrio sobre un Pie",
    description:
      "Desarrolla concentración y estabilidad con posturas de equilibrio.",
    image: "/postura-azul.png",
  },
  {
    id: 6,
    title: "Yoga Restaurativo",
    description:
      "Relaja cuerpo y mente con soporte de accesorios y respiración profunda.",
    image: "/postura-celeste.png",
  },
  {
    id: 7,
    title: "Flujo Energizante",
    description: "Secuencia dinámica para despertar tu energía matutina.",
    image: "/postura-naranja.png",
  },
  {
    id: 8,
    title: "Ejercicios de Oficina",
    description:
      "Estiramientos sencillos para aliviar la tensión tras horas sentado.",
    image: "/postura.png",
  },
  {
    id: 9,
    title: "Meditación Guiada",
    description:
      "Conecta con tu interior a través de una práctica de mindfulness.",
    image: "/postura.png",
  },
  {
    id: 10,
    title: "Yoga Nidra",
    description: "Induce un descanso profundo y restaurador al final del día.",
    image: "/postura.png",
  },
];

export default function Clases() {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Clases de Hata Yoga
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{ mb: 4, maxWidth: 700, mx: "auto" }}
      >
        Descubrí nuestras sesiones de yoga: flujos dinámicos, restaurativos y
        meditaciones guiadas para todos los niveles.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {classes.map(({ id, title, description, image }) => (
          <Grid item xs={12} sm={6} md={4} key={id}>
            <Card
              elevation={3}
              sx={{
                width: 400,
                height: 400,
                display: "flex",
                flexDirection: "column",
                borderRadius: 2,
                overflow: "hidden",
                boxShadow: 3,
              }}
            >
              <CardMedia
                component="img"
                image={image}
                alt={title}
                sx={{
                  height: "60%",
                  objectFit: "cover",
                }}
              />
              <CardContent sx={{ flexGrow: 1, padding: 2 }}>
                <Typography variant="h6" gutterBottom noWrap>
                  {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
