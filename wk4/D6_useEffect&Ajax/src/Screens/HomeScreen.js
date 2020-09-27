import React, { useReducer, useEffect } from 'react';
import axios from "axios";

import Product from "../components/Product";
import { initialAppState, appReducer } from "../reducers/appReducer"

const HomeScreen = () => {
  const [state, dispatch] = useReducer(appReducer, initialAppState)

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get("/api/products");
      dispatch({ type: "SETJSONDATA", payload: data });
    }
    fetchData();
  }, []);

  return (
    <ul className="products">
      {state.jsonData.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </ul>
  );
}
export default HomeScreen;