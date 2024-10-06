import { useState } from "react";
import Items from "./Items";
const FoodItems = (props) => {
  let [activeItems, setActiveState] = useState([]);
  let onBuyEvent = (items, event) => {
    let newItem = [...activeItems, items];
    setActiveState(newItem);
  };
  return (
    <ul className="list-group">
      {props.foodItems.map((item) => (
        <Items
          key={item}
          foodItems={item}
          bought={activeItems.includes(item)}
          handledByButton={(event) => onBuyEvent(item, event)}
        ></Items>
      ))}
    </ul>
  );
};

export default FoodItems;
