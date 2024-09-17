import Items from "./Items";
const FoodItems = (props) => {
  return (
    <ul className="list-group">
      {props.foodItems.map((item) => (
        <Items key={item} foodItems={item}>
          {" "}
        </Items>
      ))}
    </ul>
  );
};

export default FoodItems;
