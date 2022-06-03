import classes from './ArticleHeader.module.css';
import article4 from './img/article4.jpg';
import { useEffect } from 'react';

const ArticleHeader = (props) => {
    // useEffect(() => {
    //     console.log(props);
    // }, []);
    // 這邊程式碼按儲存後可以立即讀到console.log內容，但是如果重新更新網頁的話就會變成undefined,.
    // 為什麼重新
    // console.log(articleImage);
    return (
        <header>
            <div className={classes['article--header']}>
                <div
                    className={classes['article--header__title']}
                    dangerouslySetInnerHTML={{ __html: props.trendingArticle.article_title }}
                ></div>
                <div className={classes['article--header__image']}>
                    <img
                        // src={require(`../../../../../public/image/${props.trendingArticle.article_image}.jpg`)}
                        src={`http://localhost:3000/image/${props.trendingArticle.article_image}.jpg`}
                        // src={article4}
                        alt=""
                    ></img>
                </div>
            </div>
        </header>
    );
};

export default ArticleHeader;
