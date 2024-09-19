import React, { useState } from "react";
import "./App.css";
import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import Container from "./components/Container";
import Input from "./components/Input";
function App() {
  const [foodItems, setFoodState] = useState([
    "Dal",
    "Green vegetables",
    "Roti",
    "Salad",
    "Milk",
    "Ghee",
  ]);

  const [value, setTextstate] = useState("");

  const handledByButton = (event) => {
    console.log(event.target.value);
    setTextstate(event.target.value);
  };
  const valueAdded = () => {
    if (value.trim()) {
      setFoodState([...foodItems, value]);
      setTextstate("");
    }
    // foodItems.push(value);
    console.log(foodItems);
  };
  return (
    <>
      <Container>
        <h1>Healthy Foods</h1>
        <Input keyPressed={handledByButton} valueAdded={valueAdded}></Input>
        <p>The Messages typed is {value}</p>
        <ErrorMessage foodItems={foodItems}></ErrorMessage>
        <FoodItems foodItems={foodItems}></FoodItems>
      </Container>
    </>
  );
}

export default App;
