import classes from './TypingArea.module.css';
import { useState } from 'react';
import usericon from './img/usericon.png';
import PillBtn from '../../UI/PillBtn';
import { useParams } from 'react-router-dom';

const TypingArea = (props) => {
    const [chatContext, setChatContext] = useState('');

    const params = useParams();
    const currentArticle = params.id;

    const chatTypingHandler = (e) => {
        setChatContext(e.target.value);
    };

    const chatPostHandler = (e) => {
        e.preventDefault();
        // const chatDetail = { context: chatContext, id: Math.random(), img: usericon };
        // props.onChatMsg(chatDetail);
        // setChatContext('');
        fetch(`http://localhost:7000/insert/comment/`, {
            method: 'POST',
            body: JSON.stringify({ chatContext }),
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
    };
    return (
        <form onSubmit={chatPostHandler} method="post" className={classes['typing-area']}>
            <label htmlFor="input"></label>
            <input
                type="text"
                id="input"
                name="test"
                placeholder="新增回應...."
                onChange={chatTypingHandler}
                value={chatContext}
            />
            <PillBtn className={classes['typing-area--btn']}>送出留言</PillBtn>
        </form>
    );
};

export default TypingArea;
