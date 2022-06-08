import React, { useState, useEffect } from "react";
import style from "./User.module.css";
import { useNavigate, Link } from "react-router-dom";
import LoginNav from "../../../Home/Components/LoginNav/LoginNav";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function MyAccount() {
  // 設定導向頁面函式
  const navigate = useNavigate();

  // 設定sweetalert2
  const MySwal = withReactContent(Swal);

  // // 登入狀態驗證
  // const auth = JSON.parse(localStorage.getItem("auth"));
  // console.log(auth);
  // if (auth === false) {
  //   MySwal.fire({
  //     title:'尚未登入?',
  //     text:'前往登入以獲得資訊',
  //     icon:'question',
  //     showConfirmButton: false,
  //         timer: 1500}
  //   ).then(
  //     () => {
  //       navigate("/signin");
  //     }
  //   );
  //   alert("您尚未登入");
  //   navigate("/signin");
  // } else {
  //   console.log('已登入');
  // }

  const storageMemory = localStorage.getItem("id");
  console.log(storageMemory);

  // 獲得會員id=?的資料,存在account中
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

  console.log(account);
  // 解構accout獲得的值
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

  const logOut = (e) => {
    e.preventDefault();
    MySwal.fire({
      title: "確定要登出嗎?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#795252",
      confirmButtonText: "確定",
      cancelButtonColor: "#d33",
      cancelButtonText: "取消",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('id')
        localStorage.removeItem('name')
        localStorage.setItem('auth',false)
        MySwal.fire({
          title: '登出成功',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500
        }).then(()=>{
          navigate('/UnloginHome')
        })
      }
    })
  };

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
          <button className={style.button} onClick={logOut}>編輯</button>
        </div>
      </main>
    </>
  );
}

export default MyAccount;
