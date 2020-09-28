import React from "react";
import { Link } from "react-router-dom";

const Header = (props: { onSetAsideOpen: (openState: boolean) => void;}) => {
    return (
      <header className="header">
        <div className="brand">
          <button className="hideLarge" onClick={() => props.onSetAsideOpen(true)}>
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