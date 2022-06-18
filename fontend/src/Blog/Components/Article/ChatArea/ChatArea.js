import classes from './ChatArea.module.css'
import { useState, useEffect } from 'react'
import ChatList from './ChatList'
import TypingArea from './TypingArea'
import { useParams } from 'react-router-dom'

const ChatArea = () => {
  // 該篇文章的id (傳入資料庫用)
  const params = useParams()
  const currentArticle = params.id

  // ---------- render文章留言功能

  // 接收文章留言
  const [chatContext, setChatContext] = useState([])

  // 從資料庫撈出這則文章的所有留言，並更新state
  useEffect(() => {
    fetch(`http://localhost:3001/blog/comment/${currentArticle}`)
      .then((res) => res.json())
      .then((data) => {
        setChatContext([...data])
      })
  }, [currentArticle])

  // 拿 TypingArea 傳上來的訊息再傳給 ChatList
  // 如果有新的使用者在 TypingArea component 留言， TypingArea component 會觸發這個 function ，並且更新 state 後傳到 ChatList 再做一次 render
  const chatMsgPassingHandler = (message) => {
    setChatContext((prev) => [...prev, message])
  }

  return (
    <section className={classes['chat-area']}>
      <TypingArea onChatMsgPassing={chatMsgPassingHandler} />
      {chatContext && <ChatList messageContext={chatContext} />}
    </section>
  )
}

export default ChatArea
