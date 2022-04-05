import React from "react";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#0F56B3',
        },
        secondary: {
            main: '#C5DCFA',
        }
    }
});

function Layout(props) {
    return <ThemeProvider theme={theme} >
      {props.children}
  </ThemeProvider>;
}

export default Layout;
