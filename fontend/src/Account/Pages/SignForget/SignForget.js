import { React, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import style from './SignForget.module.css'
import UnloginNav from '../../../Home/Components/UnloginNav/UnloginNav'

function SingForget() {
  const auth = localStorage.setItem('auth', false)
  // 設定導向頁面函式
  const navigate = useNavigate()

  let [email, setEmail] = useState('')

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }
  let errMsg = document.getElementById('msg')
  // 登入驗證
  const fetchAccount = async (e) => {
    // 先停止表單送出
    e.preventDefault()
    errMsg.innerHTML = ''
    // 改透過FormData送資料
    const response = await fetch(`http://localhost:3001/Account/signforget`, {
      method: 'post',
      body: new FormData(document.getElementById('form1')),
    })
      .then((r) => r.json())
      .then((obj) => {
        console.log(obj)
        // console.log((obj = 'error'))
        if ((obj = 'success')) {
            errMsg.innerHTML = '已發送連結至您的信箱'
        }
        // 仍在測試中
        else if((obj = 'error')){
            errMsg.innerHTML = '帳號 或 Mail 輸入錯誤'
        }
      })
  }

  return (
    <>
      <UnloginNav />
      <main className={style.main}>
        <h1 className={style.h1}>重設密碼</h1>
      <form className={style.form} id="form1" method="post" onSubmit={fetchAccount}>
        <label htmlFor="account">您的帳號</label>
        <input id="account" type="text" name="account" />

        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          onChange={handleChangeEmail}
        />
        <p className={style.p}>
            請輸入你註冊時的Email，我們會發送一封<br />
            信件，點擊信件中的連結以重設密碼
          </p>
        {/* 顯示登入錯誤訊息 */}
        <p id="msg"></p>
        <button typeof="submit" className={style.button}>送出</button>
      </form>
      </main>
    </>
  )
}
export default SingForget