import style from "./SignUp.module.css";
import { React, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthService from "../../Services/auth.service";
import UnloginNav from "../../../Home/Components/UnloginNav/UnloginNav";
import { FaEyeSlash, FaEye } from "react-icons/fa";

function SignUp() {
  // 設定導向頁面函式
  const navigate = useNavigate();
 
  // const signUpBtn = document.querySelector('#signUpBtn')
  
  // signUpBtn.addEventListener('click',()=>{
  //   const signUpAccount = document.querySelector('.account');
  //   const signUpPassword = document.querySelector('.password');
  //   const signUpName = document.querySelector('#name')
  //   const storageKey = signUpAccount.value + signUpPassword.value;
  //   const checkUser = Boolean(localStorage.getItem(storageKey));

  //   function successAction(){
  //     if(checkUser){
  //       return alert('The email has already created it, please re-enter')
  //     }

  //     localStorage.setItem(storageKey,signUpName.value)
  //     signUpName.value = ''
  //     signUpAccount.value=''
  //     signUpPassword.value=''
  //     alert('Created successfully, please go to sign in page.')
  //   }
  //   if(signUpAccount.value === '' || signUpPassword.value === ''){
  //     alert('The input box cannot be empty')
  //   }else{
  //     successAction()
  //   }
  // })
  // 註冊

  // let [account, setAccount] = useState("");
  let [password, setPassword] = useState("");
  let [username, setUsername] = useState("");
  let [gender, setGender] = useState("");
  let [birthday, setBirthday] = useState("");
  let [email, setEmail] = useState("");
  let [mobile, setMobile] = useState("");
  let [city, setCity] = useState("");

  // const handleChangeAccount = (e) => {setAccount(e.target.value);}
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleChangeGender = (e) => {
    setGender(e.target.value);
  };
  const handleChangeBirthday = (e) => {
    setBirthday(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangeMobile = (e) => {
    setMobile(e.target.value);
  };
  const handleChangeCity = (e) => {
    setCity(e.target.value);
  };

  // AuthService.register(user_account, user_password)
  // const handelSignup = () =>{
  //   AuthService.register(account, password).then(() => {
  //     window.alert("註冊成功! 現在將導向登入頁面");
  //     navigate('/signin');
  //   }).catch(error => {
  //     console.log(error.response)
  //   })
  // }

  // const handleSignup = () =>{
  //   try{ window.alert("註冊成功! 現在將導向登入頁面");
  //   navigate('signin')
  //   }catch{error => console.log(error.response)}
  // }

  // 檢查帳號是否存在
  const [account, setAccount] = useState("");
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
  // function validate() {
  //   let pw1 = document.getElementById("password").value;
  //   let pw2 = document.getElementById("passwordCheck").value;

  //   if (pw1 == pw2) {
  //     console.log("ok");
  //   } else {
  //     document.getElementById("showCheck").innerHTML =
  //       "<font color='red'>兩次密碼不相同</font>";
  //     // document.getElementById("submit").disable = true;
  //   }
  // }

  // 密碼顯示or隱藏(眼睛)
  const [invisible, setInvisible] = useState(true);
  const invisibleHandler = () => {
    setInvisible(!invisible);
  };

  return (
    <>
      <UnloginNav />
      <main className={style.outline}>
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
<<<<<<< HEAD
        <form method="post" action="http://localhost:3001/Account/register" className={style.form}>
          <label htmlFor="account">帳號</label>
          <input onChange={handleChangeAccount}
            type="text" id="account" name="account"
            placeholder="帳號只能是英文、數字" required
            // value={account}
            // onChange={handleValueChange}
            // onBlur={handleCheckAccount}
          />
          {/* 初次輸入密碼 */}
          <label htmlFor="password">密碼</label>
          <div className={style.password}>
            {invisible && <FaEyeSlash onClick={invisibleHandler} />}
            {!invisible && <FaEye onClick={invisibleHandler} />}
          </div>
          <input onChange={handleChangePassword}
            type={invisible ? "password" : "text"}
            id="password"
            className={style.passwordShow}
            placeholder="密碼須為8碼以上英文、數字或符號"
            name="password" required/>

          {/* 確認密碼 */}
          <label htmlFor="passwordCheck">確認密碼</label>
          <input type={invisible ? "password" : "text"} id="passwordCheck" required/>

          {/* 註冊按鈕 */}
          <button type="submit" className={style.button}>註冊</button>
        </form>
        <p>
          點擊「註冊」即表示你同意我們的<a href="#">使用條款</a>及
          <a href="#">隱私政策</a>
        </p>
        <br />
        <p>
          已經是會員? <Link to="/signin">點此登入</Link>
        </p>
=======
        <form method="post" action="http://localhost:3001/Account/register">
          <div className={style.form}>
            <label htmlFor="account">帳號</label>
            <input
              type="text"
              id="account"
              placeholder="帳號只能是英文、數字"
              value={account}
              name="account"
              onChange={handleChangeAccount}
              onBlur={handleCheckAccount}
              required
            />
            <span>{accountMessage}</span>
            {/* 初次輸入密碼 */}
            <label htmlFor="password">密碼</label>
            <div className={style.password}>
              {invisible && <FaEyeSlash onClick={invisibleHandler} />}
              {!invisible && <FaEye onClick={invisibleHandler} />}
            </div>
            <input
              type={invisible ? "password" : "text"}
              pattern="[a-zA-Z0-9]{8,}"
              id="password"
              className={style.passwordShow}
              placeholder="密碼須為8碼以上英文或數字"
              name="password"
              required
            />

            {/* 確認密碼 */}
            <label htmlFor="passwordCheck">確認密碼</label>
            <input
              type={invisible ? "password" : "text"}
              pattern="[a-zA-Z0-9]{8,}"
              id="passwordCheck"
              required
            />
            {/* onKeyUp={validate()} */}
            <span id="showCheck"></span>
          <br />
          </div>
          <p>
            已經是會員? <Link to="/signin">點此登入</Link>
          </p>


        
            <h2 className={style.h1}>基本資料</h2>
            {/* 基本資料表單 */}
            <div className={style.form2}>
              <label>姓名</label>
              <input
              id="name"
                type="text"
                placeholder="請輸入真實姓名"
                onChange={handleChangeUsername}
                name="name"
                required
              />
              {/* 性別 */}
              <label>性別</label>
              <section onChange={handleChangeGender}>
                <input id="Male" type="radio" name="gender" value="male" />
                <label for="Male">
                  <img
                    src={require("../../images/Avatar3.png")}
                    className="gender"
                    alt="male"
                  />
                  男性
                </label>
                <input
                  id="female"
                  type="radio"
                  name="gender"
                  value="female"
                />
                <label for="female">
                  <img
                    src={require("../../images/Avatar2.png")}
                    className="gender"
                    alt="female"
                  />
                  女性
                </label>
                <input id="other" type="radio" name="gender" value="other" />
                <label for="other">
                  <img
                    src={require("../../images/Avatar1.png")}
                    className="gender"
                    alt="other"
                  />
                  其他
                </label>
              </section>
              {/* 生日及其他 */}
              <label htmlFor="birthday">生日</label>
              <input id="birthday" type="date" name="birthday" onChange={handleChangeBirthday} required/>
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" name="email" required onChange={handleChangeEmail} />
              <label>連絡電話</label>
              <input type="text" minLength="8"
              maxLength="11" pattern="09\d{2}\-?\d{3}\-?\d{3}" name="mobile" onChange={handleChangeMobile} required  />
              <label for="city">所在地區</label>
              <select id="city" name="city" onChange={handleChangeCity}>
                <option></option>
                <option>臺北市</option>
                <option>新北市</option>
                <option>基隆市</option>
                <option>宜蘭縣</option>
                <option>桃園縣</option>
                <option>新竹縣</option>
                <option>新竹市</option>
                <option>苗栗縣</option>
                <option>臺中市</option>
                <option>彰化縣</option>
                <option>南投縣</option>
                <option>雲林縣</option>
                <option>嘉義市</option>
                <option>嘉義縣</option>
                <option>臺南市</option>
                <option>高雄市</option>
                <option>屏東縣</option>
                <option>臺東縣</option>
                <option>花蓮縣</option>
                <option>澎湖縣</option>
                <option>連江縣</option>
                <option>金門縣</option>
              </select>
              <div>
                {/* 註冊按鈕 */}
                 
                <button id="submit" type="submit" className={style.button}>
                  註冊
                </button>
                <p>
                  點擊「註冊」即表示你同意我們的<a href="#">使用條款</a>及
                  <a href="#">隱私政策</a>
                </p>
              </div>
            </div>
    
        </form>
>>>>>>> 23d04c36c11044a97e803ae3df64f5a59838f249
      </main>
    </>
  );
}


export default SignUp;
