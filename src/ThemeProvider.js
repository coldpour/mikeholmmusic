/** @jsxImportSource @emotion/react */
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { cerulean } from "./colors";

const theme = {
  colors: {
    primary: cerulean,
    secondary: "#fff",
  },
  shadow: [
    "none",
    "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
    "",
    "0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12)",
  ],
  square: (size) => `width: ${size}; height: ${size};`,
};

const ThemeProvider = (props) => (
  <EmotionThemeProvider theme={theme} {...props} />
);

export default ThemeProvider;
