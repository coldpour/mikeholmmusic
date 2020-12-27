/** @jsxImportSource @emotion/react */
import ThemeProvider from "./ThemeProvider";

const AppProviders = ({ children }) => (
  <ThemeProvider>{children}</ThemeProvider>
);

export default AppProviders;
