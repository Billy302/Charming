import classes from './ChatList.module.css'
import usericon from './img/favicon.ico'

const ChatList = (props) => {
  // 這個 component 拿來 render 文章中的所有留言
  const { messageContext } = props
  return (
    // 確認有沒有留言，有的話上一條 border top
    <div
      className={`${classes['chatlist']} ${props.className} ${
        messageContext.length >= 1 ? classes.render : ''
      }`}
    >
      {/* map 所有的留言 */}
      {messageContext.map((msg) => {
        return (
          <div
            className={`${classes['chatlist--loop']} `}
            key={msg.comments_id}
          >
            <div className={classes['chatlist--loop__icon-account']}>
              <img src={usericon} alt=""></img>
              <p>{msg.user_account}</p>
            </div>
            <p>
              <span>{msg.comments_desc}</span>
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default ChatList
