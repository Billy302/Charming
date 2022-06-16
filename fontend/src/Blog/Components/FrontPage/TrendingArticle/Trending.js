import classes from './Trending.module.css'

const Trending = (props) => {
  return (
    <div className={`${classes['trending-article']} ${props.className}`}>
      <img
        src={`http://localhost:3000/blog/image/${props.article.article_image}.jpg`}
        alt=""
        className={classes.test}
      ></img>

      <div className={classes['trending-article--context']}>
        <h2
          className={`${classes['trending-article--context__title']} ${
            props.isDarkMode ? classes['active-title'] : ''
          }`}
          dangerouslySetInnerHTML={{ __html: props.article.article_title }}
        ></h2>
        <div className={classes['trending-article--context__render-article']}>
          <p
            dangerouslySetInnerHTML={{ __html: props.article.article_content }}
          ></p>
        </div>
      </div>
    </div>
  )
}

export default Trending
