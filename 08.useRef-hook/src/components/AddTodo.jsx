import { useRef } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
export function AddTodo({ itemToBeAdded }) {
  // let itemName = document.getElementById("nameValue");
  // let itemDate = document.getElementById();

  const itemNameElement = useRef(0);
  const itemDateElement = useRef();

  const handleButtonClicked = (event) => {
    event.preventDefault();
    //console.log(event);
    const itemName = itemNameElement.current.value;
    const itemDate = itemDateElement.current.value;
    itemToBeAdded(itemName, itemDate);
    itemDateElement.current.value;
    itemNameElement.current.value;
    // console.log(itemName);
  };
  return (
    <div className="container text-center">
      <form className="row new-row" onSubmit={handleButtonClicked}>
        <div className="col-4">
          <input
            type="text"
            placeholder="Enter todo here"
            ref={itemNameElement}
          />
        </div>
        <div className="col-4">
          <input type="date" name="" id="" ref={itemDateElement} />
        </div>
        <div className="col-2">
          <button className="btn btn-success new-button">
            <IoMdAddCircleOutline />
          </button>
        </div>
      </form>
    </div>
  );
}
