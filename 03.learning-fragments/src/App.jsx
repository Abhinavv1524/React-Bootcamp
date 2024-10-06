import React from "react";
import "./App.css";
import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
function App() {
  let foodItems = ["Dal", "Green vegetables", "Roti", "Salad", "Milk", "Ghee"];
  return (
    <>
      <h1>Healthy Foods</h1>
      <ErrorMessage foodItems={foodItems}></ErrorMessage>
      <FoodItems foodItems={foodItems}></FoodItems>
    </>
  );
}

export default App;
