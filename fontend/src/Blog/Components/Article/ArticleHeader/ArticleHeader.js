import classes from './ArticleHeader.module.css'
import article4 from './img/article4.jpg'
import { useEffect } from 'react'

const ArticleHeader = (props) => {
<<<<<<< HEAD
    return (
        <header>
            <div className={classes['article--header']}>
                <div
                    className={classes['article--header__title']}
                    dangerouslySetInnerHTML={{ __html: props.trendingArticle.article_title }}
                ></div>
                <div className={classes['article--header__image']}>
                    <img src={`http://localhost:3000/image/${props.trendingArticle.article_image}.jpg`} alt=""></img>
                </div>
            </div>
        </header>
    );
};
=======
  return (
    <header>
      <div className={classes['article--header']}>
        <div
          className={classes['article--header__title']}
          dangerouslySetInnerHTML={{
            __html: props.trendingArticle.article_title,
          }}
        ></div>
        <div className={classes['article--header__image']}>
          <img
            src={`http://localhost:3000/blog/image/${props.trendingArticle.article_image}.jpg`}
            alt=""
          ></img>
        </div>
      </div>
    </header>
  )
}
>>>>>>> 23d04c36c11044a97e803ae3df64f5a59838f249

export default ArticleHeader
