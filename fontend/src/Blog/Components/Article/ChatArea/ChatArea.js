import classes from './ChatArea.module.css';
import { useState } from 'react';
import ChatList from './ChatList';
import TypingArea from './TypingArea';
import usericon from './img/usericon.png';

const ChatArea = () => {
    const [chatContext, setChatContext] = useState([]);
    const chatMsgPassingHandler = (message) => {
        setChatContext((prev) => [message, ...prev]);
    };
    return (
        <section className={classes['chat-area']}>
            <TypingArea onChatMsg={chatMsgPassingHandler} />
            {chatContext && <ChatList src={usericon} messageContext={chatContext} />}
        </section>
    );
};

export default ChatArea;
