import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DispatchContext } from "../contexts";

const Header = ({onSetAsideOpen}) => {
    const dispatch = useContext(DispatchContext);

    return (
      <header className="header">
        <div className="brand">
          <button className="hideLarge" onClick={() => dispatch({type: "openAside"})}>
            &#9776;
          </button>
          <Link to="/">amazona</Link>
        </div>
        <div className="header-links">
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign In</a>
        </div>
      </header>
    );
}

export default Header;