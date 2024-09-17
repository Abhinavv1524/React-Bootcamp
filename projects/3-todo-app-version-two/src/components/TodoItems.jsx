import TodoItem from "./TodoItem";
const TodoItems = ({ todoItems }) => {
  return (
    <div className="items">
      {todoItems.map((item) => (
        <TodoItem todoName={item.itemName} todoDate={item.dueDate} />
      ))}
    </div>
  );
};

export default TodoItems;
