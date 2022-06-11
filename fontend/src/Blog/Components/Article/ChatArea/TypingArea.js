import classes from './TypingArea.module.css'
import { useState } from 'react'
import usericon from './img/usericon.png'
import PillBtn from '../../UI/PillBtn'
import { useParams } from 'react-router-dom'

const TypingArea = (props) => {
  const [userInput, setUserInput] = useState('')

  const params = useParams()
  const currentArticle = params.id

  const chatTypingHandler = (e) => {
    setUserInput(e.target.value)
  }

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
    const userTyping = { comments_desc: userInput, comments_id: Math.random() }
    setUserInput('')
    props.onChatMsgPassing(userTyping)
  }
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
