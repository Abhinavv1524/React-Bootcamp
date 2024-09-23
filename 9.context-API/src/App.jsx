import { AppName } from "./components/AppName";
import { AddTodo } from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
("./components/TodoItem");
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";
function App() {
  const addItem = (itemName, itemDate) => {
    // console.log(`Item added ${itemName} and date ${itemDate}`);
    if (itemName.length === 0 || itemDate.length === 0) {
    } else {
      //itemState([...itemValue, { name: itemName, dueDate: itemDate }]);
      //functionaly updting the value here
      itemState((currentVal) => {
        let newItems = [...currentVal, { name: itemName, dueDate: itemDate }];
        return newItems;
      });
    }
    // itemState([...itemValue, { name: itemName, dueDate: itemDate }]);
    // console.log(itemValue);
  };

  const [itemValue, itemState] = useState([]);

  const itemToBeDeleted = (deletedTodoItem) => {
    const newTodoItems = itemValue.filter((item) => {
      item.name !== deletedTodoItem;
    });
    itemState(newTodoItems);
    // console.log(`deleted item ${deletedTodoItem}`);
  };

  let defaultItems = [{ name: "ghee", dueDate: "10.02.2" }];
  return (
    <TodoItemsContext.Provider value={itemValue}>
      <center className="todo-container">
        <AppName />
        <AddTodo itemToBeAdded={addItem} />
        <WelcomeMessage></WelcomeMessage>

        <TodoItems clickToDelete={itemToBeDeleted}></TodoItems>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
