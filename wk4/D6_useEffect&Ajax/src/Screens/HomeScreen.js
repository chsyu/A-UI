import React, { useContext } from 'react';

import Product from "../components/Product";
import { initialAppState, appReducer } from "../reducers/appReducer"
import { SET_JSON_DATA } from "../constants/appConstants"

const HomeScreen = () => {
  const [state, dispatch] = useReducer(appReducer, initialAppState)

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get("/api/products");
      dispatch({ type: SET_JSON_DATA, payload: data });
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