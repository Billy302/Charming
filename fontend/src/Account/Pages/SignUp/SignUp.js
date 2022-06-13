import { React, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
// CSS檔
import style from "./SignUp.module.css";
// navbar
import LoginNav from "../../../Home/Components/LoginNav/LoginNav";
import UnloginNav from "../../../Home/Components/UnloginNav/UnloginNav";
// react-icon
import { FaEyeSlash, FaEye } from "react-icons/fa";
// sweetalert
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function SignUp() {
  // 依auth有無 設定登入或未登入nav
  let now = localStorage.getItem("auth");

  // 設定導向頁面函式
  const navigate = useNavigate();

  // 設定sweetalert2
  const MySwal = withReactContent(Swal);

  // 註冊
  const signUpAlert = async (e) => {
    // 先停止表單送出
    e.preventDefault();
    // 改透過FormData送資料到後端
    const response = await fetch(`http://localhost:3001/Account/register`, {
      method: "POST",
      // 把表單內容放進FormData
      body: new FormData(document.getElementById("signupForm")),
    })
      .then((r) => r.json())
      .then((obj) => {
        // console.log(obj)
        // console.log(JSON.stringify(obj))
        if (obj == 1) {
          MySwal.fire({
            title: "歡迎加入柴米!",
            text: "前往登入...",
            imageUrl: "http://localhost:3000/Account/login.png",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image",
            showConfirmButton: false,
            timer: 2000,
          }).then(() => {
            navigate("/signin");
          });
        } else {
          console.log("註冊失敗");
        }
      });
  };

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

  // 密碼顯示or隱藏(眼睛)
  const [invisible, setInvisible] = useState(true);
  const invisibleHandler = () => {
    setInvisible(!invisible);
  };

  return (
    <>
    {/* 依登入狀態顯示 navbar */}
      {now == "true" ? <LoginNav /> : <UnloginNav />}

      <main className={style.outline}>
        <h1 className={style.h1}>會員註冊</h1>
         {/* <p>用以下帳號快速註冊</p> */}

        {/* 註冊柴米帳號 */}
        {/* <p>建立柴米帳號</p> */}
        <form
          method="post"
          onSubmit={signUpAlert}
          id="signupForm"
          // action="http://localhost:3001/Account/register"
        >
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
            <p className={style.checkMsg}>{accountMessage}</p>
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
            <p className={style.checkMsg}></p>

            {/* 確認密碼 */}
            <label htmlFor="passwordCheck">確認密碼</label>
            <input
              type={invisible ? "password" : "text"}
              pattern="[a-zA-Z0-9]{8,}"
              id="passwordCheck"
              required
            />
            <span id="showCheck"></span>
            <br />
          </div>
          <p>
            已經是會員? <Link to="/signin">點此登入</Link>
          </p>

          <h2 className={style.h1}>基本資料</h2>
          {/* 基本資料表單 */}
          <div className={style.form2}>
            <label htmlFor="name">姓名</label>
            <input
              id="name"
              type="text"
              placeholder="請輸入真實姓名"
              name="name"
              required
            />
            {/* 性別 */}
            <label htmlFor="gender">性別</label>
            <section id="gender">
              <input id="Male" type="radio" name="gender" value="男" />
              <label htmlFor="Male">
                <img
                  src={require("../../images/Avatar3.png")}
                  className="gender"
                  alt="male"
                />
                男性
              </label>
              <input id="female" type="radio" name="gender" value="女" />
              <label htmlFor="female">
                <img
                  src={require("../../images/Avatar2.png")}
                  className="gender"
                  alt="female"
                />
                女性
              </label>
              <input id="other" type="radio" name="gender" value="其他" />
              <label htmlFor="other">
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
            <input
              id="birthday"
              type="date"
              name="birthday"
              required
            />
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              required
            />
            <label htmlFor="mobile">連絡電話</label>
            <input
            id="mobile"
              type="text"
              name="mobile"
              required
            />
            <label htmlFor="city">所在地區</label>
            <select id="city" name="city" required>
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
                點擊「註冊」即表示你同意我們的<a target="_blank" href="http://localhost:3000/signup/policya">使用條款</a>及
                <a target="_blank" href="http://localhost:3000/signup/policyb">隱私政策</a>
              </p>
            </div>
          </div>
        </form>
      </main>
    </>
  );
}

export default SignUp;
