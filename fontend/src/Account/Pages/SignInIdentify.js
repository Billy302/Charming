import React from 'react'
import { Form, FormLabel } from 'react-bootstrap'
import MyButton from '../Components/MyButton'

function SignInIdentify() {
  return (
    <main>
      <h1>重設密碼</h1>
      <div className="content">
        <form>
          <label>E-mail</label>
          <input type="email" />
          <p className="heading6">
            請輸入你註冊時的Email，我們會發送一封信件，
            <br />
            點擊信件中的連結以重設密碼
          </p>

          <MyButton />
        </form>
      </div>
    </main>
  )
}

export default SignInIdentify
