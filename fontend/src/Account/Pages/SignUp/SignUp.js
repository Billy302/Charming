import style from './SignUp.module.css'
import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import UnloginNav from '../../../Home/Components/UnloginNav/UnloginNav'
import { FaEyeSlash, FaEye } from "react-icons/fa";

function SignUp() {

  // 檢查帳號是否存在
  const [account, setAccount] = useState('')
  const [accountMessage, setAccountMessage] = useState('')
  const handleValueChange = (e) => {
    setAccount(e.target.value)
  }

  const handleCheckAccount = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/users/checkAccount?account=${account}`
    )
    const results = await response.json()
    if (results.total === 0) {
      setAccountMessage('此帳號可以使用')
    } else {
      setAccountMessage('帳號已存在')
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
            <img src={require('../../images/google.png')} alt="google" />
          </a>
        </div>
        {/* <div className="google">
          <a href="#">
          <img src={require('../images/facebook.png')} />
          </a>
        </div> */}

        <hr className={style.hr} />
        <p>或建立柴米帳號</p>
        <div className={style.form}>
          <label>帳號</label>
          <input
            type="text"
            placeholder="帳號只能是英文、數字"
            value={account}
            onChange={handleValueChange}
            onBlur={handleCheckAccount}
          />
          {/* 初次輸入密碼 */}
          <label for='password'>密碼</label>
          <div className={style.password}>
          {invisible &&  <FaEyeSlash onClick={invisibleHandler} />}
           {!invisible &&  <FaEye onClick={invisibleHandler} />}
          </div>
          <input type={invisible? 'password' : 'text'} id="password" className={style.passwordShow}  placeholder="密碼須為8碼以上英文、數字或符號"/>

          {/* 確認密碼 */}
          <label for='passwordCheck'>確認密碼</label>
          <input type={invisible? 'password' : 'text'} id="passwordCheck"/>
          <button className={style.button}>註冊</button>
        </div>
        <p>
          點擊「註冊」即表示你同意我們的<a href="#">使用條款</a>及
          <a href="#">隱私政策</a>
        </p>
        <br/>
        <p>
          已經是會員? <Link to="/signin">點此登入</Link>
        </p>
      </main>
    </>
  )
}

export default SignUp
