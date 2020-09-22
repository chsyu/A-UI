import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";

import ShoppingAction from "../components/ShoppingAction"
import ProductDetail from "../components/ProductDetail";
import products from "../json/data.json";
import { IPRODUCT, IParams } from "../interface";

function ProductScreen({ match }: RouteComponentProps<IParams>) {
  const product = products.find(
    (x) => x._id === match.params.id
  ) as IPRODUCT;
  return (
    <div>
      <div className="back-to-result">
        <Link to="/">Back to result</Link>
      </div>
      <div className="details">
        <ProductDetail product={product} />
        <ShoppingAction price={product.price} />
      </div>
    </div>
  );
}
export default ProductScreen;
