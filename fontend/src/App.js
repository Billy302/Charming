import React from "react";
import "./App.css";
import Footer from "./Home/Components/Footer/Footer";
import Blog from "./Blog/Pages/Blog";
import Communication from "./Home/Pages/Communication";
import Users from "./Home/Pages/Users";
import LoginHome from "./Home/Pages/LoginHome/LoginHome";
import Portfolio from "./Home/Pages/Portfolio";
import Product from "./Home/Pages/Product/Product";
import ShoppingCar from "./Home/Pages/ShoppingCar";
import UnloginHome from "./Home/Pages/UnloginHome/UnloginHome";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/Blog" element={<Blog />} />
        <Route path="/LoginHome" element={<LoginHome />} />
        <Route path="/Communication" element={<Communication />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/UnloginHome" element={<UnloginHome />} />
        <Route path="/Login" element={<LoginHome />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/LoginHome" element={<LoginHome />} />
        <Route path="/ShoppingCar" element={<ShoppingCar />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/" element={<UnloginHome />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
