import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Container,
  Button,
} from "@mui/material";
import BoxTereCircular from "../components/BoxTereCircular";

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

const chakraClases = [
  {
    label: "Activa",
    color: "#e53935",
    descripcion:
      "Clases dinámicas enfocadas en el fortalecimiento, movilidad, estabilidad y energía. Ideal para todos los días",
  },
  {
    label: "Energia",
    color: "#fb8c00",
    descripcion:
      "Clases intensas para cuando necesitás moverte, quemar o liberar tensiones acumuladas.",
  },
  {
    label: "Amanecer",
    color: "#fdd835",
    descripcion:
      "Una práctica suave y consciente para acompañar el inicio del día con armonía.",
  },
  {
    label: "Relajación",
    color: "#43a047",
    descripcion:
      "Ideal para liberar tensiones, calmar el sistema nervioso y relajar cuerpo y mente.",
  },
  {
    label: "Caderas",
    color: "#1e88e5",
    descripcion:
      "Posturas enfocadas en abrir, fortalecer y flexibilizar la zona de caderas y pelvis.",
  },
  {
    label: "Postura",
    color: "#5e35b1",
    descripcion:
      "Fortalece y alinea la columna vertebral, hombros y cuello, mejorando la postura. Ideal si trabajas sentado.",
  },
  {
    label: "Dormir",
    color: "#8e24aa",
    descripcion:
      "Clase suave y restaurativa para preparar el cuerpo y la mente antes de dormir.",
  },
  {
    label: "Soy yo",
    color: "#ec407a",
    textColor: "#fff",
    descripcion:
      "Una práctica introspectiva para reconectar con tu esencia y autenticidad.",
  },
];

const textColorSeleccionada = "#000"; // Color de texto para la clase seleccionada
const textColorDefault = "#fff"; // Color de texto para la clase seleccionada

export default function Clases() {
  const [seleccionada, setSeleccionada] = useState(null);

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
        <BoxTereCircular variacion="celeste" />
        <Box>
          <Typography variant="h3" gutterBottom>
            Clases de Hatha Yoga
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, maxWidth: 700, mx: "auto" }}>
            Descubrí nuestras sesiones de yoga: flujos dinámicos, restaurativos
            y meditaciones guiadas para todos los niveles.
          </Typography>
          <Typography>¿Cómo te encuentras hoy? </Typography>
          <br />
          <Box>
            <Box style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {chakraClases.map(({ label, color }) => (
                <Button
                  key={label}
                  onClick={() => setSeleccionada(label)}
                  sx={{
                    bgcolor: color,
                    color:
                      seleccionada == label
                        ? textColorSeleccionada
                        : textColorDefault /*textColor*/,
                  }}
                >
                  {label}
                </Button>
              ))}
            </Box>
            {seleccionada && (
              <Typography variant="body1" sx={{ mt: 3 }}>
                {chakraClases.find((c) => c.label === seleccionada).descripcion}
              </Typography>
            )}
          </Box>
        </Box>
      </Box>

      <br />
      <br />
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
