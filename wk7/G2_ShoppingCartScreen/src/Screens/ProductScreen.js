import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { StateContext, DispatchContext } from "../contexts"
import ShoppingAction from "../components/ShoppingAction";
import ProductDetail from "../components/ProductDetail";
import products from "../json/data.json";
import { SET_PRODUCT_DATA } from "../constants/appConstants"

function ProductScreen(props) {

  // const product = products.find(
  //   (x) => x._id === match.params.id
  // );

  const [qty, setQty] = useState(1);

  const { product } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const productId = props.match.params.id;

  const handleAddToCart = () => {
    props.history.push("/cart/" + props.match.params.id + "?qty=" + qty);
  };

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
              <div>{product.description}</div>
            </li>
          </ul>
        </div>
        <div className="details-action">
          <ul>
            <li>Price: {product.price}</li>
            <li>
              Status: {product.countInStock > 0 ? "In Stock" : "Unavailable."}
            </li>
            <li>
              Qty:{" "}
              <select
                value={qty}
                onChange={(e) => {
                  setQty(e.target.value);
                }}
              >
                {[...Array(product.countInStock).keys()].map((x) => (
                  <option key={x + 1} value={x + 1}>
                    {x + 1}
                  </option>
                ))}
              </select>
            </li>
            <li>
              {product.countInStock > 0 && (
                <button onClick={handleAddToCart} className="button primary">
                  Add to Cart
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default ProductScreen;
