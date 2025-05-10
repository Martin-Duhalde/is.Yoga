// Perfil.jsx
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import {
  Avatar,
  Button,
  Typography,
  Box,
  TextField,
  Stack,
} from "@mui/material";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

export default function Perfil() {
  const { user, logout } = useAuth();
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(user?.avatarUrl || "");
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  // Esta función obtiene el avatar del servicio.
  const fetchAvatar = async () => {
    try {
      const response = await fetch("https://localhost:7060/api/Avatars", {
        method: "GET",
        credentials: "include", // Asegúrate de enviar las cookies si las usas
      });

      if (response.ok) {
        // const data = await response.json();
        // setPreview(data.avatarUrl); // Asignamos la URL del avatar

        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setPreview(url);
      } else {
        console.error("Error al obtener el avatar");
        //alert("Error al obtener avatar");
      }
    } catch (error) {
      console.error("Error al obtener el avatar:", error);
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    if (selectedFile) {
      setPreview(URL.createObjectURL(selectedFile));
    }
  };
  const handleUpload = async () => {
    if (!file) {
      alert("Selecciona un archivo antes de subir.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file); // ⚠️ el nombre debe coincidir con el del DTO: "File" o "file"

    try {
      const response = await fetch("https://localhost:7060/api/Avatars", {
        method: "POST",
        credentials: "include", // Necesario si usás autenticación con cookies
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setPreview(data.avatarUrl); // Muestra el nuevo avatar
        alert("Avatar actualizado correctamente.");
      } else if (response.status === 400) {
        const errorText = await response.text();
        alert(`Error al subir avatar: ${errorText}`);
      } else {
        alert("Error al subir avatar.");
      }
    } catch (error) {
      console.error("Error de red al subir avatar:", error);
      alert("Error de red al subir avatar.");
    }
  };

  // const handleUpload = async () => {
  //   if (!file) return;

  //   const formData = new FormData();
  //   formData.append("avatar", file);
  //   console.debug("formData=", formData);

  //   /// post en [api/avatars] sube directamente la imagen del usuario activo
  //   const response = await fetch("https://localhost:7060/api/Avatars", {
  //     method: "POST",
  //     credentials: "include", // 🔐 Esto es CLAVE > ver también >  fetch("https://localhost:7060/api/Auth/login"
  //     body: formData,
  //   });

  //   if (response.ok) {
  //     const data = await response.json();
  //     setPreview(data.avatarUrl);
  //     alert("Avatar actualizado");
  //   } else {
  //     alert("Error al subir avatar");
  //   }
  // };

  // Llamamos a fetchAvatar cuando el componente se monta
  useEffect(() => {
    fetchAvatar();
    // if (user?.avatarUrl) {
    //   setPreview(user.avatarUrl); // Si ya hay un avatar en el usuario, lo ponemos en el estado
    // } else {
    //   fetchAvatar(); // Si no, lo obtenemos del servicio
    // }
  }, [user]);

  // Función para manejar el logout
  const handleLogout = async () => {
    try {
      await logout();
      enqueueSnackbar("Sesión cerrada con éxito", { variant: "success" });
      navigate("/login"); // Redirigir al login
    } catch (error) {
      console.error(error);
      enqueueSnackbar("Error al cerrar sesión", { variant: "error" });
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", textAlign: "center", mt: 4 }}>
      {/* <Avatar
        src={preview}
        sx={{ width: 120, height: 120, mx: "auto", mb: 2 }}
      /> */}
      <Typography variant="h4" gutterBottom>
        Perfil
      </Typography>
      <Avatar
        src={preview}
        sx={{ width: 120, height: 120, mx: "auto", mb: 2 }}
      />
      <Typography variant="body1">Usuario: {user?.userName}</Typography>
      <Typography variant="body2" color="text.secondary">
        Email: {user?.email}
      </Typography>
      <Stack direction="column" spacing={2} mt={2}>
        <Button variant="contained" component="label">
          Elegir Avatar
          <input
            hidden
            accept="image/*"
            type="file"
            onChange={handleFileChange}
          />
        </Button>
        <Button variant="outlined" onClick={handleUpload} disabled={!file}>
          Subir Avatar
        </Button>
        <Button variant="outlined" onClick={handleLogout} color="error">
          Cerrar sesión
        </Button>
      </Stack>
    </Box>
  );
}
