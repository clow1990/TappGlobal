import "@/App.css";

import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AuthScreen from "@/screen/Auth/AuthScreen";
import HomeScreen from "@/screen/HomeDesign/HomeScreen";
import BasicEditScreen from "./screen/Auth/BasicEditScreen";
import LoginScreen from "./screen/Auth/LoginScreen";
import SignUpScreen from "./screen/Auth/SignUpScreen";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthScreen />} />
        <Route path="/signup" element={<SignUpScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/basicedit" element={<BasicEditScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
