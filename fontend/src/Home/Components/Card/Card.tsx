import React, { useEffect, useState } from "react";
import Styles from "./Card.module.css";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";

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

const Card: React.FC<CardProps> = ({
  ID,
  product_name,
  author_name,
  product_copy,
  price,
  pic_path,
  sell_count,
  file_type,
}) => {
  // let a = products[0]["pic_path"].split(" ");
  const a = pic_path.split(" ");
  // console.log(a[0]);

  return (
    <li className={Styles.cardContainer}>
      <div className={Styles.cardSize}>
        <a href={`/Product/1/${ID}`}>
          {/* <img alt="robot" src={require(`../../Assets/ProductImg/${a[0]}`)} /> */}
          <img
            alt="圖片無法顯示"
            src={`http://localhost:3001/Home/ProductImg/${a[0]}`}
          />
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
