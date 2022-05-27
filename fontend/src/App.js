import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

//component
import Footer from "./Home/Components/Footer/Footer";
import PhoneFooter from "./Home/Components/PhoneFooter/PhoneFooter";

//首頁
import LoginHome from "./Home/Pages/LoginHome/LoginHome";
import UnloginHome from "./Home/Pages/UnloginHome/UnloginHome";
import MyProduct from "./Home/Pages/MyProduct/MyProduct";

//會員
//Pages
import SignInIdentify from "./Account/Pages/SignInIdentify/SignInIdentify";
import SignInRecover from "./Account/Pages/SignInRecover/SignInRecover";
import SignUpInfo from "./Account/Pages/SignUpInfo/SignUpInfo";
import SignUp from "./Account/Pages/SignUp/SignUp";
import SignIn from "./Account/Pages/SignIn/SignIn";

//Pages user
import MyShoppingList from "./Account/Pages/User/MyShoppingList";
import NoticeSetting from "./Account/Pages/User/NoticeSetting";
import MyCollection from "./Account/Pages/User/MyCollection";
import MyAccount from "./Account/Pages/User/MyAccount";
import MyNotice from "./Account/Pages/User/MyNotice";

//購物車頁
import Cart1 from "./Sales/Pages/Cart/Cart1";
import Cart2 from "./Sales/Pages/Cart/Cart2";
import Cart3 from "./Sales/Pages/Cart/Cart3";
import Cart4 from "./Sales/Pages/Cart/Cart4";
import MySale from "./Sales/Pages/Order/MySale";
import Order from "./Sales/Pages/Order/Order";
import OrderList from "./Sales/Pages/Order/OrderList";

//討論區
import Forum from './Forum/Pages/Forum';
// import ReplyQone from './Forum/Pages/ReplyQone'
// import ReplyQtwo from './Forum/Pages/ReplyQtwo'
// import ArtShow from './Forum/Pages/ArtShow'


function App() {
  return (
    <div>
      <Routes>
        {/* --------首頁------- */}
        <Route path="/LoginHome" element={<LoginHome />} />
        <Route path="/UnloginHome" element={<UnloginHome />} />
        <Route path="/Login" element={<LoginHome />} />
        <Route path="/LoginHome" element={<LoginHome />} />
        <Route path="/MyProduct" element={<MyProduct />} />
        <Route path="/" element={<UnloginHome />} />

        {/* --------註冊及登入----- */}
        {/* 忘記密碼 */}
        <Route path="/signin/identify" element={<SignInIdentify />} />
        <Route path="/signin/recover" element={<SignInRecover />} />
        {/* 基本資料 */}
        <Route path="/signup/info" element={<SignUpInfo />} />

        {/* 註冊 */}
        <Route path="/signup" element={<SignUp />} />
        {/* 登入 */}
        <Route path="/signin" element={<SignIn />} />

        {/* -------user 登入後頁面------- */}
        <Route path="/shoppinglist" element={<MyShoppingList />} />
        <Route path="/notice/setting" element={<NoticeSetting />} />
        <Route path="/collection" element={<MyCollection />} />
        <Route path="/account" element={<MyAccount />} />
        <Route path="/notice" element={<MyNotice />} />

        {/* --------商品頁面-------- */}
        <Route path="/Cart1" element={<Cart1 />} />
        <Route path="/Cart2" element={<Cart2 />} />
        <Route path="/Cart3" element={<Cart3 />} />
        <Route path="/Cart4" element={<Cart4 />} />

        <Route path="/MySale" element={<MySale />} />
        <Route path="/Order" element={<Order />} />
        <Route path="/OrderList" element={<OrderList />} />

        {/* 討論區 */}
        <Route path="/Forum" element={<Forum />} />
        {/* 
        <Route path="/ReplyQone" element={<ReplyQone />} />
        <Route path="/ReplyQtwo" element={<ReplyQtwo />} />
        <Route path="/ArtShow" element={<ArtShow />} /> */}
        {/* 討論區結束 */}

      </Routes>
      <Footer />
      <PhoneFooter />
    </div>
  );
}

export default App;
