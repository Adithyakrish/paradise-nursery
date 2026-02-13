import CartItem from "./CartItem";

const Cart = ({ cart, updateQuantity, removeFromCart }) => {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      <h2>Your Cart</h2>

      {cart.length === 0 && <p>Cart is empty</p>}

      {cart.map(item => (
        <CartItem
          key={item.id}
          item={item}
          updateQuantity={updateQuantity}
          removeFromCart={removeFromCart}
        />
      ))}

      <h3>Total: ₹{total}</h3>
    </div>
  );
};

export default Cart;
