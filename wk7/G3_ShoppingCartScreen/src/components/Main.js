import React from "react";
import { Route, Switch } from "react-router-dom";
import HomeScreen from "../Screens/HomeScreen";
import ProductScreen from "../Screens/ProductScreen";
import CartScreen from "../Screens/CartScreen";

const Main = () => {
   return (
     <main className="main">
       <div className="content">
         <Switch>
           <Route path="/product/:id" component={ProductScreen} />
           <Route path="/cart/:id?" component={CartScreen} />
           <Route path="/" exact={true} component={HomeScreen} />
         </Switch>
       </div>
     </main>
   );
}

export default Main;