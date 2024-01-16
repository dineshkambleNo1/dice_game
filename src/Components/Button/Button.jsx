import styles from "./Button.module.css";

const Button = (props) => {
  const { text } = props;
  return (
    <button className={styles.playnow}>{text}</button>
  );
};

export default Button;
