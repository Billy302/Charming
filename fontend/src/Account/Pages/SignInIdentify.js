import style from './Pages.module.css'
import React from 'react'
import MyButton from '../Components/MyButton/MyButton'

function SignInIdentify() {
  return (
    <main className={style.main}>
      <h1 className={style.h1}>重設密碼</h1>
      <form className={style.form}>
        <label>E-mail</label>
        <input type="email" />
        <p className="heading6">
          請輸入你註冊時的Email，我們會發送一封信件，
          <br />
          點擊信件中的連結以重設密碼
        </p>
        <MyButton />
      </form>
    </main>
  )
}

export default SignInIdentify
