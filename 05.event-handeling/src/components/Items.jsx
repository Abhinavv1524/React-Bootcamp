import styles from "./Items.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Items = ({ foodItems, handledByButton }) => {
  //const { foodItems } = props;
  return (
    <li className={`list-group-item ${styles["list-item"]} `}>
      <span className={styles["span-class"]}>{foodItems}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handledByButton}
      >
        Buy
      </button>
    </li>
  );
};

export default Items;
