import { useState } from "react";
import PLANTS from "./data";
import PlantList from "./plants/PlantList";
import Cart from "./cart/Cart";

const App = () => {
  const [shoppingCart, setShoppingCart] = useState([]);

  const addToCart = (plant) => {
    const alreadyInCart = shoppingCart.some((item) => item.id === plant.id);

    if (!alreadyInCart) {
      const newItem = { ...plant, quantity: 1 };
      setShoppingCart([...shoppingCart, newItem]);
    } else {
      const updatedCart = shoppingCart.map((item) => {
        if (item.id === plant.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      setShoppingCart(updatedCart);
    }
  };

  const changeQuantity = (id, amount) => {
    const updatedQuantity = shoppingCart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + amount };
      } else {
        return item;
      }
    });

    const cleanedCart = updatedQuantity.filter((item) => item.quantity > 0);

    setShoppingCart(cleanedCart);
  };

  return (
    <section>
      <h1>Proper Plants</h1>
      <section>
        <PlantList plants={PLANTS} addToCart={addToCart} />

        <Cart items={shoppingCart} changeQuantity={changeQuantity} />
      </section>
    </section>
  );
};

export default App;
