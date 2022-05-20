import style from './Pages.module.css'
import React from 'react'
import { Link } from 'react-router-dom'
import UnloginNav from '../../Home/Components/UnloginNav/UnloginNav'

function SignInIdentify() {
  return (
    <>
      <UnloginNav />
      <main className={style.main}>
        <h1 className={style.h1}>重設密碼</h1>
        <form className={style.form}>
          <label>E-mail</label>
          <input type="email" />
          <p className={style.p}>
            請輸入你註冊時的Email，我們會發送一封<br />
            信件，點擊信件中的連結以重設密碼
          </p>
          <button className={style.button}>送出</button>
        </form>
      </main>
    </>
  )
}

export default SignInIdentify
