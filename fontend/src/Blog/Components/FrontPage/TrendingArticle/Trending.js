import classes from './Trending.module.css';

const Trending = (props) => {
    return (
        <div className={classes['trending-article']}>
            <img src={props.img} alt=""></img>
            <div className={classes['trending-article--context']}>
                <h2
                    className={`${classes['trending-article--context__title']} ${
                        props.isDarkMode ? classes['active-title'] : ''
                    }`}
                    dangerouslySetInnerHTML={{ __html: props.article.article_title }}
                ></h2>
                <div className={classes['trending-article--context__render-article']}>
                    <p dangerouslySetInnerHTML={{ __html: props.article.article_content }}></p>
                </div>
            </div>
        </div>
    );
};

export default Trending;
