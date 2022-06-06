import classes from './ChatArea.module.css';
import { useState, useEffect } from 'react';
import ChatList from './ChatList';
import TypingArea from './TypingArea';
import usericon from './img/usericon.png';
import { useParams } from 'react-router-dom';

const ChatArea = () => {
    const [chatContext, setChatContext] = useState([]);

    const params = useParams();
    const currentArticle = params.id;

    useEffect(() => {
        fetch(`http://localhost:3001/blog/comment/${currentArticle}`)
            .then((res) => res.json())
            .then((data) => {
                setChatContext([...data]);
            });
    }, [currentArticle]);

    const chatMsgPassingHandler = (message) => {
        setChatContext((prev) => [...prev, message]);
    };

    return (
        <section className={classes['chat-area']}>
            <TypingArea onChatMsg={chatMsgPassingHandler} onChatMsgPassing={chatMsgPassingHandler} />
            {chatContext && <ChatList src={usericon} messageContext={chatContext} />}
        </section>
    );
};

export default ChatArea;
