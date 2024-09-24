import { AppName } from "./components/AppName";
import { AddTodo } from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
("./components/TodoItem");
import "./App.css";
import { act, useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import TodoItemContextProvider, {
  TodoItemsContext,
} from "./store/todo-items-store";
import { useReducer } from "react";

function App() {
  return (
    <TodoItemContextProvider>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage></WelcomeMessage>
        <TodoItems></TodoItems>
      </center>
    </TodoItemContextProvider>
  );
}

export default App;
