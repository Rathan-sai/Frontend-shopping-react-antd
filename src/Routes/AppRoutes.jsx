import React from "react";
import { Route, Routes as RouterRoutes } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import MainLayout from "../pages/MainLayout/MainLayout";
import SignUpPage from "../pages/SignupPage/SignUpPage";

const AppRoutes = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/mainlayout" element={<MainLayout />} />
    </RouterRoutes>
  );
};

export default AppRoutes;
