import React from 'react';
import products from '../json/data.json';
import Product from "../components/Product";

const HomeScreen = () => {
  return (
    <ul className="products">
      {products.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </ul>
  );
}
export default HomeScreen;