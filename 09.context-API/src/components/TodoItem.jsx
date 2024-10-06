import { useContext } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";

function TodoItem({ todoName, todoDate }) {
  const { deleteNewItem } = useContext(TodoItemsContext);
  return (
    <div className="container">
      <div className="row new-row">
        <div className="col-4">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            className="btn btn-danger new-button"
            onClick={() => deleteNewItem(todoName)}
          >
            <MdOutlineDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
