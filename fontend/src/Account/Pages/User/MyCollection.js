import { Link } from 'react-router-dom'
import style from './User.module.css'
import LoginNav from '../../../Home/Components/LoginNav/LoginNav'
import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb'
import { useState, useEffect } from 'react'
import Trending from '../../../Blog/Components/FrontPage/TrendingArticle/Trending'
import MyLoveProduct from '../../../Home/Components/MyLikeProduct/MyLikeProduct'
import MyCollectionButton from '../../Components/MyCollectionButton/MyCollectionButton'
import { GiConsoleController } from 'react-icons/gi'

function MyCollection() {
  // -------- render 收藏文章功能 --------
  // 紀錄所有收藏的文章
  const [allFavArticle, setAllFavArticle] = useState([])
  // 紀錄當下的使用者
  const userId = localStorage.getItem('id')
  // render user 追蹤的文章
  useEffect(() => {
    fetch(`http://localhost:3001/blog/fav/all?userid=${userId}`)
      .then((res) => res.json())
      .then((data) => setAllFavArticle(data))
  }, [])

  // render 商品或文章功能
  const [renderProduct, setRenderProduct] = useState(true)

  // 點選文章收藏時觸發
  const renderArticleHandler = () => {
    setRenderProduct(false)
  }
  // 點選商品收藏時觸發
  const renderProductHandler = () => {
    setRenderProduct(true)
  }

  return (
    <>
      <LoginNav />
      <BreadCrumb />
      {/* 上方選單 */}
      <nav className={style.navLeft}>
        <Link to="/account" className={style.unactive}>
          會員中心 <hr />
        </Link>
        <Link to="/shoppinglist" className={style.unactive}>
          購買清單 <hr />
        </Link>
        <Link to="/collection" className={style.active}>
          我的收藏 <hr />
          {/* user 追蹤的文章 */}
        </Link>
      </nav>
      {/* 右側內文 */}
      <section className={style.dispalyFlex}>
        <MyCollectionButton
          onRenderProduct={renderProductHandler}
          onRenderArticle={renderArticleHandler}
        />
        <main className={style.main}>
          {renderProduct ? (
            <MyLoveProduct />
          ) : (
            allFavArticle.map((aritcle) => {
              return (
                <Link
                  to={`../blog/article/${aritcle.article_id}`}
                  key={aritcle.article_id}
                >
                  <Trending article={aritcle} key={aritcle.fav_id} />
                </Link>
              )
            })
          )}
        </main>
      </section>
    </>
  )
}

export default MyCollection
