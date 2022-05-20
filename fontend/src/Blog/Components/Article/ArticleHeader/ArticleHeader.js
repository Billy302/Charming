import classes from './ArticleHeader.module.css';
import article4 from './img/article4.jpg';

const ArticleHeader = () => {
    return (
        <header className={classes['article--header']}>
            <h1>電影從業人員，光鮮亮麗的背後</h1>
            <img src={article4} alt=""></img>
        </header>
    );
};

export default ArticleHeader;
