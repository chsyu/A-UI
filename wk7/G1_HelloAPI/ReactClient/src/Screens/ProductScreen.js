import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { StateContext, DispatchContext } from "../contexts"
import ShoppingAction from "../components/ShoppingAction";
import ProductDetail from "../components/ProductDetail";
import products from "../json/data.json";
import { SET_PRODUCT_DATA } from "../constants/appConstants"

function ProductScreen({ match }) {

  // const product = products.find(
  //   (x) => x._id === match.params.id
  // );

  const { product } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const productId = match.params.id;

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${productId}`);
      dispatch({ type: SET_PRODUCT_DATA, payload: data });
    };
    fetchProduct();
  }, []);

  return (
    <div>
      <div className="back-to-result">
        <Link to="/">Back to result</Link>
      </div>
      <div className="details">
        <ProductDetail product={product} />
        <ShoppingAction price={product.price} />{" "}
      </div>
    </div>
  );
}
export default ProductScreen;
