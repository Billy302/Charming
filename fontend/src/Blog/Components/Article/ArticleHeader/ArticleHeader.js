import classes from './ArticleHeader.module.css'

const ArticleHeader = (props) => {
  // render article title and image
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

export default ArticleHeader
