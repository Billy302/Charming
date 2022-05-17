import React from 'react'
import MyButton from '../Components/MyButton'
import { useNavigate } from 'react-router-dom'

function SignIn(props) {
  const { auth, setAuth } = props

  // useHistory版本已被useNavigate取代
  const navigate = useNavigate()
  return (
    <main>
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
          <input type="password" />
          <a href="#">忘記密碼</a>
        </form>
        <button
          onClick={() => {
            setAuth(!auth)

            alert('登入成功')

            navigate('/account')
          }}
        >
          {auth ? '登出' : '會員登入'}
        </button>
        {/* 返回上一頁 */}
        <button
          onClick={() => {
            navigate('/singin')
          }}
        >
          返回上一頁
        </button>

        <p>
          還不是會員嗎? <a href="#">立即註冊</a>
        </p>
      </div>
    </main>
  )
}

export default SignIn
