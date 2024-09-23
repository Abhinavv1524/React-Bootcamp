import { useContext } from "react";
import styles from "./WelcomeMessage.module.css";
import { TodoItemsContext } from "../store/todo-items-store";
const WelcomeMessage = () => {
  const todoItems = useContext(TodoItemsContext);

  console.log(todoItems);
  return (
    todoItems.length === 0 && (
      <p className={styles.messagePara}>
        Welcome user you Dont have any task right now
      </p>
    )
  );
};

export default WelcomeMessage;
