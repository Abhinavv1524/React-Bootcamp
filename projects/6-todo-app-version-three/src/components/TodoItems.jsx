import TodoItem from "./TodoItem";
const TodoItems = ({ todoItems, clickToDelete }) => {
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
