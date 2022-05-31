import React from "react";
import Style from "./EditCard.module.css";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { FaTrashAlt, FaEdit } from "react-icons/fa";

interface CardProps {
  ID: number;
  product_name: string;
  author_name: string;
  product_copy: string;
  price: number;
  pic_path: string;
  sell_count: number;
  file_type: string;
}
const EditCard: React.FC<CardProps> = ({
  ID,
  product_name,
  author_name,
  product_copy,
  price,
  pic_path,
  sell_count,
  file_type,
}) => {
  const a = pic_path.split(" ");
  return (
    <div className={Style.cardContainer}>
      <div className={Style.cardSize}>
        <a href={`/MyProduct/1/${ID}`}>
          {/* <img alt="robot" src={require(`../../Assets/ProductImg/${a[0]}`)} /> */}
          <img
            alt="圖片無法顯示"
            src={`http://localhost:3001/ProductImg/${a[0]}`}
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
              <FaTrashAlt className={Style.icons} />
            </a>
            <a href="/EditProductPage">
              <FaEdit className={Style.icons} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditCard; //導出組件
