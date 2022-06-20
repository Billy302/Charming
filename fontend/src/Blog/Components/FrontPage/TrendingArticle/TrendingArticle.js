import Trending from './Trending'
import classes from './TrendingArticle.module.css'
import { Link } from 'react-router-dom'
import Skeleton from '@mui/material/Skeleton'

const TrendingArticle = (props) => {
  return (
    <section>
      <h2
        className={`${classes['trending-article--title']} ${
          props.isDarkMode ? classes['active--title'] : ''
        }`}
      >
        本週熱門文章
      </h2>

      <div className={classes['trending-article']}>
        {/* 這邊用最外面的 Blog.js 傳進來的 useEffect 的 json 檔來 map 出 component */}
        {props.trendingArticle[0] ? (
          props.trendingArticle.map((articleData) => {
            return (
              <Link
                to={`article/${articleData.article_id}`}
                key={articleData.article_id}
              >
                <Trending article={articleData} key={articleData.article_id} />
              </Link>
            )
          })
        ) : (
          <div className={classes['trending-article--loading']}>
            <div className={classes['trending-article--loading__component']}>
              <Skeleton
                variant="rectangular"
                width={350}
                height={200}
                animation="wave"
              />
              <Skeleton width="30%" height="50%" animation="wave" />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default TrendingArticle
