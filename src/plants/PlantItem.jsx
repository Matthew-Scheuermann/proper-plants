const PlantItem = ({ individualPlant, addToCart }) => {
  const addPlant = () => {
    addToCart(individualPlant);
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
