import style from './Pages.module.css'
import React from 'react'
import Header from '../Components/Header/Header'

function SignInRecover() {
  return (
    <>
      <Header />
      <main className={style.main}>
        <h1 className={style.h1}>重設密碼</h1>
        <form className={style.form}>
          <label>你的帳號</label>
          <input type="text" disabled />
          <label>密碼</label>
          <input
            type="password"
            placeholder="密碼須為8碼以上英文、數字或符號"
          />
          <label>確認密碼</label>
          <input type="password" />
          <button className={style.button}>確認</button>
        </form>
      </main>
    </>
  )
}

export default SignInRecover
