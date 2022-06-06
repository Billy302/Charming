import classes from './AuthorCard.module.css'
// import logo from '../../../../Home/assets/developers5.png';
import { useState } from 'react'
import PillBtn from '../../UI/PillBtn'

const AuthorCard = (props) => {
  const [followAuthor, setFollowAuthor] = useState(false)
  const [favArticle, setFavArticle] = useState(false)

  const followAuthorHandler = () => {
    setFollowAuthor(!followAuthor)
  }

  const favArticleHandler = () => {
    setFavArticle(!favArticle)
  }

  return (
    <>
      <div className={classes['author-card']}>
        <div className={classes['author-card--body']}>
          {/* <img src={logo}></img> */}
          <div className={classes['author-card--body__content']}>
            <h2>中山路追風少年</h2>
            <p>在一個月內被開兩張超速罰單，從此引退的中山路追風少年。</p>
          </div>
        </div>
      </div>
      <div className={classes['author-card--footer']}>
        <PillBtn
          onClick={followAuthorHandler}
          className={classes['author-card--footer__btn']}
        >
          {!followAuthor ? '訂閱作者' : '取消訂閱'}
        </PillBtn>

        <PillBtn
          onClick={favArticleHandler}
          className={classes['author-card--footer__btn']}
        >
          {!favArticle ? '收藏作者' : '取消收藏'}
        </PillBtn>
      </div>
    </>
  )
}

export default AuthorCard
