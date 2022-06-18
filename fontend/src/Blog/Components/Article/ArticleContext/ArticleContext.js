import classes from './ArticleContext.module.css'
import AuthorCard from '../AuthorCard/AuthorCard'
import ArticleShare from '../ArticleShare/ArticleShare'
import PillBtn from '../../UI/PillBtn'
import SearchBar from '../../SearchBar/SearchBar'

const ArticleContext = (props) => {
  const { isFollowingAuthor } = props

  // render 文章的 component
  return (
    <section>
      <div>
        <article className={classes['article']}>
          <div className={classes['article--context']}>
            <div className={classes['article--context__tag']}>
              {/* <PillBtn>#最新消息</PillBtn>
              <PillBtn>#設計</PillBtn>
              <PillBtn>#專訪</PillBtn> */}
            </div>
            {/* render 文章內容 */}
            <div
              className={classes['article--context__render']}
              dangerouslySetInnerHTML={{
                __html: props.trendingArticle.article_content,
              }}
            ></div>
            <div className={classes['article--context__share']}>
              <ArticleShare />
            </div>
          </div>
          <aside className={classes['article--trending-related']}>
            <div>
              <AuthorCard
                trendingArticle={props.trendingArticle}
                isFollowingAuthor={isFollowingAuthor}
              />
              <SearchBar className={classes.searchbar} />
            </div>
            <div classname="haha" type="input" test={isFollowingAuthor}></div>
          </aside>
        </article>
      </div>
    </section>
  )
}

export default ArticleContext
