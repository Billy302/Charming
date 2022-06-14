import { React, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
// CSS檔
import style from './SignForget.module.css'
// navbar
import LoginNav from "../../../Home/Components/LoginNav/LoginNav";
import UnloginNav from '../../../Home/Components/UnloginNav/UnloginNav'
// sweetalert
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function SingForget() {

  // 依auth有無 設定登入或未登入nav
  let now = localStorage.getItem("auth");
  
  const auth = localStorage.setItem('auth', false)
  // 設定導向頁面函式
  const navigate = useNavigate()
    // 設定sweetalert2
    const MySwal = withReactContent(Swal);

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
          MySwal.fire({
            title: "已發送連結至您的信箱",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          }).then(() => {
            errMsg.innerHTML = '<span style="color: red;">已發送連結至您的信箱</span>'
          });
        }
        // 仍在測試中
        else if((obj = 'error')){
            errMsg.innerHTML = '帳號 或 Mail 輸入錯誤'
        }
      })
  }

  return (
    <>
    {now == 'true' ? <LoginNav /> : <UnloginNav />}
      <main className={style.main}>
        <h1 className={style.h1}>發送驗證信</h1>
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