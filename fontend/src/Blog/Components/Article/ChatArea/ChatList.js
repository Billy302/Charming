import classes from './ChatList.module.css'
import usericon from './img/favicon.ico'

const ChatList = (props) => {
  console.log(props.messageContext)
  return (
    <div
      className={`${classes['chatlist']} ${props.className} ${
        props.messageContext.length >= 1 ? classes.render : ''
      }`}
    >
      {props.messageContext.map((msg) => {
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
