import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StateContext, DispatchContext } from "../contexts";
import { CLOSE_ASIDE } from "../constants/appConstants"

const Aside = () => {
  const dispatch = useContext(DispatchContext);
  const state = useContext(StateContext);

  return (
    <aside className={`${state.open ? "sidebar open" : "sidebar"}`}>
      <h3 className="sidebar-header">Shopping Categories</h3>
      <button
        className="sidebar-close-button hideLarge"
        onClick={() => dispatch({type: CLOSE_ASIDE})}
      >
        x
      </button>
      <ul>
        <li>
          <Link to="index.html">Pants</Link>
        </li>

        <li>
          <Link to="index.html">Shirts</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Aside;
