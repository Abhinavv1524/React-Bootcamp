import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import TodoItem from "./TodoItem";
const TodoItems = ({ clickToDelete }) => {
  const todoItems = useContext(TodoItemsContext);
  console.log(todoItems);
  return (
    <div className="items">
      {todoItems.map((item) => (
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
