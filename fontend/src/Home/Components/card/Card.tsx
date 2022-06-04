import React, { useEffect, useState } from 'react'
import Styles from './Card.module.css'
import { FcLikePlaceholder, FcDislike } from 'react-icons/fc'
import { useLocation, useParams } from 'react-router-dom'

interface CardProps {
  userID :number
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

  // 取得當前網址資訊
  const location = useLocation()

  // 抓取網址中的id
  const searchParams = new URLSearchParams(location.search)
  let nowSort = searchParams.get('id')

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

  let loveBlock: any = []

  if (loveState === 'true') {
    loveBlock.push(
      <FcLikePlaceholder className={Styles.like} onClick={check} />
    )
  } else if (loveState === 'false') {
    loveBlock.push(<FcDislike className={Styles.like} onClick={check} />)
  }
  return (
    <li className={Styles.cardContainer}>
      <div id="card" className={Styles.cardSize}>
        <a href={`/Product/${userID}/${ID}`}>
          {/* <img alt="robot" src={require(`../../Assets/ProductImg/${a[0]}`)} /> */}
          <img
            alt="圖片無法顯示"
            src={`http://localhost:3000/Home/ProductImg/${a[0]}`}
          />
        </a>
        {loveState == 'true' ? (
          <FcLikePlaceholder className={Styles.like} onClick={check} />
        ) : (
          <FcDislike className={Styles.like} onClick={check} />
        )}
        <a href="">
          <h2>{product_name}</h2>
        </a>
        <a href="">
          <p>{author_name}</p>
        </a>

        <div className={Styles.price}>
          <h3>${price}</h3>
          <p>已售出：{sell_count}</p>
        </div>
      </div>
    </li>
  )
}
export default Card //導出組件
