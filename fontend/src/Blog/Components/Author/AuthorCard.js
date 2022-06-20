import classes from './AuthorCard.module.css'
import Trending from '../FrontPage/TrendingArticle/Trending'
import { Link } from 'react-router-dom'

const AuthorCard = (props) => {
  // 拿來 render 使用者所點選的該為作者所寫過的文章

  const { authorData } = props

  return (
    <div className={classes['author-card']}>
      {authorData.map((articleData) => {
        return (
          <Link
            to={`../blog/article/${articleData.article_id}`}
            key={articleData.article_id}
          >
            <Trending
              article={articleData}
              key={articleData.article_id}
              className={classes['author-card--loop']}
            />
          </Link>
        )
      })}
    </div>
  )
}

export default AuthorCard
