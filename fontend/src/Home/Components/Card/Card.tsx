import React, { useEffect, useState } from "react";
import Styles from "./Card.module.css";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";

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
    <li className={Styles.cardContainer}>
      <div className={Styles.cardSize}>
        <a href="/ProductPage">
          <img alt="robot" src={require(`../../Assets/ProductImg/${pig}`)} />
        </a>
        <FcLikePlaceholder className={Styles.like} />
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
  );
};
export default Card; //導出組件
