import { React, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
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
        console.log((obj = 'error'))
        if ((obj = 'error')) {
          errMsg.innerHTML = '帳號 或 Mail 輸入錯誤'
        }
      })
  }

  return (
    <>
      <UnloginNav />
      <form id="form1" method="post" onSubmit={fetchAccount}>
        <label htmlFor="account">帳號</label>
        <input id="account" type="text" name="account" />

        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          onChange={handleChangeEmail}
        />
        {/* 顯示登入錯誤訊息 */}
        <p id="msg"></p>
        <button typeof="submit">登入</button>
      </form>
    </>
  )
}
export default SingForget
