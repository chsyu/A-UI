import React from "react";
import { IPRODUCT } from "../interface";

const ProductDetail = (props:{product:IPRODUCT;}) => {
   const { product } = props;
   return (
      <>
         <div className="details-image">
            <img src={product.image} alt="product"></img>
         </div>
         <div className="details-info">
            <ul>
               <li>
                  <h4>{product.name}</h4>
               </li>
               <li>
                  {product.rating} Stars ({product.numReviews} Reviews)
            </li>
               <li>
                  Price: <b>${product.price}</b>
               </li>
               <li>
                  Description:
              <div></div>
               </li>
            </ul>
         </div>

      </>      
   )
}

export default ProductDetail;