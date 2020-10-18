import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DispatchContext, StateContext } from "../contexts";
import actionType from "../constants"

const Header = () => {
    const dispatch = useContext(DispatchContext);
    const { cartItems } = useContext(StateContext);

    return (
      <header className="header">
        <div className="brand">
          <button
            className="hideLarge"
            onClick={() => dispatch({ type: actionType.OPEN_ASIDE })}
          >
            &#9776;
          </button>
          <Link to="/">amazona</Link>
        </div>
        <div className="header-links">
          <Link to="/cart">
            Cart
            {cartItems.length > 0 && (
              <span className="badge">{cartItems.length}</span>
            )}
          </Link>{" "}
          <a href="signin.html">Sign In</a>
        </div>
      </header>
    );
}

export default Header;