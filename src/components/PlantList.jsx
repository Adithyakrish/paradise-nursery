import plants from "../data/plants";
import PlantCard from "./PlantCard";

const PlantList = ({ addToCart }) => {
  return (
    <div className="plant-list">
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          plant={plant}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
};

export default PlantList;
