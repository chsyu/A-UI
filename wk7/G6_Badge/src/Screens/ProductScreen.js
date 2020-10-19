import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Rating from "../components/Rating";

import { StateContext, DispatchContext } from "../contexts"
import actionType, { SERVER_URL } from "../constants";

function ProductScreen(props) {

  // const product = products.find(
  //   (x) => x._id === match.params.id
  // );

  const [qty, setQty] = useState(1);

  const { product, loading, error } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const productId = props.match.params.id;

  const handleAddToCart = () => {
    props.history.push("/cart/" + props.match.params.id + "?qty=" + qty);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        dispatch({ type: actionType.PRODUCT_DETAILS_REQUEST });
        const { data } = await axios.get(
          `${SERVER_URL}/api/products/${productId}`
        );
        dispatch({ type: actionType.PRODUCT_DETAILS_SUCCESS, payload: data });
      }catch(error){
        dispatch({ type: actionType.PRODUCT_DETAILS_FAIL, payload: error.message});
      }
    };
    fetchProduct();
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
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
                  <Rating
                    rating={product.rating}
                    numReviews={product.numReviews}
                  ></Rating>
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
                  Status:{" "}
                  {product.countInStock > 0 ? "In Stock" : "Unavailable."}
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
                    <button
                      onClick={handleAddToCart}
                      className="button primary"
                    >
                      Add to Cart
                    </button>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default ProductScreen;
