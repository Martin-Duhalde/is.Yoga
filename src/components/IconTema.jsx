// componentes/IconTema.jsx
import { IconButton } from "@mui/material"; // Importación de Material UI y componentes relacionados con la UI

import {
  Brightness4 as Brightness4Icon,
  Brightness7 as Brightness7Icon,
} from "@mui/icons-material"; // Importación de íconos
import Brightness2Icon from "@mui/icons-material/Brightness2";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function IconTema({ toggleColorMode, mode }) {
  //const [mode, setMode] = useState("dark");
  // const toggleColorMode = () => {
  //   setMode((prev) => (prev === "light" ? "dark" : "light"));
  // };
  // const theme = useMemo(() => themeOptions(mode), [mode]);
  return (
    <IconButton
      onClick={toggleColorMode}
      color="inherit"
      size="large"
      sx={{ float: "right" }}
    >
      {mode === "dark" ? <Brightness2Icon /> : <LightModeIcon />}
    </IconButton>
  );
}
