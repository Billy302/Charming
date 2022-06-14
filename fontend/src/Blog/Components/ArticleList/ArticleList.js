import classes from './ArticleList.module.css'
import Trending from '../FrontPage/TrendingArticle/Trending'
import article1 from './img/article1.jpg'
import { useParams, Link, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'

const ArticleList = (props) => {
  const [searchArticle, setSearchArticle] = useState([])
  return (
    <div className={classes['article-list']}>
      <h1
        className={classes['article-list--title']}
      >{`搜尋 ${props.article[0]?.topic_desc}`}</h1>

      <div className={classes['article-list--cards']}>
        {props.article.map((data, item) => {
          return (
            <Link
              to={`../blog/article/${data.article_id}`}
              key={data.article_ID}
            >
              <Trending article={data} img={article1} />;
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default ArticleList
