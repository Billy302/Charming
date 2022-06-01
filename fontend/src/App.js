import React, { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'

//component
import Footer from './Home/Components/Footer/Footer'
import PhoneFooter from './Home/Components/PhoneFooter/PhoneFooter'
import Product from './Home/Components/Product/Product'

//首頁
import LoginHome from './Home/Pages/LoginHome/LoginHome'
import UnloginHome from './Home/Pages/UnloginHome/UnloginHome'
import MyProduct from './Home/Pages/MyProduct/MyProduct'
import EditProductPage from './Home/Pages/EditProductPage/EditProductPage'
import AddProduct from './Home/Pages/AddProduct/AddProduct'
import ProductPage from './Home/Pages/ProductPage/ProductPage'
import ProductPageEditButton from './Home/Pages/ProductPageEditButton/ProductPageEditButton'
// import ProductPage2 from "./Home/Pages/ProductPage/ProductPage4"

//購物車頁
import Cart1 from './Sales/Pages/Cart/Cart1'
import Cart2 from './Sales/Pages/Cart/Cart2'
import Cart3 from './Sales/Pages/Cart/Cart3'
import Cart4 from './Sales/Pages/Cart/Cart4'
import MySale from './Sales/Pages/Order/MySale'
import Order from './Sales/Pages/Order/Order'
import OrderList from './Sales/Pages/Order/OrderList'

//討論區

function App() {
  document.title = `Charming`
  return (
    <div>
      <Routes>
        {/* --------首頁------- */}
        <Route path="/" element={<UnloginHome />} />
        {/* 商品總覽頁 */}
        <Route path="/Product/:UserId" element={<LoginHome />} />
        <Route path="/Product/:UserId/:ProductID" element={<ProductPage />} />
        {/* <Route path="/Product/:UserId/:ProductID" element={<ProductPage2 />} /> */}

        <Route path="/MyProduct/:UserId" element={<MyProduct />} />
        <Route
          path="/MyProduct/:UserId/:ProductID"
          element={<ProductPageEditButton />}
        />
        <Route
          path="/MyProduct/EditProductPage"
          element={<EditProductPage />}
        />
        <Route path="/MyProduct/AddProduct" element={<AddProduct />} />
        {/* <Route path="/LoginHome/Product/:UserId" element={<Product />} /> */}

        {/* --------商品頁面-------- */}
        <Route path="Sales/Cart1" element={<Cart1 />} />
        <Route path="Sales/Cart2" element={<Cart2 />} />
        <Route path="Sales/Cart3" element={<Cart3 />} />
        <Route path="Sales/Cart4" element={<Cart4 />} />

        <Route path="BtocPage/MySale" element={<MySale />} />
        <Route path="BtobPage/Order/:id" element={<Order />} />
        <Route path="BtobPage/Order" element={<OrderList />} />
      </Routes>
      <Footer />
      <PhoneFooter />
    </div>
  )
}

export default App
