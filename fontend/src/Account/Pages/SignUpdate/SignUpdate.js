import { React, useState } from 'react'
import style from './SignUpdate.module.css'
import { useNavigate, Link, useParams } from 'react-router-dom'
import UnloginNav from '../../../Home/Components/UnloginNav/UnloginNav'
import { FaEyeSlash, FaEye } from 'react-icons/fa'

function SignUpdate() {
  const auth = localStorage.setItem('auth', false)
  // 設定導向頁面函式
  const navigate = useNavigate()

  const params = useParams()
  const paramsAccount = params.account

  // 密碼顯示or隱藏
  const [invisible, setInvisible] = useState(true)
  const invisibleHandler = () => {
    setInvisible(!invisible)
  }

  // 登入驗證
  const fetchAccount = async (e) => {
    // 先停止表單送出
    e.preventDefault()
    // 改透過FormData送資料
    const response = await fetch(`http://localhost:3001/Account/signin`, {
      method: 'put',
      body: new FormData(document.getElementById('form1')),
    })
      .then((r) => r.json())
      .then((obj) => {
        console.log(obj)
      })
      .then((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <UnloginNav />
      <main className={style.main}>
        <h1 className={style.h1}>重設密碼</h1>
      <form className={style.form} id="form1" method="post" onSubmit={fetchAccount}>
        <label htmlFor="account">您的帳號</label>
        <input id="account" type="text" name="account" value={paramsAccount} />

        <label htmlFor="password">新密碼</label>
        <div className={style.password}>
          {/* 顯示/隱藏 密碼眼睛切換 text/password input type切換 */}
          {invisible && <FaEyeSlash onClick={invisibleHandler} />}
          {!invisible && <FaEye onClick={invisibleHandler} />}
        </div>
        <input
          type={invisible ? 'password' : 'text'}
          id="password"
          name="password"
          className={style.passwordShow}
          placeholder="密碼須為8碼以上英文、數字或符號"
        />
        <button typeof="submit" className={style.button}>確認修改</button>
      </form>
      <p>
        還不是會員嗎? <Link to="/signup">立即註冊</Link>
      </p>
      </main>
    </>
  )
}

export default SignUpdate