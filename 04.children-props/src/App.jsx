import React from "react";
import "./App.css";
import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import Container from "./components/Container";
function App() {
  let foodItems = ["Dal", "Green vegetables", "Roti", "Salad", "Milk", "Ghee"];
  return (
    <>
      <Container>
        <h1>Healthy Foods</h1>
        <ErrorMessage foodItems={foodItems}></ErrorMessage>
        <FoodItems foodItems={foodItems}></FoodItems>
      </Container>
      <Container>
        <h5>Here is the list of all the healthy foods</h5>
      </Container>
    </>
  );
}

export default App;
