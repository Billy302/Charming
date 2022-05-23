import React from "react";
import Styles from "./Card.module.css";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";

interface RobotProps {
  id: number;
  name: string;
  email: string;
  price: number;
}
const Card: React.FC<RobotProps> = ({ id, name, email, price }) => {
  return (
    <div className={Styles.cardContainer}>
      <div className={Styles.cardSize}>
        <img alt="robot" src={`https://robohash.org/${id}`} />
        <FcLikePlaceholder className={Styles.like} />
        <h2>{name}</h2>
        <p>{email}</p>
        <div className={Styles.price}>
          <h3>${price}</h3>
          <p>已售出：</p>
        </div>
      </div>
    </div>
  );
};
export default Card; //導出組件
