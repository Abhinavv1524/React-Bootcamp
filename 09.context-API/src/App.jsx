import { AppName } from "./components/AppName";
import { AddTodo } from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
("./components/TodoItem");
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";
function App() {
  const [itemValue, itemState] = useState([]);

  const addNewItem = (itemName, itemDate) => {
    if (itemName.length === 0 || itemDate.length === 0) {
    } else {
      itemState((currentVal) => {
        let newItems = [...currentVal, { name: itemName, dueDate: itemDate }];
        return newItems;
      });
    }
  };

  const deleteNewItem = (deletedTodoItem) => {
    const newTodoItems = itemValue.filter((item) => {
      item.name !== deletedTodoItem;
    });
    itemState(newTodoItems);
    // console.log(`deleted item ${deletedTodoItem}`);
  };

  return (
    <TodoItemsContext.Provider value={{ itemValue, addNewItem, deleteNewItem }}>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage></WelcomeMessage>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
