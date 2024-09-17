import styles from "./Buttons.module.css";
const Buttons = ({ buttons }) => {
  return (
    <div className={styles.buttonsContainer}>
      {buttons.map((item) => (
        <button>{item}</button>
      ))}
    </div>
  );
};

export default Buttons;
