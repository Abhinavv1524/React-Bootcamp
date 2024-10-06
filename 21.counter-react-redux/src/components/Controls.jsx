import { useDispatch } from "react-redux";

const Controls = () => {
  const disptach = useDispatch();

  const handleIncrement = () => {
    disptach({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    disptach({ type: "DECREMENT" });
  };
  return (
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
  );
};

export default Controls;
