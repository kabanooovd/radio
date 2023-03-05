import React from "react";
import ReactDOM from 'react-dom';
import { ThemeProvider } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Root } from "./Root";
import { theme } from "./theme";
import { GlobalStyles } from "./global-styles";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Root />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)