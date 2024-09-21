import styles from "./WelcomeMessage.module.css";
const WelcomeMessage = () => {
  return (
    <p className={styles.messagePara}>
      Welcome user you Dont have any task right now
    </p>
  );
};

export default WelcomeMessage;
