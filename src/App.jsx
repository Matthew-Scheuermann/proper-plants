import PlantItem from "./plants/PlantItem";
import { useState } from "react";
import PLANTS from "./data";

const App = () => {
  return (
    <section>
      <h1>Proper Plants</h1>
      <section>
        <PlantItem individualPlant={PLANTS[0]} />
      </section>
    </section>
  );
};

export default App;
