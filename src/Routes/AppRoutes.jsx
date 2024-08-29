import React from "react";
import { Route, Routes as RouterRoutes } from "react-router-dom";
import MainContentPage from "../pages/MainContentPage/MainContentPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import SignUpPage from "../pages/SignupPage/SignUpPage";

const AppRoutes = () => {
  return (
    <RouterRoutes>
      {/* <Route path="/" element={<LoginPage />} /> */}
      <Route path="/signup" element={<SignUpPage />} />
      {/* <Route path="/mainlayout" element={<MainLayout />} /> */}
      <Route path="/products-page" element={<ProductsPage />} />
      <Route path="/" element={<MainContentPage />} />
    </RouterRoutes>
  );
};

export default AppRoutes;
