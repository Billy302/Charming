import style from "./SignUp.module.css";
import { React, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthService from "../../Services/auth.service";
import UnloginNav from "../../../Home/Components/UnloginNav/UnloginNav";
import { FaEyeSlash, FaEye } from "react-icons/fa";

function SignUp() {
  // 設定導向頁面函式
  const navigate = useNavigate();

  // 註冊

  let [account, setAccount] = useState("");
  let [password, setPassword] = useState("");
  // let [username, setUsername] = useState("");
  // let [gender, setGender] = useState("");
  // let [birthday, setBirthday] = useState("");
  // let [email, setEmail] = useState("");
  // let [mobile, setMobile] = useState("");
  // let [city, setCity] = useState("");
  // let [product, setProduct] = useState("");
  // let [collection, setCollection] = useState("");
  // let [article, setArticle] = useState("");


  // const handleChangeAccount = (e) => {setAccount(e.target.value);}
  const handleChangePassword = (e) => {setPassword(e.target.value);}
  // const handleChangeUsername = (e) => {setUsername(e.target.value);}
  // const handleChangeGender = (e) => {setGender(e.target.value);}
  // const handleChangeBirthday = (e) => {setBirthday(e.target.value);}
  // const handleChangeEmail = (e) => {setEmail(e.target.value);}
  // const handleChangeMobile = (e) => {setMobile(e.target.value);}
  // const handleChangeCity = (e) => {setCity(e.target.value);}
  // const handleChangeProduct = (e) => {setProduct(e.target.value);}
  // const handleChangeCollection = (e) => {setCollection(e.target.value);}
  // const handleChangeArticle = (e) => {setArticle(e.target.value);}

  // AuthService.register(user_account, user_password)
  // const handelSignup = () =>{
  //   AuthService.register(account, password).then(() => {
  //     window.alert("註冊成功! 現在將導向登入頁面");
  //     navigate('/signin');
  //   }).catch(error => {
  //     console.log(error.response)
  //   })
  // }

  // 檢查帳號是否存在
  // const [account, setAccount] = useState("");
  const [accountMessage, setAccountMessage] = useState("");
  const handleChangeAccount = (e) => {
    setAccount(e.target.value);
  };

  const handleCheckAccount = async () => {
    const response = await fetch(
      `http://localhost:3001/Account/checkAccount?user_account=${account}`
    );
    const results = await response.json();
    if (results.total === 0) {
      setAccountMessage("此帳號可以使用");
    } else {
      setAccountMessage("帳號已存在");
    }
  };

  // 輸入密碼與確認密碼是否相同
  function validate() {
    let pw1 = document.getElementById("password").value;
    let pw2 = document.getElementById("passwordCheck").value;

    if (pw1 == pw2) {
      console.log("ok");
    } else {
      document.getElementById("showCheck").innerHTML =
        "<font color='red'>兩次密碼不相同</font>";
      // document.getElementById("submit").disable = true;
    }
  }

  // 密碼顯示or隱藏(眼睛)
  const [invisible, setInvisible] = useState(true);
  const invisibleHandler = () => {
    setInvisible(!invisible);
  };

  return (
    <>
      <UnloginNav />
      <main className={style.auto}>
        <h1 className={style.h1}>會員註冊</h1>
        <p>用以下帳號快速註冊</p>

        {/* 第三方登入 Google/Facebook */}
        <div className={style.google}>
          <a href="#">
            <img src={require("../../images/google.png")} alt="google" />
          </a>
        </div>
        <hr className={style.hr} />

        {/* 註冊柴米帳號 */}
        <p>或建立柴米帳號</p>
        <form
          method="post"
          action="http://localhost:3001/Account/register"
          className={style.form}
        >
          <label htmlFor="account">帳號</label>
          <input
            type="text"
            id="account"
            placeholder="帳號只能是英文、數字"
            required
            value={account}
            name="account"
            onChange={handleChangeAccount}
            onBlur={handleCheckAccount}
          />
          {accountMessage}
          {/* 初次輸入密碼 */}
          <label htmlFor="password">密碼</label>
          <div className={style.password}>
            {invisible && <FaEyeSlash onClick={invisibleHandler} />}
            {!invisible && <FaEye onClick={invisibleHandler} />}
          </div>
          <input
            type={invisible ? "password" : "text"}
            id="password"
            className={style.passwordShow}
            placeholder="密碼須為8碼以上英文、數字或符號"
            name="password"
            required
         
          />

          {/* 確認密碼 */}
          <label htmlFor="passwordCheck">確認密碼</label>
          <input
            type={invisible ? "password" : "text"}
            id="passwordCheck"
            required
          />
       {/* onKeyUp={validate()} */}
          <span id="showCheck"></span>
        <button  id="submit" type="submit" className={style.button}>
            註冊
          </button>
        </form>
        <br />
        <p>
          已經是會員? <Link to="/signin">點此登入</Link>
        </p>
      </main>

      <div className={style.zindex}>

 
</div>
    </>
  );
}

export default SignUp;
