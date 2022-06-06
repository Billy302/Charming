import classes from './Banner.module.css';
import image from './articleImage1.webp';

const Banner = (props) => {
    return (
        <div className={classes['myproduct--banner']}>
            <img src={image}></img>
            <div className={classes['myproduct--banner__word']}>
                <p>更換背景圖片</p>
            </div>
        </div>
    );
};

export default Banner;
