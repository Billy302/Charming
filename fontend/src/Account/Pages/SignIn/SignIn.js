import style from "./SignIn.module.css";
import {React,useState} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import UnloginNav from "../../../Home/Components/UnloginNav/UnloginNav";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import axios from "axios";


function SignIn() {
// function SignIn(props) {
//   const [user_account, setUserAccount] = useState("");
//   const [user_password, setUserPassword] = useState("");
//   const { auth, setAuth } = props;

//   const login = (e) => {
//     if (user_account !== "" && user_password !== "") {
//       axios
//         .post("http://localhost:3001/signin", {
//           user_account: user_account,
//           user_password: user_password,
//         })
//         .then((res) => {
//           alert("登入成功!");
//           navigate("/home");
//         })
//         .catch((e) => {
//           if (e.response.error) {
//             alert("帳號或密碼錯誤！");
//           }
//         });
//     } else if (user_account === "") {
//       alert("請輸入帳號!");
//     } else {
//       alert("請輸入密碼!");
//     }
//   };
  
//   // useHistory版本已被useNavigate取代
//   const navigate = useNavigate();
  
  // 密碼顯示or隱藏
  const [invisible, setInvisible] = useState(true);
  const invisibleHandler = () => {
    setInvisible(!invisible);
  };

  return (
    <>
      <UnloginNav />
      <main className={style.main}>
        <h1 className={style.h1}>登入</h1>
        <p>用以下帳號繼續</p>
        <div className={style.google}>
          <a href="#">
            <img src={require("../../images/google.png")} alt="google" />
          </a>
        </div>
        {/* <div className="google">
          <a href="#">
          <img src={require('../images/facebook.png')} />
          </a>
        </div> */}

        <hr className={style.hr} />
        <p>或用柴米帳號</p>

        {/* 登入 */}
        <form method="post" action="http://localhost:3001/Account/signin" className={style.form}>
          <label htmlFor="username">帳號</label>
          <input id="username" type="text" name="user_account" />
           <label htmlFor='password'>密碼</label>
          <div className={style.password}>
            {/* 顯示/隱藏 密碼眼睛切換 text/password input type切換 */}
          {invisible &&  <FaEyeSlash onClick={invisibleHandler} />}
           {!invisible &&  <FaEye onClick={invisibleHandler} />}
          </div>
          <input type={invisible? 'password' : 'text'} id="password" className={style.passwordShow} name="user_password"/>

          <Link to="/signin/identify" className={style.forget}>忘記密碼</Link>
        <button typeof="submit" className={style.button}>登入
        </button>
        </form>
            {/* onClick={() => {
              setAuth(!auth);
  
              alert("登入成功");
  
              navigate("/account");
            }}
          {auth ? "登出" : "登入"} */}

        <p>
          還不是會員嗎? <Link to="/signup">立即註冊</Link>
        </p>
      </main>
    </>
  );
}

export default SignIn;
