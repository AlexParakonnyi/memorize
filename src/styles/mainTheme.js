import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#2196F3",
    },
    secondary: {
      main: "#FF4081",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  breakpoints: {
    values: {
      xs: "350px",
      sm: "600px",
      md: "960px",
      lg: "1280px",
      xl: "1920px",
    },
  },
});
