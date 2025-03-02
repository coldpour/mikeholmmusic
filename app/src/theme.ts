import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: "dark",
    error: {
      main: red.A400,
    },
  },
  typography: {
    h1: {
      fontSize: "4.65rem",
    },
  },
});

export default theme;
