import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import TodoItem from "./TodoItem";
const TodoItems = ({ clickToDelete }) => {
  const { itemValue } = useContext(TodoItemsContext);
  console.log(itemValue);
  return (
    <div className="items">
      {itemValue.map((item) => (
        <TodoItem
          key={item}
          todoName={item.name}
          todoDate={item.dueDate}
          clickToDelete={clickToDelete}
        />
      ))}
    </div>
  );
};

export default TodoItems;
