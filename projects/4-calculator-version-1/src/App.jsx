import styles from "./App.module.css";
import Buttons from "./components/Buttons";
import Display from "./components/Display";
function App() {
  const buttons = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.calculator}>
      <Display></Display>
      <Buttons buttons={buttons}></Buttons>
    </div>
  );
}

export default App;
