import React from "react";
import { Route, Routes as RouterRoutes } from "react-router-dom";
import { ProductProvider } from "../Components/GenerateProducts";
import CartDetails from "../pages/CartDetails/CartDetails";
import MainContentPage from "../pages/MainContentPage/MainContentPage";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import SignUpPage from "../pages/SignupPage/SignUpPage";

const AppRoutes = () => {
  return (
    <ProductProvider>
      <RouterRoutes>
        {/* <Route path="/" element={<LoginPage />} /> */}
        <Route path="/signup" element={<SignUpPage />} />
        {/* <Route path="/mainlayout" element={<MainLayout />} /> */}
        <Route path="/products-page" element={<ProductsPage />} />
        <Route path="/" element={<MainContentPage />} />
        <Route
          path="/product-details/:productId"
          element={<ProductDetails />}
        />
        <Route path="/cart-details" element={<CartDetails />} />
      </RouterRoutes>
    </ProductProvider>
  );
};

export default AppRoutes;
