import { createTheme, ThemeOptions } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
      contrastText: "#fff",
    },
    secondary: {
      main: "#444",
      contrastText: "#fff",
    },
  },
} as ThemeOptions);
