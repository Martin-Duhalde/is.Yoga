import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import BoxTereCircular from "../components/BoxTereCircular";

import { listaPosturas } from "../data/listaPosturas";

export default function Posturas() {
  return (
    <Container sx={{ mt: 4, mb: 8 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // vertical en mobile, horizontal en desktop
          alignItems: "center",
          gap: 4,
        }}
      >
        <BoxTereCircular variacion="griscolor" />
        <Box>
          <Typography variant="h3" gutterBottom>
            Posturas
          </Typography>
          <Typography variant="body1">
            Descubrí las posturas más practicadas en yoga, su propósito y los
            beneficios que aportan a nivel físico, mental y energético.
          </Typography>
        </Box>
      </Box>

      <Box display="flex" flexDirection="column" gap={4} mt={4}>
        {listaPosturas.map((postura) => (
          <Card
            key={postura.nombre}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              boxShadow: 3,
            }}
          >
            <CardMedia
              component="img"
              image={`/posturas/${postura.archivo}`}
              alt={postura.nombre}
              sx={{ width: { xs: "100%", sm: 240 }, objectFit: "cover" }}
            />
            <CardContent>
              <Typography variant="h5">{postura.nombre}</Typography>
              <Typography variant="body2" color="text.secondary">
                {postura.descripcion}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
}
