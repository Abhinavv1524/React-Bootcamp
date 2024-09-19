import { AppName } from "./components/AppName";
import { AddTodo } from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
("./components/TodoItem");
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
function App() {
  const addItem = (itemName, itemDate) => {
    console.log(`Item added ${itemName} and date ${itemDate}`);
    if (itemName.length == 0 || itemDate.length == 0) {
    } else {
      itemState([...itemValue, { name: itemName, dueDate: itemDate }]);
    }
    // itemState([...itemValue, { name: itemName, dueDate: itemDate }]);
    // console.log(itemValue);
  };

  const todoItems = [];
  const [itemValue, itemState] = useState(todoItems);

  const itemToBeDeleted = (deletedTodoItem) => {
    const newTodoItems = itemValue.filter((item) => {
      item.name !== deletedTodoItem;
    });
    itemState(newTodoItems);
    console.log(`deleted item ${deletedTodoItem}`);
  };
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo itemToBeAdded={addItem} />
      {itemValue.length === 0 && <WelcomeMessage></WelcomeMessage>}

      <TodoItems
        todoItems={itemValue}
        clickToDelete={itemToBeDeleted}
      ></TodoItems>
    </center>
  );
}

export default App;
