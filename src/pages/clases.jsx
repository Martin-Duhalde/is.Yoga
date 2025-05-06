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

import clases from "../data/clases";
import etiquetas from "../data/etiquetas";

const textColorSeleccionada = "#000"; // Color de texto para la clase seleccionada
const textColorDefault = "#fff"; // Color de texto para la clase seleccionada
var variacionSeleccionada = "celeste"; // Variación de color para la clase seleccionada
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
        <BoxTereCircular variacion={variacionSeleccionada} />
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
              {etiquetas.map(({ label, color, tere }) => (
                <Button
                  key={label}
                  onClick={() => {
                    setSeleccionada(label);
                    variacionSeleccionada = tere;
                  }}
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
                {etiquetas.find((c) => c.label === seleccionada).descripcion}
              </Typography>
            )}
          </Box>
        </Box>
      </Box>

      <br />
      <br />
      <Grid container spacing={4} justifyContent="center">
        {clases.map(({ id, title, description, image }) => (
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
