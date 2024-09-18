import React from "react";
import "./App.css";
import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import Container from "./components/Container";
import Input from "./components/Input";
function App() {
  let foodItems = ["Dal", "Green vegetables", "Roti", "Salad", "Milk", "Ghee"];
  let value = "";
  const handledByButton = (event) => {
    console.log(event.target.value);
    value = event.target.value;
  };
  const valueAdded = () => {
    foodItems.push(value);
  };
  return (
    <>
      <Container>
        <h1>Healthy Foods</h1>
        <Input keyPressed={handledByButton} valueAdded={valueAdded}></Input>
        <ErrorMessage foodItems={foodItems}></ErrorMessage>
        <FoodItems foodItems={foodItems}></FoodItems>
      </Container>
    </>
  );
}

export default App;
