import React from "react";
import { Link } from "react-router-dom";

const Aside = ({open, onSetAsideOpen}) => {
   return (
     <aside className={`${open ? "sidebar open" : "sidebar"}`}>
       <h3 className="sidebar-header">Shopping Categories</h3>
       <button
         className="sidebar-close-button hideLarge"
         onClick={() => onSetAsideOpen(false)}
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
}

export default Aside;