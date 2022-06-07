import React, { useState, useEffect } from "react";
import style from "./User.module.css";
import { useNavigate, Link } from "react-router-dom";
import LoginNav from "../../../Home/Components/LoginNav/LoginNav";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";

function MyAccount() {
  // 設定導向頁面函式
  const navigate = useNavigate();

  // 登入狀態驗證
  const auth = JSON.parse(localStorage.getItem("auth"));
  console.log(auth);
  if (auth === false) {
    alert("您尚未登入");
    navigate("/signin");
  } else {
  }

  const storageMemory = localStorage.getItem("id");
  console.log(storageMemory);

  // 獲得會員id=1的資料
  const [account, setAccount] = useState([]);

  const fetchAccount = async () => {
    const response = await fetch(
      `http://localhost:3001/Account/users?userId=${storageMemory}`
    );
    const data = await response.json();
    setAccount(data[0]);
    console.log(data[0]);
  };
  useEffect(() => {
    fetchAccount();
  }, []);

  // const { auth } = props;
  console.log(account);
  const {
    avatar,
    birthday,
    city,
    email,
    gender,
    id,
    join_at,
    mobile,
    nickname,
    user_account,
    user_password,
    username,
  } = account;

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
            <h3>{username}</h3>
            <label>會員稱號：柴米榜達人</label>
          </div>

          <div className={style.item2}>
            <label>暱稱：無</label>
            <label>性別：{gender}</label>
            <label>生日：{birthday}</label>
            <label>E-mail：{email}</label>
            <label>連絡電話：0{mobile}</label>
            <label>所在地區：{city}</label>
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
