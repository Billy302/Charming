import classes from './ArticleList.module.css'
import Trending from '../FrontPage/TrendingArticle/Trending'
import { Link } from 'react-router-dom'

const ArticleList = (props) => {
  // 這個 component 是 render 所有精選文章中的小主題的文章
  // 拿所有精選文章中的文章
  const { article } = props

  return (
    <div className={classes['article-list']}>
      <h1
        className={classes['article-list--title']}
      >{`搜尋 ${article[0]?.topic_desc}`}</h1>

      <div className={classes['article-list--cards']}>
        {article.map((data, item) => {
          return (
            <Link
              to={`../blog/article/${data.article_id}`}
              key={data.article_ID}
            >
              <Trending article={data} />;
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default ArticleList
