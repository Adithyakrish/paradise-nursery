const PlantCard = ({ plant, addToCart }) => {
  return (
    <div className="card">
      <img src={plant.image} alt={plant.name} />
      <h3>{plant.name}</h3>
      <p>{plant.description}</p>
      <p>₹{plant.price}</p>
      <button onClick={() => addToCart(plant)}>
        Add to Cart
      </button>
    </div>
  );
};

export default PlantCard;
