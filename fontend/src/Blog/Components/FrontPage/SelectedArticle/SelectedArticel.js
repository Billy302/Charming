import classes from './SelectedArticle.module.css';
import SelectedCard from './SelectedCard';
import selected1 from './img/selected1.jpg';
import selected2 from './img/selected2.jpg';
import selected3 from './img/selected3.jpg';
import selected4 from './img/selected4.jpg';
import selected5 from './img/selected5.jpg';
import selected6 from './img/selected6.jpg';
import { AiFillPropertySafety } from 'react-icons/ai';

const SelectedArticle = (props) => {
    const imageData = [
        { img: selected1, id: Math.random() },
        { img: selected4, id: Math.random() },
        { img: selected6, id: Math.random() },
        { img: selected4, id: Math.random() },
        { img: selected6, id: Math.random() },
        { img: selected1, id: Math.random() },
    ];
    return (
        <main>
            <p className={`${classes['selected-article--title']} ${props.isDarkMode ? classes['active--title'] : ''}`}>
                精選文章
            </p>
            <div className={classes['selected-article--layout']}>
                {imageData.map((item) => {
                    return <SelectedCard src={item.img} key={item.id} isDarkMode={props.isDarkMode} />;
                })}
            </div>
        </main>
    );
};

export default SelectedArticle;
