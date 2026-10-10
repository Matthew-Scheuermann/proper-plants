const CartItem = ({ individualCartItem }) => {
  const increaseQuantity = () => {
    console.log("increase by 1");
  };

  const decreaseQuantity = () => {
    console.log("decrease by 1");
  };
  return (
    <li>
      {individualCartItem.image}
      {individualCartItem.name}
      <button onClick={decreaseQuantity}>-</button>
      <span>{individualCartItem.quantity}</span>
      <button onClick={increaseQuantity}>+</button>
    </li>
  );
};

export default CartItem;
