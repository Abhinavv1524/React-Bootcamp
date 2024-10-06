import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store";

const Controls = () => {
  const disptach = useDispatch();
  const inputElement = useRef();

  const handleIncrement = () => {
    disptach(counterActions.incerement());
  };

  const handleDecrement = () => {
    disptach(counterActions.decrement());
  };

  const handleAdd = () => {
    disptach(counterActions.add(inputElement.current.value));
    inputElement.current.value = "";
  };
  const handleSubtract = () => {
    disptach(counterActions.subtract(inputElement.current.value));
    inputElement.current.value = "";
  };
  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary btn-lg px-4 gap-3"
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-success btn-lg px-4"
          onClick={handleDecrement}
        >
          -1
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center my-4">
        <input
          className="number-input"
          type="text"
          placeholder="Enter number"
          ref={inputElement}
        />
        <button
          type="button"
          className="btn btn-info btn-lg px-4"
          onClick={handleAdd}
        >
          Add
        </button>
        <button
          type="button"
          className="btn btn-danger btn-lg px-4"
          onClick={handleSubtract}
        >
          Subtract
        </button>
      </div>
    </>
  );
};

export default Controls;
