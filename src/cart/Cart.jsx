import CartItem from "./CartItem";

const Cart = ({ items }) => {
  return (
    <section>
      <h2>Cart</h2>
      <ul>
        {items.map((item) => (
          <CartItem key={item.id} individualCartItem={item} />
        ))}
      </ul>
    </section>
  );
};

export default Cart;
