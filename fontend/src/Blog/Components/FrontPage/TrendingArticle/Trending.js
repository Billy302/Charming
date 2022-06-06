import classes from './Trending.module.css'

const Trending = (props) => {
<<<<<<< HEAD
    return (
        <div className={classes['trending-article']}>
            <img src={`http://localhost:3000/image/${props.article.article_image}.jpg`} alt=""></img>
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
=======
  return (
    <div className={classes['trending-article']}>
      <img
        src={`http://localhost:3000/blog/image/${props.article.article_image}.jpg`}
        alt=""
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
>>>>>>> 23d04c36c11044a97e803ae3df64f5a59838f249
        </div>
      </div>
    </div>
  )
}

export default Trending
