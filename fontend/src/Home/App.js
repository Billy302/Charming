import React from "react";
import './App.css';
import Footer from './components/footer/Footer';
import Blog from "./pages/Blog";
import Communication from "./pages/Communication";
import Login from "./pages/Login";
import Users from "./pages/Users";
import LoginHome from "./pages/loginHome/LoginHome";
import Portfolio from "./pages/Portfolio";
import Product from "./pages/Product"
import ProductDetail from "./pages/ProductDetail"
import ShoppingCar from "./pages/ShoppingCar"
import UnloginHome from "./pages/unloginHome/UnloginHome"
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom"

function App() {
  return (
    <div className={App}>
      <Router>
        <Switch>
          <Route path="/Blog">
            <Blog />
          </Route>
          <Route path="/LoginHome">
            <LoginHome />
          </Route>
          <Route path="/Communication">
            <Communication />
          </Route>
          <Route path="/Product">
            <Product />
          </Route>
          <Route path="/UnloginHome">
            <UnloginHome />
          </Route>
          <Route path="/Portfolio">
            <Portfolio />
          </Route>
          <Route path="/Login">
            <LoginHome />
          </Route>
          <Route path="/LoginHome">
            <LoginHome />
          </Route>
          <Route path="/ShoppingCar">
            <ShoppingCar />
          </Route>
          <Route path="/Users">
            <Users />
          </Route>
          <Route exact path="/">
            <UnloginHome />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
