import PlantItem from "./PlantItem";

const PlantList = ({ plants, addToCart }) => {
  return (
    <section>
      <h2>Plants</h2>
      <ul>
        {plants.map((plant) => (
          <PlantItem
            key={plant.id}
            individualPlant={plant}
            addToCart={addToCart}
          />
        ))}
      </ul>
    </section>
  );
};

export default PlantList;
