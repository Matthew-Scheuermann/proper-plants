import { useState } from "react";
import PLANTS from "./data";
import PlantList from "./plants/PlantList";
import CartItem from "./cart/CartItem";

const App = () => {
  const testItem = { id: 1, image: "🌿", name: "Fern", quantity: 3 };
  return (
    <section>
      <h1>Proper Plants</h1>
      <section>
        <PlantList plants={PLANTS} />
        <CartItem individualCartItem={testItem} />
      </section>
    </section>
  );
};

export default App;
