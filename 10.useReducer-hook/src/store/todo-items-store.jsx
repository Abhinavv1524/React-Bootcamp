import { useReducer, createContext } from "react";

export const TodoItemsContext = createContext({
  itemValue: [],
  addNewItem: () => {},
  deleteNewItem: () => {},
});

const todoItemsReducer = (currTodoItem, action) => {
  switch (action.type) {
    case "NEW_TIER":
      return [
        ...currTodoItem,
        { name: action.payload.itemName, dueDate: action.payload.itemDate },
      ];
    case "DELETE_TIER":
      return currTodoItem.filter(
        (item) => item.name !== action.payload.itemName
      );
    default:
      return currTodoItem;
  }
};

const TodoItemContextProvider = ({ children }) => {
  const [itemValue, dispatchTodoItem] = useReducer(todoItemsReducer, []);

  const addNewItem = (itemName, itemDate) => {
    if (itemName.length === 0 || itemDate.length === 0) {
      alert("Please provide both item name and due date.");
    } else {
      const addItemAction = {
        type: "NEW_TIER",
        payload: {
          itemName,
          itemDate,
        },
      };
      dispatchTodoItem(addItemAction);
    }
  };

  const deleteNewItem = (itemName) => {
    const deleteItemAction = {
      type: "DELETE_TIER",
      payload: {
        itemName,
      },
    };
    dispatchTodoItem(deleteItemAction);
  };

  return (
    <TodoItemsContext.Provider value={{ itemValue, addNewItem, deleteNewItem }}>
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemContextProvider;
