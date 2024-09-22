import { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
export function AddTodo({ itemToBeAdded }) {
  // let itemName = document.getElementById("nameValue");
  // let itemDate = document.getElementById();
  const [itemName, itemState] = useState("");
  const [itemDate, dateState] = useState("");
  const handleItemName = (event) => {
    itemState(event.target.value);
  };
  const handleItemDate = (event) => {
    dateState(event.target.value);
  };
  const handleButtonClicked = () => {
    itemToBeAdded(itemName, itemDate);
    itemState("");
    dateState("");
  };
  return (
    <div className="container text-center">
      <div className="row new-row">
        <div className="col-4">
          <input
            type="text"
            placeholder="Enter todo here"
            onChange={handleItemName}
            value={itemName}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            name=""
            id=""
            onChange={handleItemDate}
            value={itemDate}
          />
        </div>
        <div className="col-2">
          <button
            className="btn btn-success new-button"
            onClick={handleButtonClicked}
          >
            <IoMdAddCircleOutline />
          </button>
        </div>
      </div>
    </div>
  );
}
