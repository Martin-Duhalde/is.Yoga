// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
// Usamos la ruta absoluta directamente
export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: fs.readFileSync("D:/is/react/material/ssl/localhost-key.pem"), // Ruta absoluta
      cert: fs.readFileSync("D:/is/react/material/ssl/localhost-cert.pem"), // Ruta absoluta
    },
    port: 5173,
    host: "localhost",
  },
});
