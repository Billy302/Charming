// 編輯尚未製作
import React from 'react'
import Swal from 'sweetalert2'
import Style from './EditCard.module.css'
import { FaTrashAlt, FaEdit } from 'react-icons/fa'

interface CardProps {
  userID: number
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
    Swal.fire({
      icon: 'success',
      title: '刪除成功!',
      text: '刪除成功',
    })
  }

  return (
    <div className={Style.cardContainer}>
      <div className={Style.cardSize}>
        <a href={`/shopcenter/${ID}`}>
          <img
            alt="圖片無法顯示"
            src={`http://localhost:3000/Home/ProductImg/${a[0]}`}
          />
          <h2>{product_name}</h2>
        </a>

        <a href="/shopcenter/myproductLook?page=1">{author_name}</a>

        <div className={Style.price}>
          <h3>${price}</h3>
          <div>
            <FaTrashAlt
              className={Style.icons}
              onClick={() => {
                deleteItem()
                window.location.reload()
              }}
            />
            <a href={`/shopcenter/EditProduct/${ID}`}>
              <FaEdit className={Style.icons} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default EditCard //導出組件
