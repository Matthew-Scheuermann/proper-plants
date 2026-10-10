import CartItem from "./CartItem";

const Cart = ({ items, changeQuantity }) => {
  return (
    <section>
      <h2>Cart</h2>
      <ul>
        {items.map((item) => (
          <CartItem
            key={item.id}
            individualCartItem={item}
            changeQuantity={changeQuantity}
          />
        ))}
      </ul>
    </section>
  );
};

export default Cart;
