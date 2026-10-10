import { useState } from "react";
import PLANTS from "./data";
import PlantList from "./plants/PlantList";

const App = () => {
  return (
    <section>
      <h1>Proper Plants</h1>
      <section>
        <PlantList plants={PLANTS} />
      </section>
    </section>
  );
};

export default App;
