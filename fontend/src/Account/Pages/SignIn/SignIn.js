import { React, useEffect, useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
// CSS檔
import style from "./SignIn.module.css";
// navbar
import LoginNav from "../../../Home/Components/LoginNav/LoginNav";
import UnloginNav from "../../../Home/Components/UnloginNav/UnloginNav";
// react-icon
import { FaEyeSlash, FaEye } from "react-icons/fa";
// sweetalert
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function SignIn() {

  // 依auth有無 設定登入或未登入nav
  let now = localStorage.getItem("auth");

  // const [account, setAccount] = useState([]);
  const auth = localStorage.setItem("auth", false);
  
  // 設定導向頁面函式
  const navigate = useNavigate();

  // 設定sweetalert2
  const MySwal = withReactContent(Swal);

  // 登入驗證
  const fetchAccount = async (e) => {
    // 先停止表單送出
    e.preventDefault();
    // 改透過FormData送資料
    const response = await fetch(`http://localhost:3001/Account/signin`, {
      method: "POST",
      body: new FormData(document.getElementById("form1")),
    })
      .then((r) => r.json())
      .then((obj) => {
        // console.log(JSON.stringify(obj))
        // JSON.stringify(obj);
        if (obj == 0) {
          document.getElementById("msg").innerHTML = "帳號或密碼輸入錯誤";
        } else {
          localStorage.setItem("id", obj[0]);
          localStorage.setItem("name", obj[1]);
          localStorage.setItem("auth", true);
          MySwal.fire({
            title: "登入成功!",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          }).then(() => {
            navigate("/Product?page=1");
            // navigate("/Product?page=1");
          });
        }
      });
  };

  // 密碼顯示or隱藏
  const [invisible, setInvisible] = useState(true);
  const invisibleHandler = () => {
    setInvisible(!invisible);
  };

  return (
    <>
      {now == "true" ? <LoginNav /> : <UnloginNav />}
      <main className={style.main}>
        <h1 className={style.h1}>登入</h1>
        {/* <p>柴米帳號</p> */}
        {/* 登入 */}
        <form
          id="form1"
          method="post"
          // action="http://localhost:3001/Account/signin"
          className={style.form}
          onSubmit={fetchAccount}
        >
          <label htmlFor="account">帳號</label>
          <input id="account" type="text" name="account" />
          <label htmlFor="password">密碼</label>
          <div className={style.password}>
            {/* 顯示/隱藏 密碼眼睛切換 text/password input type切換 */}
            {invisible && <FaEyeSlash onClick={invisibleHandler} />}
            {!invisible && <FaEye onClick={invisibleHandler} />}
          </div>
          <input
            type={invisible ? "password" : "text"}
            id="password"
            className={style.passwordShow}
            name="password"
            placeholder="密碼為8碼以上英文或數字"
          />

          <Link to="/signforget" className={style.forget}>
            忘記密碼
          </Link>

          {/* 顯示登入錯誤訊息 */}
          <p className={style.checkMsg} id="msg"></p>
          {/* 登入並導向首頁 */}
          <button typeof="submit" className={style.button}>
            登入
          </button>
        </form>
        <p>
          還不是會員嗎? <Link to="/signup">立即註冊</Link>
        </p>
        <img src={"http://localhost:3000/Account/login.png"} width='400'/>
      </main>
    </>
  );
}

export default SignIn;
