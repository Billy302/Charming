import React from 'react'
import Style from './App.module.css'
import { Route, Routes } from 'react-router-dom'

//component
// import Footer from './Home/Components/footer/Footer'
import Footer from './Home/Components/Footer/Footer'
import PhoneFooter from './Home/Components/PhoneFooter/PhoneFooter'

//首頁
import LoginHome from './Home/Pages/LoginHome/LoginHome'
import UnloginHome from './Home/Pages/UnloginHome/UnloginHome'
import EditProductPage from './Home/Pages/EditProductPage/EditProductPage'
import AddProduct from './Home/Pages/AddProduct/AddProduct'
import ProductPage from './Home/Pages/ProductPage/ProductPage'
import ProductPageEditButton from './Home/Pages/ProductPageEditButton/ProductPageEditButton'

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
import PolicyA from './Account/Pages/PolicyA/PolicyA'
import PolicyB from './Account/Pages/PolicyB/PolicyB'
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
import MyproductLook from './Blog/Page/MyProductLook'
import Author from './Blog/Page/Author'
import ArticleSearch from './Blog/Page/ArticleSearch'

function App() {
  document.title = `Charming`
  return (
    <div>
      <div className={Style.content}>
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
          {/* 使用條款 隱私政策 */}
          {/* http://localhost:3000/signup/policya */}
          <Route path="/signup/policya" element={<PolicyA />} />
          {/* http://localhost:3000/signup/policyb*/}
          <Route path="/signup/policyb" element={<PolicyB />} />

          {/* 會員中心 */}
          {/* 會員資料 */}
          {/* http://localhost:3000/account */}
          <Route path="/membercenter/account" element={<MyAccount />} />
          {/* 我的收藏 */}
          {/* http://localhost:3000/collection?page=1 */}
          <Route path="/membercenter/collection" element={<MyCollection />} />
          {/* 購買清單 */}
          {/* http://localhost:3000/shoppinglist?page=1 */}
          <Route
            path="/membercenter/shoppinglist"
            element={<MyShoppingList />}
          />
          {/* 購買清單詳細 */}
          {/* http://localhost:3000/shoppinglist/10 */}
          <Route path="/membercenter/shoppinglist/:id" element={<Order />} />

          {/* 賣家中心 */}
          {/* 首頁，商品總覽 */}
          {/* http://localhost:3000/shopcenter/myproduct?page=1 */}
          <Route path="/shopcenter/myproduct" element={<MyProductHeader />} />
          <Route path="/shopcenter/myproductLook" element={<MyproductLook />} />
          {/* 商品詳細頁 */}
          {/* http://localhost:3000/shopcenter/19 */}
          <Route
            path="/shopcenter/:ProductID"
            element={<ProductPageEditButton />}
          />
          {/* 新增商品頁 */}
          {/* http://localhost:3000/shopcenter/AddProduct */}
          <Route path="/shopcenter/AddProduct" element={<AddProduct />} />
          {/* 編輯商品頁 */}
          {/* http://localhost:3000/shopcenter/77 */}
          <Route
            path="/shopcenter/EditProduct/:ProductID"
            element={<EditProductPage />}
          />
          {/* 銷售紀錄 */}
          {/* http://localhost:3000/shopcenter/MySale */}
          <Route path="/shopcenter/MySale" element={<MySale />} />

          {/* -------部落格開始------- */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/article/:id" element={<Article />} />
          <Route path="/blog/search/:category" element={<Search />} />

          <Route path="/blog/author/:id" element={<Author />} />
          <Route path="/blog/keyword/search" element={<ArticleSearch />} />
        </Routes>
      </div>
      <Footer />
      <PhoneFooter />
    </div>
  )
}

export default App
