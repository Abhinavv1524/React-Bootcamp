import styles from "./Items.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Items = ({ foodItems, bought, handledByButton }) => {
  //const { foodItems } = props;
  return (
    <li
      className={`list-group-item ${styles["list-item"]} ${bought && "active"}`}
    >
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
