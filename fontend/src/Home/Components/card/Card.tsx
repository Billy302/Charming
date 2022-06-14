import React, { useState } from 'react'
import Styles from './Card.module.css'
import { FcLikePlaceholder, FcLike } from 'react-icons/fc'

interface CardProps {
  userID: number
  ID: number
  product_name: string
  author_name: string
  product_copy: string
  price: number
  pic_path: string
  sell_count: number
  love: string
}

const Card: React.FC<CardProps> = ({
  userID,
  ID,
  product_name,
  author_name,
  product_copy,
  price,
  pic_path,
  sell_count,
  love,
}) => {
  // let a = products[0]["pic_path"].split(" ");
  const a = pic_path.split(' ')

  let nowSort = localStorage.getItem('id') ? localStorage.getItem('id') : ''

  const [loveState, setLoveState] = useState(love)

  const check = async () => {
    if (loveState == 'true') {
      setLoveState('false')
      fetch(
        `http://localhost:3001/Sales/api/love?productID=${ID}&userID=${nowSort}`,
        {
          method: 'delete',
        }
      )
    } else {
      setLoveState('true')
      fetch(
        `http://localhost:3001/Sales/api/love?productID=${ID}&userID=${nowSort}`,
        {
          method: 'post',
        }
      )
    }
  }

  return (
    <li className={Styles.cardContainer}>
      <div id="card" className={Styles.cardSize}>
        {userID ? (
          <a href={`/Product/${ID}`}>
            {' '}
            <img
              alt="圖片無法顯示"
              src={`http://localhost:3000/Home/ProductImg/${a[0]}`}
            />
            <h2>{product_name}</h2>
          </a>
        ) : (
          <a href={`/Product/${ID}`}>
            {' '}
            <img
              alt="圖片無法顯示"
              src={`http://localhost:3000/Home/ProductImg/${a[0]}`}
            />
            <h2>{product_name}</h2>
          </a>
        )}

        {nowSort ? (
          loveState == 'true' ? (
            <FcLike className={Styles.like} onClick={check} />
          ) : (
            <FcLikePlaceholder className={Styles.like} onClick={check} />
          )
        ) : (
          ''
        )}

        <a href="/shopcenter/myproductLook?page=1">{author_name}</a>

        <div className={Styles.price}>
          <h3>${price}</h3>
          <p>已售出：{sell_count}</p>
        </div>
      </div>
    </li>
  )
}
export default Card //導出組件
