import classes from './TypingArea.module.css';
import { useState } from 'react';
import usericon from './img/usericon.png';

const TypingArea = (props) => {
    const [chatContext, setChatContext] = useState('');

    const chatTypingHandler = (e) => {
        setChatContext(e.target.value);
    };
    const chatPostHandler = (e) => {
        e.preventDefault();
        const chatDetail = { context: chatContext, id: Math.random(), img: usericon };
        props.onChatMsg(chatDetail);
        setChatContext('');
    };
    return (
        <form onSubmit={chatPostHandler} className={classes['typing-area']}>
            <label htmlFor="input"></label>
            <input type="text" id="input" placeholder="新增回應...." onChange={chatTypingHandler} value={chatContext} />
            <button>送出留言</button>
        </form>
    );
};

export default TypingArea;
