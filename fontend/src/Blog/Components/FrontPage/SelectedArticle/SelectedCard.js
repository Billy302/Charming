import classes from './SelectedCard.module.css';
import selected1 from './img/selected1.jpg';
import { AiOutlineArrowRight } from 'react-icons/ai';

const SelectedCard = (props) => {
    return (
        <div className={classes['selected-card']}>
            <div className={classes['selected-card--title']}>
                <h3>設計大小事</h3>
                <AiOutlineArrowRight className={classes['selected-card--title__rightbtn']} />
            </div>
            <div className={classes['selected-card--context']}>
                <img src={props.src} alt=""></img>
                <h4>
                    笑死！笑死！笑死！笑死！笑死！笑死！笑死！笑死！笑死！笑死！笑死！笑死！笑死！笑死！笑死！笑死！
                </h4>
                <h4>笑死！笑死！笑死！笑死！笑死！笑死！笑死！笑死！</h4>
                <h4>笑死！笑死！笑死！笑死！笑死！笑死！笑死！笑死！</h4>
                <h4>笑死！笑死！笑死！笑死！笑死！笑死！笑死！笑死！</h4>
                <h4>笑死！笑死！笑死！笑死！笑死！笑死！笑死！笑死！</h4>
            </div>
        </div>
    );
};

export default SelectedCard;
