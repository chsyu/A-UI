import React, { useReducer, useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Aside from "./components/Aside";
import Main from "./components/Main";
import './App.css';

import { SET_PRODUCTS_DATA } from "./constants/appConstants";
import { StateContext, DispatchContext } from "./contexts"
import { initialAppState, appReducer } from "./reducers/appReducer"

function App() {
  const [state, dispatch] = useReducer(appReducer, initialAppState)

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get("/api/products");
      dispatch({ type: SET_PRODUCTS_DATA, payload: data });
    }
    fetchData();
  }, []);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        <BrowserRouter>
          <div className="grid-container">
            <Header />
            <Aside />
            <Main />
            <Footer />
          </div>
        </BrowserRouter>
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}

export default App;
