import classes from './SelectedArticle.module.css';
import SelectedCard from './SelectedCard';
import selected1 from './img/selected1.jpg';
import selected2 from './img/selected2.jpg';
import selected3 from './img/selected3.jpg';
import selected4 from './img/selected4.jpg';
import selected5 from './img/selected5.jpg';
import selected6 from './img/selected6.jpg';
import { AiFillPropertySafety } from 'react-icons/ai';
import Fade from 'react-reveal/Fade';

const SelectedArticle = (props) => {
    const imageData = [
        { img: selected1, id: Math.random(), title: '設計大小事' },
        { img: selected4, id: Math.random(), title: '設計師專訪' },
        { img: selected6, id: Math.random(), title: '科技動態' },
        { img: selected4, id: Math.random(), title: '設計展覽' },
        { img: selected6, id: Math.random(), title: '國內資訊' },
        { img: selected1, id: Math.random(), title: '海外知識' },
    ];

    return (
        <main>
            <p className={`${classes['selected-article--title']} ${props.isDarkMode ? classes['active--title'] : ''}`}>
                精選文章
            </p>
            <div className={classes['selected-article--layout']}>
                <SelectedCard src={imageData[0].img} isDarkMode={props.isDarkMode} title={imageData[0].title} />
                <SelectedCard src={imageData[1].img} isDarkMode={props.isDarkMode} title={imageData[1].title} />
                <SelectedCard src={imageData[2].img} isDarkMode={props.isDarkMode} title={imageData[2].title} />
                <SelectedCard src={imageData[3].img} isDarkMode={props.isDarkMode} title={imageData[3].title} />
                <SelectedCard src={imageData[4].img} isDarkMode={props.isDarkMode} title={imageData[4].title} />
                <SelectedCard src={imageData[5].img} isDarkMode={props.isDarkMode} title={imageData[5].title} />
            </div>
        </main>
    );
};

export default SelectedArticle;
