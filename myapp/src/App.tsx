import React from "react";
import { BrowserRouter } from "react-router-dom";
import { LayoutComponent } from "./components/layout/LayoutComponent";

function App() {
  return (
    <BrowserRouter>
      <LayoutComponent />
    </BrowserRouter>
  );
}

export default App;
