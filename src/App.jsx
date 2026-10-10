import { useState } from "react";
import PLANTS from "./data";
import PlantList from "./plants/PlantList";
import Cart from "./cart/Cart";

const App = () => {
  const testArray = [
    { id: 1, image: "🌿", name: "Fern", quantity: 3 },
    { id: 2, image: "🌿", name: "Leaf", quantity: 5 },
    { id: 3, image: "🌿", name: "Pine Needle", quantity: 1 },
  ];
  return (
    <section>
      <h1>Proper Plants</h1>
      <section>
        <PlantList plants={PLANTS} />

        <Cart items={testArray} />
      </section>
    </section>
  );
};

export default App;
