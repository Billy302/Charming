import React from 'react';
import MyButton from '../Components/MyButton'


function SignIn() {
  return (<main>
  <h1>登入</h1>
  <div className="content">
        <p>用以下帳號繼續</p>
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
        <p>或用柴米帳號</p>
        <form>
          <label>帳號</label>
          <input type="text" />
          <label>密碼</label>
          <input
            type="password" />
            <a href='#'>忘記密碼</a>
          <MyButton />
        </form>
        <p>
          還不是會員嗎? <a href="#">立即註冊</a>
        </p>
      </div>
  </main>

  )
}

export default SignIn;
