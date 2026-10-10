const PlantItem = ({ individualPlant }) => {
  const addPlant = () => {
    console.log("add to cart");
  };

  return (
    <li>
      {individualPlant.image}
      {individualPlant.name}
      <button onClick={addPlant}>Add to cart</button>
    </li>
  );
};

export default PlantItem;
