import React from "react";
import Style from "./EditCard.module.css";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { FaTrashAlt, FaEdit } from "react-icons/fa";

interface CardProps {
  id: number;
  product_name: string;
  author_name: string;
  product_copy: string;
  price: number;
  pic_path: string;
  sell_count: number;
  file_type: string;
}
const Card: React.FC<CardProps> = ({
  id,
  product_name,
  author_name,
  product_copy,
  price,
  pic_path,
  sell_count,
  file_type,
}) => {
  const pig = "book2-2.webp";
  return (
    <div className={Style.cardContainer}>
      <div className={Style.cardSize}>
        <a href="/ProductPage">
          <img alt="robot" src={require(`../../Assets/ProductImg/${pig}`)} />
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
export default Card; //導出組件
