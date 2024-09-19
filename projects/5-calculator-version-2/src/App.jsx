import { useState } from "react";
import styles from "./App.module.css";
import Buttons from "./components/Buttons";
import Display from "./components/Display";
function App() {
  let value;
  const [displayvalue, displayState] = useState("");

  const onButtonclick = (event) => {
    console.log(event.target.value);
    value = event.target.value;
    if (value === "C") {
      displayState("");
    } else if (value === "=") {
      const result = eval(displayvalue);
      displayState(result);
    } else {
      displayState(displayvalue + value);
    }
  };
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
      <Display calVal={displayvalue}></Display>
      <Buttons buttons={buttons} onButtonclick={onButtonclick}></Buttons>
    </div>
  );
}

export default App;
