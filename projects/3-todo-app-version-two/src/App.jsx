import { AppName } from "./components/AppName";
import { AddTodo } from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
("./components/TodoItem");
import "./App.css";
function App() {
  const todoItems = [
    {
      itemName: "Buy Milk",
      dueDate: "4/10/2023",
    },
    {
      itemName: "Go To School",
      dueDate: "4/10/2023",
    },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
