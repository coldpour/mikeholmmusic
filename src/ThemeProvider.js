/** @jsxImportSource @emotion/react */
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { cerulean } from "./colors";

const theme = {
  colors: {
    primary: cerulean,
  },
};

const ThemeProvider = (props) => (
  <EmotionThemeProvider theme={theme} {...props} />
);

export default ThemeProvider;
