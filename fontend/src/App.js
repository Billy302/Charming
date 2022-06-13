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

// 會員
// import SignInIdentify from './Account/Pages/SignInIdentify/SignInIdentify'
// import SignInRecover from './Account/Pages/SignInRecover/SignInRecover'
import SignUp from './Account/Pages/SignUp/SignUp'
import SignIn from './Account/Pages/SignIn/SignIn'
import SingForget from './Account/Pages/SignForget/SignForget'
import SignUpdate from './Account/Pages/SignUpdate/SignUpdate'

// 會員中心
import MyShoppingList from './Account/Pages/User/MyShoppingList'
import MyCollection from './Account/Pages/User/MyCollection'
import MyAccount from './Account/Pages/User/MyAccount'

// 部落格
import Blog from './Blog/Page/Blog'
import Article from './Blog/Page/Article'
import Search from './Blog/Page/Search'
import MyProductHeader from './Blog/Page/MyProduct'
import Author from './Blog/Page/Author'
import ArticleSearch from './Blog/Components/ArticleSearch/ArticleSearch'


function App() {
  document.title = `Charming`
  return (
    <div>
      <Routes>
        {/* -------- 首頁 -------- */}
        {/* 首頁 */}
        <Route path="/" element={<UnloginHome />} />
        {/* 商品總覽頁 */}
        {/* http://localhost:3000/Product?page=1&order=sell_count&sort=desc */}
        <Route path="/Product" element={<LoginHome />} />
        {/* 商品詳細頁 */}
        {/* http://localhost:3000/Product/13 */}
        <Route path="/Product/:ProductID" element={<ProductPage />} />

        {/* --------商品頁面-------- */}
        <Route path="Sales/Cart1" element={<Cart1 />} />
        <Route path="Sales/Cart2" element={<Cart2 />} />
        <Route path="Sales/Cart3" element={<Cart3 />} />
        <Route path="Sales/Cart4" element={<Cart4 />} />

        {/* -------- 會員 -------- */}
        {/* 註冊 */}
        {/* http://localhost:3000/signup */}
        <Route path="/signup" element={<SignUp />} />
        {/* 登入 */}
        {/* http://localhost:3000/signin */}
        <Route path="/signin" element={<SignIn />} />
        {/* 忘記密碼 */}
        {/* http://localhost:3000/signforget */}
        <Route path="/signforget" element={<SingForget />} />
        {/* 更新密碼 */}
        {/* http://localhost:3000/signupdate */}
        <Route path="/signupdate" element={<SignUpdate />} />

        {/* 會員中心 */}
        {/* 會員資料 */}
        {/* http://localhost:3000/account */}
        <Route path="/membercenter/account" element={<MyAccount />} />
        {/* 我的收藏 */}
        {/* http://localhost:3000/collection?page=1 */}
        <Route path="/membercenter/collection" element={<MyCollection />} />
        {/* 購買清單 */}
        {/* http://localhost:3000/shoppinglist?page=1 */}
        <Route path="/membercenter/shoppinglist" element={<MyShoppingList />} />
        {/* 購買清單詳細 */}
        {/* http://localhost:3000/shoppinglist/10 */}
        <Route path="/membercenter/shoppinglist/:id" element={<Order />} />

        {/* 賣家中心 */}
        {/* http://localhost:3000/ */}
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

        {/* -------部落格開始------- */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/article/:id" element={<Article />} />
        <Route path="/blog/search/:category" element={<Search />} />
        <Route path="/blog/myproduct" element={<MyProductHeader />} />
        <Route path="/blog/author/:id" element={<Author />} />
        <Route path="/blog/keyword/search" element={<ArticleSearch />} />
      </Routes>
      <Footer />
      <PhoneFooter />
    </div>
  )
}

export default App
