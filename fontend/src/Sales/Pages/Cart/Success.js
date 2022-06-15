import React from "react";
import Style from "./Cart.module.css";
import check from "../../Assets/check.png";
function ComponentsName() {
  return (
    <div className={`${Style.emptyCart} ${Style.SuccessCart}`}>
      <div>
          <img src={check} />
          <p>訂單成立</p>
        {/* <a href="/Product/1">查看訂單</a> */}
      </div>
    </div>
  );
}

export default ComponentsName;
