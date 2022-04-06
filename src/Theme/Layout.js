import React from "react";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#0E0E0E",
      blue: "#2B4C76",
    },
    secondary: {
      main: "#FFFF",
    },
  },
});

function Layout(props) {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}

export default Layout;
