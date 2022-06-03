import classes from './AuthorCard.module.css';
import logo from '../../../../Home/assets/developers5.png';

const AuthorCard = (props) => {
    return (
        <div className={classes['author-card']}>
            <div className={classes['author-card--body']}>
                <img src={logo}></img>
                <div className={classes['author-card--body__content']}>
                    <h2>中山路追風少年</h2>
                    <p>在一個月內被開兩張超速罰單，從此引退的中山路追風少年。</p>
                </div>
            </div>
            <div className={classes['author-card--footer']}>
                <button>訂閱作者</button>
                <button>收藏本文</button>
            </div>
        </div>
    );
};

export default AuthorCard;
