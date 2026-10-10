import PlantItem from "./PlantItem";

const PlantList = ({ plants }) => {
  return (
    <section>
      <ul>
        {plants.map((plant) => (
          <PlantItem key={plant.id} individualPlant={plant} />
        ))}
      </ul>
    </section>
  );
};

export default PlantList;
