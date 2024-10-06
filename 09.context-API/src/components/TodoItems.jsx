import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import TodoItem from "./TodoItem";
const TodoItems = () => {
  const { itemValue } = useContext(TodoItemsContext);
  console.log(itemValue);
  return (
    <div className="items">
      {itemValue.map((item) => (
        <TodoItem key={item} todoName={item.name} todoDate={item.dueDate} />
      ))}
    </div>
  );
};

export default TodoItems;
