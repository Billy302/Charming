import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

//component
import Footer from "./Home/Components/Footer/Footer";

//首頁
import LoginHome from "./Home/Pages/LoginHome/LoginHome";
import UnloginHome from "./Home/Pages/UnloginHome/UnloginHome";

//購物車頁
import Cart1 from "./Sales/Pages/Cart_1";
import Cart2 from "./Sales/Pages/Cart_2";
import Cart3 from "./Sales/Pages/Cart_3";
import Cart4 from "./Sales/Pages/Cart_4";
import EditProduct from "./Sales/Pages/EditProduct";
import MySale from "./Sales/Pages/MySale";
import Order from "./Sales/Pages/Order";
import OrderList from "./Sales/Pages/OrderList";

//討論區


function App() {
  return (
    <div>
      <Routes>
        <Route path="/LoginHome" element={<LoginHome />} />
        <Route path="/UnloginHome" element={<UnloginHome />} />
        <Route path="/Login" element={<LoginHome />} />
        <Route path="/LoginHome" element={<LoginHome />} />
        <Route path="/" element={<UnloginHome />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
