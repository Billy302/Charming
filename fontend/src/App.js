import React from "react";
import './App.css';
import Footer from './Home/components/footer/Footer';
import Blog from "./Home/pages/Blog";
import Communication from "./Home/pages/Communication";
import Users from "./Home/pages/Users";
import LoginHome from "./Home/pages/loginHome/LoginHome";
import Portfolio from "./Home/pages/Portfolio";
// import Product from "./Home/pages/Product"
import Product from "./Sales/Pages/Product";
import ShoppingCar from "./Home/pages/ShoppingCar"
import UnloginHome from "./Home/pages/unloginHome/UnloginHome"
import { BrowserRouter as Router, Route,  Switch} from "react-router-dom"

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
