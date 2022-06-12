import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'

//component
import Footer from './Home/Components/Footer/Footer'
import PhoneFooter from './Home/Components/PhoneFooter/PhoneFooter'

//首頁
import LoginHome from './Home/Pages/LoginHome/LoginHome'
import UnloginHome from './Home/Pages/UnloginHome/UnloginHome'
import MyProduct from './Home/Pages/MyProduct/MyProduct'
import EditProductPage from './Home/Pages/EditProductPage/EditProductPage'
import AddProduct from './Home/Pages/AddProduct/AddProduct'
import ProductPage from './Home/Pages/ProductPage/ProductPage'
import ProductPageEditButton from './Home/Pages/ProductPageEditButton/ProductPageEditButton'
import MyLikeProduct from './Home/Components/MyLikeProduct/MyLikeProduct'

//購物車頁
import Cart1 from './Sales/Pages/Cart/Cart1'
import Cart2 from './Sales/Pages/Cart/Cart2'
import Cart3 from './Sales/Pages/Cart/Cart3'
import Cart4 from './Sales/Pages/Cart/Cart4'
import MySale from './Sales/Pages/Order/MySale'
import Order from './Sales/Pages/Order/Order'
import OrderList from './Sales/Pages/Order/OrderList'

// 會員
import SignInIdentify from './Account/Pages/SignInIdentify/SignInIdentify'
import SignInRecover from './Account/Pages/SignInRecover/SignInRecover'
import SignUp from './Account/Pages/SignUp/SignUp'
import SignIn from './Account/Pages/SignIn/SignIn'
import MyShoppingList from './Account/Pages/User/MyShoppingList'
import MyCollection from './Account/Pages/User/MyCollection'
import MyAccount from './Account/Pages/User/MyAccount'
import SingForget from './Account/Pages/SignForget/SignForget'
import SignUpdate from './Account/Pages/SignUpdate/SignUpdate'

//討論區
// 部落格
import Blog from './Blog/Page/Blog'
import Article from './Blog/Page/Article'
import Search from './Blog/Page/Search'
import MyProductHeader from './Blog/Page/MyProduct'


function App() {
  document.title = `Charming`
  return (
    <div>
      <Routes>
        {/* --------首頁------- */}
        <Route path="/" element={<UnloginHome />} />
        {/* 商品總覽頁 */}
        {/* http://localhost:3000/Product?page=1&order=sell_count&sort=desc */}
        <Route path="/Product" element={<LoginHome />} />
        {/* http://localhost:3000/Product/13 */}
        <Route path="/Product/:ProductID" element={<ProductPage />} />
        {/* http://localhost:3000/MyProduct?page=1 */}
        <Route path="/MyProduct" element={<MyProduct />} />
        {/* http://localhost:3000/MyProduct/19 */}
        <Route
          path="/MyProduct/:ProductID"
          element={<ProductPageEditButton />}
        />
        <Route
          path="/MyProduct/EditProduct/:ProductID"
          element={<EditProductPage />}
        />
        {/* http://localhost:3000/MyProduct/AddProduct */}
        <Route path="/MyProduct/AddProduct" element={<AddProduct />} />

        {/* --------商品頁面-------- */}
        <Route path="Sales/Cart1" element={<Cart1 />} />
        <Route path="Sales/Cart2" element={<Cart2 />} />
        <Route path="Sales/Cart3" element={<Cart3 />} />
        <Route path="Sales/Cart4" element={<Cart4 />} />

        <Route path="BtocPage/MySale" element={<MySale />} />

        {/* --------註冊及登入----- */}
        {/* 忘記密碼 */}
        <Route path="/signin/identify" element={<SignInIdentify />} />
        <Route path="/signin/recover" element={<SignInRecover />} />
        {/* 註冊 */}
        <Route path="/signup" element={<SignUp />} />
        {/* 登入 */}
        <Route path="/signin" element={<SignIn />} />
        {/* 忘記密碼 */}
        {/* http://localhost:3000/signforget */}
        <Route path="/signforget" element={<SingForget />} />
        {/* http://localhost:3000/signupdate */}
        <Route path="/signupdate" element={<SignUpdate />} />
        {/* -------user 登入後頁面------- */}
        {/* http://localhost:3000/shoppinglist?page=1 */}
        <Route path="/shoppinglist" element={<MyShoppingList />} />
        {/*購買詳細 http://localhost:3000/shoppinglist/10 */}
        <Route path="/shoppinglist/:id" element={<Order />} />
        {/* http://localhost:3000/collection?page=1 */}
        <Route path="/collection" element={<MyCollection />} />
        <Route path="/account" element={<MyAccount />} />
        <Route path="/collection/MyLikeProduct" element={<MyLikeProduct />} />

        {/* -------部落格開始------- */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/article/:id" element={<Article />} />
        <Route path="/blog/search/:category" element={<Search />} />
        <Route path="/blog/myproduct" element={<MyProductHeader />} />
        {/* 部落格結束 */}
      </Routes>
      <Footer />
      <PhoneFooter />
    </div>
  )
}

export default App
