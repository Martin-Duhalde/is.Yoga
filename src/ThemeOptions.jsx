// ThemeOptions.jsx
import { createTheme } from "@mui/material/styles";

export const themeOptions = (mode) =>
  createTheme({
    palette: {
      //mode: "dark",
      mode,
      primary: {
        main: "#8b3fb5",
      },
      secondary: {
        main: "#f50057",
      },
    },
  });
