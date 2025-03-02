import * as React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function Copyright() {
  return (
    <Typography
      variant="body2"
      align="center"
      sx={{
        color: "text.secondary",
        mt: 3,
      }}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mikeholmmusic.com/">
        Mike Holm
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}
