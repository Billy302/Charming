import classes from './AuthorCard.module.css';

const AuthorCard = () => {
    return (
        <div className={classes['author-card']}>
            <div className={classes['author-card--header']}>
                <img></img>
                <h2></h2>
            </div>
            <div className={classes['author-card--body']}>
                <p></p>
            </div>
            <div className={classes['author-card--footer']}>
                <button></button>
                <button></button>
            </div>
        </div>
    );
};

export default AuthorCard;
