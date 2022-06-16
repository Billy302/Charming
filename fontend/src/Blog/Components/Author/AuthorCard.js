import classes from './AuthorCard.module.css'
import Trending from '../FrontPage/TrendingArticle/Trending'
import { Link } from 'react-router-dom'

const AuthorCard = (props) => {
  return (
    <div className={classes['author-card']}>
      {props.authorData.map((articleData) => {
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
