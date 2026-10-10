const CartItem = ({ individualCartItem, changeQuantity }) => {
  const increaseQuantity = () => {
    changeQuantity(individualCartItem.id, 1);
  };

  const decreaseQuantity = () => {
    changeQuantity(individualCartItem.id, -1);
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
