import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import { Routes, Route } from 'react-router-dom'
// import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'

//Pages
import Home from './Account/Pages/Home'
import SignIn from './Account/Pages/SignIn'
import SignInIdentify from './Account/Pages/SignInIdentify'
import SignInRecover from './Account/Pages/SignInRecover'
import SignUp from './Account/Pages/SignUp'
import SignUpInfo from './Account/Pages/SignUpInfo'

//Pages user
import MyAccount from './Account/Pages/user/MyAccount'
import MyCollection from './Account/Pages/user/MyCollection'
import MyNotice from './Account/Pages/user/MyNotice'
import MyShoppingList from './Account/Pages/user/MyShoppingList'

//Components
import Header from './Account/Components/Header/Header'
import UserHeader from './Account/Components/UserHeader/UserHeader'
import Footer from './Account/Components/Footer/Footer'
import '../src/Account/Components/MyButton.css'
import { useState } from 'react'
import NoticeSetting from './Account/Pages/user/NoticeSetting'

function App() {
  const [auth, setAuth] = useState(false)

  return (
    <Container>
      {/* <UserHeader /> */}
      <Header />
      <Routes>
        {/* http://localhost:3000/account */}
        <Route path="/account" element={<MyAccount auth={auth} />} />
        {/* http://localhost:3000/signin */}
        <Route
          path="/signin"
          element={<SignIn setAuth={setAuth} auth={auth} />}
        />
        {/* http://localhost:3000 */}
        <Route path="/" element={<Home auth={auth} />} />
        {/* http://localhost:3000/signin/identify */}
        <Route path="/signin/identify" element={<SignInIdentify />} />
        {/* http://localhost:3000/signin/recover */}
        <Route path="/signin/recover" element={<SignInRecover />} />
        {/* http://localhost:3000/signup */}
        <Route path="/signup" element={<SignUp />} />
        {/* http://localhost:3000/signup/info */}
        <Route path="/signup/info" element={<SignUpInfo />} />
        {/* http://localhost:3000/shoppinglist */}
        <Route path="/shoppinglist" element={<MyShoppingList />} />
        {/* http://localhost:3000/collection */}
        <Route path="/collection" element={<MyCollection />} />
        {/* http://localhost:3000/notice */}
        <Route path="/notice" element={<MyNotice />} />
        {/* http://localhost:3000/notice/setting */}
        <Route path="/notice/setting" element={<NoticeSetting />} />
      </Routes>
      <Footer />
    </Container>
  )
}

export default App
