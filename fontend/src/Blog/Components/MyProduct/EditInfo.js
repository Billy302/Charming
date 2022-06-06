import classes from './EditInfo.module.css';
import PillBtn from '../UI/PillBtn';
import { useState } from 'react';

const EditInfo = (props) => {
    const [titleInput, setTitleInput] = useState('奔流設計');

    const [contextInput, setContextInput] = useState(
        '《以海洋為主題的台灣設計師品牌》My Glück由Zoe以及Abraham Jr.兩位設計師組成，以充滿希望、關懷美麗的海洋為訴求，要讓更多人再次想起海的重要與美好。My Glück的設計系列包含從上衣、零錢包到居家抱枕等貼近日常生活的用品，希望這些色彩鮮豔、繽紛活潑的海洋生物能帶給這個世界更多的快樂，讓人們、海洋生物以及整個地球環境都能永續幸福。'
    );

    const titleChangeHandler = (e) => {
        const setTitleInput = e.target.value;
    };
    const contextChangeHandler = (e) => {
        const setContextInput = e.target.value;
    };
    const inputChangeHandler = (e) => {
        e.preventDefault();
    };
    return (
        <div className={classes['personal-info--card__display']}>
            <form onChange={inputChangeHandler}>
                <label htmlFor="title">修改文章</label>
                <input type="text" id="title" onChange={titleChangeHandler} defaultValue={titleInput}></input>
                <label htmlFor="context">修改內文</label>
                <textarea id="context" onChange={contextChangeHandler} defaultValue={contextInput}></textarea>
                <p></p>
                <PillBtn>完成修改</PillBtn>
            </form>
        </div>
    );
};

export default EditInfo;
