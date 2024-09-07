import React from "react";
import "./App.css";
import { CartContext } from "./Components/CartContext";
import MainLayout from "./pages/MainLayout/MainLayout";

const App = () => {
  return (
    <div>
      <CartContext>
        <MainLayout />
      </CartContext>
    </div>
  );
};

export default App;
