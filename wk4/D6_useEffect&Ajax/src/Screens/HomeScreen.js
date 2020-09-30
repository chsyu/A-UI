import React, { useContext } from 'react';

import Product from "../components/Product";
import { StateContext } from "../contexts"

const HomeScreen = () => {
  const state = useContext(StateContext);

  return (
    <ul className="products">
      {state.jsonData.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </ul>
  );
}
export default HomeScreen;