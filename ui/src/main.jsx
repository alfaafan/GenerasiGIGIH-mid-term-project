import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material";
import { LoadingProvider } from "./context/LoadingContext.jsx";

const darkTheme = createTheme({ palette: { mode: "dark" } });
const lightTheme = createTheme({ palette: { mode: "light" } });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <LoadingProvider>
        <App />
      </LoadingProvider>
    </ThemeProvider>
  </React.StrictMode>
);
