import classes from './ChatList.module.css';
import usericon from './img/usericon.png';

const ChatList = (props) => {
    return (
        <div className={`${classes['chatlist--icon-and-context']} ${props.className}`}>
            {props.messageContext.map((msg) => {
                return (
                    <div className={classes['chatlist--icon-and-context__loop']} key={msg.comments_id}>
                        <img src={usericon} alt=""></img>
                        <p>{msg.comments_desc}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default ChatList;
