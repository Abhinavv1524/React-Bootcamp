import styles from "./Items.module.css";

const Items = ({ foodItems }) => {
  //const { foodItems } = props;
  return (
    <li className={`list-group-item ${styles["list-item"]} `}>
      <span className={styles["span-class"]}>{foodItems}</span>
    </li>
  );
};

export default Items;
