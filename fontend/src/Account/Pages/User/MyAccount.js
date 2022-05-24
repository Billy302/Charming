import React from "react";
import style from "./User.module.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import LoginNav from "../../../Home/Components/LoginNav/LoginNav";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";

function MyAccount(props) {
  const location = useLocation();
  console.log(location);

  const { auth } = props;

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
        <Link to="/notice" className={style.unactive}>
          我的通知 <hr />
        </Link>
      </nav>

      {/* 右側內文 */}

      <main className={style.main}>
        <h1 className={style.h1}>基本資料</h1>
        <div className={style.form}>
          <div className={style.item1}>
            <img src={require("../../images/Avatar3.png")} alt="male" />
            <label>Jacky Chen</label>
            {auth ? "已登入" : "尚未登入"}
            <label>會員稱號：</label>
          </div>
          <div className={style.item2}>
            <label>暱稱</label>
            <label>男性</label>
            <label>生日</label>
            <label>E-mail</label>
            <label>連絡電話</label>
            <label>所在地區</label>
          </div>
        </div>
        <div className={style.item3}>
          <button className={style.button}>編輯</button>
        </div>
      </main>

      {/* 左側選單 */}
      <aside className={style.aside}>
        <ul className={style.ul}>
          <li>
            <Link to="/account">基本資料</Link>
          </li>
          <li>
            <Link to="/notice/setting">通知設定</Link>
          </li>
        </ul>
      </aside>
      <div className={style.clear}></div>
    </>
  );
}

export default MyAccount;
