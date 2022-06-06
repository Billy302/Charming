import style from './SignIn.module.css'
import { React, useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import UnloginNav from '../../../Home/Components/UnloginNav/UnloginNav'
import { FaEyeSlash, FaEye } from 'react-icons/fa'
import axios from 'axios'

// function SignIn() {
function SignIn(props) {
  const [user_account, setUserAccount] = useState('')
  const [user_password, setUserPassword] = useState('')
  const { auth, setAuth } = props

  const login = (e) => {
    if (user_account !== '' && user_password !== '') {
      axios
        .post('http://localhost:3001/signin', {
          user_account: user_account,
          user_password: user_password,
        })
        .then((res) => {
          alert('登入成功!')
          navigate('/home')
        })
        .catch((e) => {
          if (e.response.error) {
            alert('帳號或密碼錯誤！')
          }
        })
    } else if (user_account === '') {
      alert('請輸入帳號!')
    } else {
      alert('請輸入密碼!')
    }
  }

  // const [account, setAccount] = useState([]);

  // 設定導向頁面函式
  const navigate = useNavigate()

  const fetchAccount = async (e) => {
    e.preventDefault()
    const response = await fetch(`http://localhost:3001/Account/signin`, {
      method: 'POST',
      body: new FormData(document.getElementById('form1')),
    })
      .then((r) => r.json())
      .then((obj) => {
        // console.log(JSON.stringify(obj))
        // JSON.stringify(obj);
        if (obj == 0) {
          document.getElementById('msg').innerHTML = '帳號或密碼輸入錯誤'
        } else {
          localStorage.setItem('id', obj)
          // navigate('http://localhost:3001/Account');
        }
      })
  }

  // 密碼顯示or隱藏
  const [invisible, setInvisible] = useState(true)
  const invisibleHandler = () => {
    setInvisible(!invisible)
  }

  return (
    <>
      <UnloginNav />
      <main className={style.main}>
        <h1 className={style.h1}>登入</h1>
        <p>用以下帳號繼續</p>
        <div className={style.google}>
          <a href="#">
            <img src={require('../../images/google.png')} alt="google" />
          </a>
        </div>
        <hr className={style.hr} />
        <p>或用柴米帳號</p>

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
            type={invisible ? 'password' : 'text'}
            id="password"
            className={style.passwordShow}
            name="password"
          />

          <Link to="/signin/identify" className={style.forget}>
            忘記密碼
          </Link>

          {/* 顯示登入錯誤訊息 */}
          <p id="msg"></p>
          {/* 登入並導向首頁 */}
          <button typeof="submit" className={style.button}>
            登入
          </button>
        </form>

        <p>
          還不是會員嗎? <Link to="/signup">立即註冊</Link>
        </p>
      </main>
    </>
  )
}

export default SignIn
