import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LayoutComponent } from "./components/layout/LayoutComponent";
import theme from "./styles/theme";
import { ThemeProvider } from "@mui/material";
import Form from "./components/layout/common/Form";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        {/* <LayoutComponent /> */}
        {/* <BasicTextFields /> */}
        <Routes>
          <Route path="/" element={<LayoutComponent />} />
          <Route path="/login" element={<Form title_="Login" />} />
          <Route path="/register" element={<Form title_="Register" />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
