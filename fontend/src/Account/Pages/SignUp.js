import React from 'react'
import MyButton from '../Components/MyButton'

function SignUp() {
  return (
    <main>
      <h1>會員註冊</h1>
      <div className="content">
        <p>用以下帳號快速註冊</p>
        <div className="google">
          <a href="#">
            <img src={require('../images/google.png')} />
          </a>
        </div>
        {/* <div className="google">
          <a href="#">
            <img src={require('../images/facebook.png')} />
          </a>
        </div> */}

        <hr />
        <p>或建立柴米帳號</p>
        <form>
          <label>帳號</label>
          <input type="text" placeholder="帳號只能是英文、數字" />
          <label>密碼</label>
          <input
            type="password"
            placeholder="密碼須為8碼以上英文、數字或符號"
          />
          <label>確認密碼</label>
          <input type="password" />
          <MyButton />
        </form>
        <p>
          點擊「註冊」即表示你同意我們的<a href="#">使用條款</a>及
          <a href="#">隱私政策</a>
        </p>
        <p>
          已經是會員? <a href="#">點此登入</a>
        </p>
      </div>
    </main>
  )
}

export default SignUp
