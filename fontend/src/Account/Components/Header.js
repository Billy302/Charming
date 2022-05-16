import React from "react";
// import { Link } from "react-router-dom";

function Header(){

    return(
        <header>
        <nav>
          <img className='logo' src={require('../images/charming_logo.png')} alt="logo"/>
          <a className='navLeft' href="/">柴米 Charming</a> 
          <a className='navRight' href ="/signup">註冊</a>     
          <a className='navRight' href ="/signin">登入</a> 
          <a className='navRight' href ="/signup/info">柴社</a> 
          <a className='navRight' href ="/signin/recover">柴訊</a> 
          <a className='navRight' href="/signin/identify">柴米人</a> 
        </nav>
      </header>
    )
}
export default Header;