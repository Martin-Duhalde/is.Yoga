// components/clases/ListarPosturas.jsx
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

export default function ListarPosturas({ posturas, onAdd }) {
  return (
    <Box>
      {posturas.map((p) => (
        <Card
          key={p.id}
          sx={{
            mb: 2,
            display: "flex",
            alignItems: "center",
            gap: 2,
            p: 1,
          }}
        >
          <CardMedia
            component="img"
            image={p.image}
            alt={p.title}
            sx={{ width: 60, height: 60, borderRadius: "50%" }}
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography variant="body1">{p.title}</Typography>
          </CardContent>
          <Button variant="outlined" onClick={() => onAdd(p)}>
            Agregar
          </Button>
        </Card>
      ))}
    </Box>
  );
}
