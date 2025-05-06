import { Box } from "@mui/material";

export default function BoxTereCircular({ variacion = "violeta" }) {
  return (
    <Box
      component="img"
      src={`/tere-${variacion}-der.png`}
      alt="Tere"
      sx={{
        width: 200,
        height: 200,
        borderRadius: "50%",
        objectFit: "cover",
        boxShadow: 4,
        transition: "transform 0.5s ease-in-out",
        "&:hover": {
          transform: "scale(1.05) rotate(-2deg)",
        },
      }}
    />
  );
}
