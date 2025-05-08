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
      error: {
        ///  FD7745 FF7043 FF8A65
        //main: "#FFA726", // naranja suave (puede usar otro hex si querés)
        main: "#FF8A65", // naranja suave (puede usar otro hex si querés)
      },
    },
  });
