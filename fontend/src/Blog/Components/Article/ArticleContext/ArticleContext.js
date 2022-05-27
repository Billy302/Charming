import classes from './ArticleContext.module.css';
import ArticleTrending from '../ArticleTrending/ArticleTrending';
import ArticleRelated from '../ArticleRelated/ArticleRelated';
import article4 from './img/article4.jpg';
import ArticleShare from '../ArticleShare/ArticleShare';
import PillBtn from '../../UI/PillBtn';
import { useEffect } from 'react';
// import AuthorCard from '../AuthorCard/AuthorCard';

const ArticleContext = (props) => {
    // 這邊按儲存會有資料，但是刷新就會給空物件
    // 為什麼不能在最外層的 component 給物件，這邊用[0]取出來

    return (
        <section>
            <div>
                <article className={classes['article']}>
                    <div className={classes['article--context']}>
                        <div className={classes['article--context__tag']}>
                            <PillBtn>#最新消息</PillBtn>
                            <PillBtn>#設計</PillBtn>
                            <PillBtn>#專訪</PillBtn>
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: props.trendingArticle.article_content }}></div>
                        <img src={article4} alt=""></img>
                        <div className={classes['article--context__share']}>
                            <p>share</p>
                            <ArticleShare />
                            <PillBtn className={classes['article--context__fav']}>收藏文章</PillBtn>
                        </div>
                    </div>
                    <aside className={classes['article--trending-related']}>
                        <div>
                            <ArticleTrending className={classes['article--trending']} />
                            <ArticleRelated className={classes['article--related']} />
                        </div>
                    </aside>
                </article>
            </div>
        </section>
    );
};

export default ArticleContext;
