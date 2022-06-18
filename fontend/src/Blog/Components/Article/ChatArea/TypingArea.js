import classes from './TypingArea.module.css'
import { useState, useEffect } from 'react'
import usericon from './img/usericon.png'
import PillBtn from '../../UI/PillBtn'
import { useParams } from 'react-router-dom'
import { async } from 'validate.js'

const TypingArea = (props) => {
  // 該篇文章的id (傳入資料庫用)
  const params = useParams()
  const currentArticle = params.id

  // ---------- 留言功能

  // 紀錄 user 的留言 state
  const [userInput, setUserInput] = useState('')
  const chatTypingHandler = (e) => {
    setUserInput(e.target.value)
  }

  // 送出留言時把留言寫到資料庫，並且把剛剛新增的那筆留言丟回ChatArea component，該 component 會把這筆留言丟到 ChatList 做 render

  const chatPostHandler = (e) => {
    e.preventDefault()
    fetch(`http://localhost:3001/Blog/insert/comment/${currentArticle}`, {
      method: 'POST',
      body: JSON.stringify({ userInput }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => console.log('新增成功'))

    // 紀錄剛剛使用者輸入的留言
    const userTyping = {
      comments_desc: userInput,
      user_account: userAccount,
      comments_id: Math.random(),
    }
    // two way binding (扔回 input 讓他清空使用者輸入資料)
    setUserInput('')
    // 把userTyping 當作 parameter 丟回上一層
    props.onChatMsgPassing(userTyping)
  }

  // 選擇目前瀏覽網頁的使用者id，要寫進去 userTyping(好丟回上一層)
  const userId = localStorage.getItem('id')
  const [userAccount, setUserAccount] = useState('')
  const userName = async () => {
    const data = await fetch(
      `http://localhost:3001/Blog/userinfo?userid=${userId}`
    )
    const result = await data.json()

    setUserAccount(result[0].user_account)
  }

  useEffect(() => {
    userName()
  }, [])

  return (
    <form
      onSubmit={chatPostHandler}
      method="post"
      className={classes['typing-area']}
    >
      <label htmlFor="input"></label>
      <input
        type="text"
        id="input"
        name="test"
        placeholder="新增回應...."
        onChange={chatTypingHandler}
        value={userInput}
      />
      <PillBtn className={classes['typing-area--btn']}>送出留言</PillBtn>
    </form>
  )
}

export default TypingArea
