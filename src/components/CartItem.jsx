const CartItem = ({ item, updateQuantity, removeFromCart }) => {
  return (
    <div className="cart-item">
      <h4>{item.name}</h4>
      <p>₹{item.price}</p>

      <button
        onClick={() => updateQuantity(item.id, item.quantity - 1)}
        disabled={item.quantity === 1}
      >
        -
      </button>

      <span>{item.quantity}</span>

      <button
        onClick={() => updateQuantity(item.id, item.quantity + 1)}
      >
        +
      </button>

      <button onClick={() => removeFromCart(item.id)}>
        Remove
      </button>
    </div>
  );
};

export default CartItem;
