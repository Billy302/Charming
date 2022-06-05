import React from 'react'
import Style from './EditCard.module.css'
import { FcLikePlaceholder, FcLike } from 'react-icons/fc'
import { FaTrashAlt, FaEdit } from 'react-icons/fa'

interface CardProps {
  userID : number
  ID: number
  product_name: string
  author_name: string
  product_copy: string
  price: number
  pic_path: string
  sell_count: number
  file_type: string
}
const EditCard: React.FC<CardProps> = ({
  userID,
  ID,
  product_name,
  author_name,
  product_copy,
  price,
  pic_path,
  sell_count,
  file_type,
}) => {
  const a = pic_path.split(' ')
  function deleteItem() {
    fetch(`http://localhost:3001/Sales/api/product/${ID}`, {
      method: 'delete',
    })
  }

  return (
    <div className={Style.cardContainer}>
      <div className={Style.cardSize}>
        <a href={`/MyProduct/${userID}/${ID}`}>
          {/* <img alt="robot" src={require(`../../Assets/ProductImg/${a[0]}`)} /> */}
          <img
            alt="圖片無法顯示"
            src={`http://localhost:3000/Home/ProductImg/${a[0]}`}
          />
        </a>
        <FcLikePlaceholder className={Style.like} />
        <a href="">
          <h2>{product_name}</h2>
        </a>
        <a href="">
          <p>{author_name}</p>
        </a>

        <div className={Style.price}>
          <h3>${price}</h3>
          <div>
            <a href="">
              <FaTrashAlt className={Style.icons} onClick={deleteItem} />
            </a>
            <a href={`/MyProduct/Edit/1/${ID}`}>
              <FaEdit className={Style.icons} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default EditCard //導出組件
