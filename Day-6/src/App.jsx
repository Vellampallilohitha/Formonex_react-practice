import React, { useState } from "react";
import "./App.css";

const foodInfo = {
  Pizza: {
    emoji: "🍕",
    name: "Pizza",
    description: "A cheesy delight topped with veggies or meat."
  },
  Burger: {
    emoji: "🍔",
    name: "Burger",
    description: "Juicy and packed with flavors in a soft bun."
  },
  Biryani: {
    emoji: "🍛",
    name: "Biryani",
    description: "A fragrant rice dish cooked with spices and love."
  }
};

function App() {
  const [selectedFood, setSelectedFood] = useState(null);

  return (
    <div className="render-container">
      {/* Header */}
      <header className="render-header">🍴 Food Picker</header>

      {/* Sidebar + Content Layout */}
      <div className="main-layout">
        {/* Sidebar Buttons */}
        <div className="button-group">
          {Object.keys(foodInfo).map((food) => (
            <button
              key={food}
              className={'food-btn ${selectedFood === food ? "active" : ""}'}
              onClick={() => setSelectedFood(food)}
            >
              {food}
            </button>
          ))}
        </div>

        {/* Food Info Display */}
        {selectedFood && (
          <div className="food-display">
            <div className="food-emoji">{foodInfo[selectedFood].emoji}</div>
            <h2>{foodInfo[selectedFood].name}</h2>
            <p>{foodInfo[selectedFood].description}</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="render-footer">© 2025 Dynamic Food App 🍽</footer>
    </div>
  );
}

export default App;