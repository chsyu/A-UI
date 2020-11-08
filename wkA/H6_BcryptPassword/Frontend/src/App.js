import React, { useReducer, useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import Cookie from "js-cookie";

import actionType from "./constants";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Aside from "./components/Aside";
import Main from "./components/Main";
import './App.css';

import { StateContext, DispatchContext } from "./contexts"
import { initialAppState, appReducer } from "./reducers/appReducer"

function App() {
  const [state, dispatch] = useReducer(appReducer, initialAppState)

  useEffect(() => {
    dispatch({
      type: actionType.USER_INIT_INFO,
      payload: Cookie.getJSON("userInfo") || null,
    });
    dispatch({
      type: actionType.CART_INIT_ITEMS,
      payload: Cookie.getJSON("cartItems") || [],
    });     
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
