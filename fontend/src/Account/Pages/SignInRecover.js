import React from 'react'
import MyButton from '../Components/MyButton'

function SignInRecover() {
  return (
    <main>
      <h1>重設密碼</h1>
      <div className="content">
        <form>
          <label>你的帳號</label>
          <input type="text" disabled />
          <label>密碼</label>
          <input
            type="password"
            placeholder="密碼須為8碼以上英文、數字或符號"
          />
          <label>確認密碼</label>
          <input type="password" />
          <MyButton />
        </form>
      </div>
    </main>
  )
}

export default SignInRecover
