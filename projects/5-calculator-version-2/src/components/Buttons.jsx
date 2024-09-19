import styles from "./Buttons.module.css";
const Buttons = ({ buttons, onButtonclick }) => {
  return (
    <div className={styles.buttonsContainer}>
      {buttons.map((item) => (
        <button onClick={onButtonclick} value={item}>
          {item}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
