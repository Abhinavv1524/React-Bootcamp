import React, { useState } from "react";
import "./App.css";
import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import Container from "./components/Container";
import Input from "./components/Input";
function App() {
  // let foodItemsArr = useState([
  //   "Dal",
  //   "Green vegetables",
  //   "Roti",
  //   "Salad",
  //   "Milk",
  //   "Ghee",
  // ]);
  // let foodItems = foodItemsArr[0];
  // let setFoodState = foodItemsArr[1];

  const [foodItems, setFoodState] = useState([
    "Dal",
    "Green vegetables",
    "Roti",
    "Salad",
    "Milk",
    "Ghee",
  ]);

  // let textStateArr = useState("");
  // let value = textStateArr[0];
  // let setTextstate = textStateArr[1];

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
        <ErrorMessage foodItems={foodItems}></ErrorMessage>
        <FoodItems foodItems={foodItems}></FoodItems>
      </Container>
    </>
  );
}

export default App;
