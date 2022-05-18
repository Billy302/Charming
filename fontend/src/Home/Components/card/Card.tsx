import React from "react";
import Styles from "./Card.module.css";

interface RobotProps {
  id: number;
  name: string;
  email: string;
}
const Card: React.FC<RobotProps> = ({ id, name, email }) => {
  return (
    <div className={Styles.cardContainer}>
      <img alt="robot" src={`https://robohash.org/${id}`} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};
export default Card; //導出組件
