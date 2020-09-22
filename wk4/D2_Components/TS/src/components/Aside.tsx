import React from "react";
import { Link } from "react-router-dom";

const Aside = (props: { open: boolean; onSetAsideOpen: (openState: boolean) => void}) => {
   return (
     <aside className={`${props.open ? "sidebar open" : "sidebar"}`}>
       <h3 className="sidebar-header">Shopping Categories</h3>
       <button
         className="sidebar-close-button hideLarge"
         onClick={() => props.onSetAsideOpen(false)}
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