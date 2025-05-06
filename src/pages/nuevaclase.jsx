// pages/NuevaClase.jsx
import { useState } from "react";
import { useEffect } from "react";
import { Box, TextField, Typography, Grid } from "@mui/material";
import { listaPosturas } from "../data/listaPosturas"; // <- Nombre correcto
import ListarPosturas from "../components/clases/ListarPosturas";
import ClaseEditable from "./ClaseEditable";

export default function NuevaClase() {
  const [busqueda, setBusqueda] = useState("");
  //  const [clase, setClase] = useState([]);
  const [clase, setClase] = useState(() => {
    const guardada = localStorage.getItem("clase");
    return guardada ? JSON.parse(guardada) : [];
  });

  useEffect(() => {
    localStorage.setItem("clase", JSON.stringify(clase));
  }, [clase]);

  // Filtrar y transformar para que tengan las propiedades que esperan los componentes
  const posturasFiltradas = listaPosturas
    .filter(
      (p) =>
        p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        p.descripcion.toLowerCase().includes(busqueda.toLowerCase())
    )
    .map((p) => ({
      id: p.id,
      title: p.nombre,
      image: `/posturas/${p.archivo}`,
      description: p.descripcion,
    }));

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Nueva clase de Yoga
      </Typography>

      <TextField
        fullWidth
        label="Buscar posturas"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        sx={{ mb: 4 }}
      />

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <ListarPosturas
            posturas={posturasFiltradas}
            onAdd={(p) => {
              const nuevaPostura = {
                ...p,
                id: crypto.randomUUID(), // ID único para DnD
                idOriginal: p.id, // Conservamos el ID original de la postura
              };
              setClase([...clase, nuevaPostura]);
            }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <ClaseEditable clase={clase} setClase={setClase} />
        </Grid>
      </Grid>
    </Box>
  );
}
