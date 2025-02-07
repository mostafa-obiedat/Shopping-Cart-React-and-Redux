import React from "react";
import ListProduct from "./components/ListProduct";
import Cart from "./components/Cart";

const App = () => {
  return (
    <div class="mx-80">
      <h1 class="mt-20">Athwabna Shop</h1>
      <ListProduct />
      <Cart />
    </div>
  );
};

export default App;
