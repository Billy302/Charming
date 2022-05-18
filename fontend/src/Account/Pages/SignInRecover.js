import style from './Pages.module.css'
import React from 'react'
import MyButton from '../Components/MyButton/MyButton'

function SignInRecover() {
  return (
    <main className={style.main}>
      <h1 className={style.h1}>重設密碼</h1>
      <form className={style.form}>
        <label>你的帳號</label>
        <input type="text" disabled />
        <label>密碼</label>
        <input type="password" placeholder="密碼須為8碼以上英文、數字或符號" />
        <label>確認密碼</label>
        <input type="password" />
        <MyButton />
      </form>
    </main>
  )
}

export default SignInRecover
