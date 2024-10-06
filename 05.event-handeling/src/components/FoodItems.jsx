import Items from "./Items";
const FoodItems = (props) => {
  return (
    <ul className="list-group">
      {props.foodItems.map((item) => (
        <Items
          key={item}
          foodItems={item}
          handledByButton={() => {
            console.log(`${item} is clicked`);
          }}
        ></Items>
      ))}
    </ul>
  );
};

export default FoodItems;
