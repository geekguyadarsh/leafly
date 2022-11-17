import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
import Collection from "./pages/collection/Collection";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/checkout/Checkout";
import Orders from "./pages/orders/Orders";
import ProductInfo from "./pages/productInfo/ProductInfo";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={Collection} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/checkout" exact component={Checkout} />
        <Route path="/orders" exact component={Orders} />
        <Route path="/product" exact component={ProductInfo} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
