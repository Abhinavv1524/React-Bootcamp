import { useContext } from "react";
import styles from "./WelcomeMessage.module.css";
import { TodoItemsContext } from "../store/todo-items-store";
const WelcomeMessage = () => {
  const { itemValue } = useContext(TodoItemsContext);

  console.log(itemValue);
  return (
    itemValue.length === 0 && (
      <p className={styles.messagePara}>
        Welcome user you Dont have any task right now
      </p>
    )
  );
};

export default WelcomeMessage;
