import React from "react";
import { useParams } from "react-router-dom";

function ProductDetail(){
  const params = useParams();
  console.log(params);
  return (
    <div>
      <h1>Product</h1>
      <p>產品ＩＤ：{params.productId}</p>
    </div>
  );
};

export default ProductDetail;
