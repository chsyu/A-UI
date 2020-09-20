import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";

import './App.css';

const openMenu = () => {
  const sidebar = document.querySelector(".sidebar") as HTMLElement;
  sidebar.classList.add("open");
}
const closeMenu = () => {
  const sidebar = document.querySelector(".sidebar") as HTMLElement;
  sidebar.classList.remove("open")
}

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button className="hideLarge" onClick={openMenu}>
              &#9776;
            </button>
            <Link to="/">amazona</Link>
          </div>
          <div className="header-links">
            <a href="cart.html">Cart</a>
            <a href="signin.html">Sign In</a>
          </div>
        </header>
        <aside className="sidebar">
          <h3 className="sidebar-header">Shopping Categories</h3>
          <button
            className="sidebar-close-button hideLarge"
            onClick={closeMenu}
          >
            x
          </button>
          <ul>
            <li>
              <a href="index.html">Pants</a>
            </li>

            <li>
              <a href="index.html">Shirts</a>
            </li>
          </ul>
        </aside>
        <main className="main">
          <div className="content">
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
          </div>
        </main>
        <footer className="footer">All right reserved.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
