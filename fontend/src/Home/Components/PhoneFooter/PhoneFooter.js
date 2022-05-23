import React from "react";
import Style from "./PhoneFooter.module.css";
import { ImProfile } from "react-icons/im";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { GiOpenBook, GiDiscussion } from "react-icons/gi";
function PhoneFooter() {
  return (
    <div>
      <div className={Style.phoneFooter}>
        <a href="/Portfolio">
          <ImProfile className={Style.icon}/>
          <p>柴米人</p>
        </a>
        <a href="/Blog">
          <GiOpenBook className={Style.icon}/>
          <p>柴訊</p>
        </a>
        <a href="/Product">
          <MdOutlineVolunteerActivism className={Style.icon}/>
          <p>精選商品</p>
        </a>
        <a href="/Communication">
          <GiDiscussion className={Style.icon}/>
          <p>柴社</p>
        </a>
        <a href="/account">
          <FaUser className={Style.icon}/>
          <p>會員中心</p>
        </a>
      </div>
    </div>
  );
}

export default PhoneFooter;
