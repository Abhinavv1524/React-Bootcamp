import styles from "./Input.module.css";

const Input = ({ keyPressed, valueAdded }) => {
  return (
    <div className={styles.centerDiv}>
      <input
        type="text"
        className={styles.inputTag}
        onChange={keyPressed}
        placeholder="Enter Food Item Here"
      />
      <button className={`${styles.btnDiv} btn btn-info`} onClick={valueAdded}>
        Add item
      </button>
    </div>
  );
};
export default Input;
