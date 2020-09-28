import React from "react";
import { Link } from "react-router-dom";
import { IPRODUCT } from "../interface";

const Product = (props:{product:IPRODUCT;}) => {
   const { product } = props;
   return (
     <li>
       <div className="product">
         <img className="product-image" src={product.image} alt="product" />
         <div className="product-name">
           <Link to={"/product/" + product._id}>{product.name}</Link>
         </div>
         <div className="product-brand">{product.brand}</div>
         <div className="product-price">${product.price}</div>
         <div className="product-rating">
           {product.rating} Stars ({product.numReviews} Reviews)
         </div>
       </div>
     </li>
   );
}

export default Product;