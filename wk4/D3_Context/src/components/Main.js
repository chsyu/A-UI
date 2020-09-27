import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import HomeScreen from "../Screens/HomeScreen";
import ProductScreen from "../Screens/ProductScreen";
import { TestContext } from "../contexts"

const Main = () => {
   const { msg } = useContext(TestContext)
   return (
     <main className="main">
       <div className="content">
       <h1>{msg}</h1>
         <Switch>
           <Route path="/product/:id" component={ProductScreen} />
           <Route path="/" exact={true} component={HomeScreen} />
         </Switch>
       </div>
     </main>
   );
}

export default Main;