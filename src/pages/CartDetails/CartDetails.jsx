import React, { useContext } from "react";
import { CartContext } from "../../Components/CartContext";

const CartDetails = () => {
  const { cart } = useContext(CartContext);

  console.log(cart);

  return (
    <div style={{ marginTop: "6rem" }}>
      <h2>Your Cart</h2>
      {cart.map((product, index) => (
        <div key={index}>
          <p>
            {product.title} - ₹{product.price}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CartDetails;
