import classes from './ChatList.module.css';

const ChatList = (props) => {
    return (
        <div className={classes['chatlist--icon-and-context']}>
            {props.messageContext.map((item) => {
                return (
                    <div className={classes['chatlist--icon-and-context__loop']} key={item.id}>
                        <img src={item.img} alt=""></img>
                        <p>{item.context}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default ChatList;
