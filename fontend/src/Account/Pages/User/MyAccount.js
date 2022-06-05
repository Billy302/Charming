import React, { useState, useEffect } from "react";
import style from "./User.module.css";
import { Link } from "react-router-dom";
import LoginNav from "../../../Home/Components/LoginNav/LoginNav";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";

function MyAccount() {
  
  // 獲得會員id=1的資料
  const [account, setAccount] = useState([]);

  const fetchAccount = async () => {
    const response = await fetch(`http://localhost:3001/Account/users/1`);
    const data = await response.json();
    setAccount(data[0]);
    // console.log(data[0]);
  };
  useEffect(() => {
    fetchAccount();
  }, []);

  // const { auth } = props;

  return (
    <>
      <LoginNav />
      <BreadCrumb />
      {/* 上方選單 */}
      <nav className={style.navLeft}>
        <Link to="/account" className={style.active}>
          會員中心 <hr />
        </Link>
        <Link to="/shoppinglist" className={style.unactive}>
          購買清單 <hr />
        </Link>
        <Link to="/collection" className={style.unactive}>
          我的收藏 <hr />
        </Link>
      </nav>

      {/* 右側內文 */}

      <main className={style.main}>
        <h1 className={style.h1}>基本資料</h1>
        <div className={style.form}>
          <div className={style.item1}>
            <img src={require("../../images/Avatar3.png")} alt="male" />
            <label>{account["user_name"]}</label>
            {/* {auth ? "已登入" : "尚未登入"} */}
            <label>會員稱號：</label>
          </div>

          <div className={style.item2}>
            <label>暱稱</label>
            <label>男性</label>
            {account["gender"]}
            <label>生日</label>
            {account["birthday"]}
            <label>E-mail</label>
            {account["email"]}
            <label>連絡電話</label>
            {account["mobile"]}
            <label>所在地區</label>
            {account["city"]}
          </div>
        </div>
        <div className={style.item3}>
          <button className={style.button}>編輯</button>
        </div>
      </main>
    </>
  );
}

export default MyAccount;
