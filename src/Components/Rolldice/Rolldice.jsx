import styles from "./rolldice.module.css";
import Button from "../Button/Button";

const Rolldice = ({ currentDice, roleDice, resetScore }) => {

  console.log({ currentDice, roleDice, resetScore });
  return (
    <div className={styles.div}>
      <img
        className={styles.diceImg}
        onClick={roleDice}
        src={`./images/diceimages/dice_${currentDice}.png`}
        alt="dice 1  "
      />
      <p className={styles.ptag}>Click on Dice to roll </p>
      <div className={styles.buttons}>
        <Button
          onClick={() => resetScore()}
          text={"Reset Score"}
          className={styles.reset}
        />
        <Button text={"Show Rules"} className={styles.rules} />
      </div>
    </div>
  );
};

export default Rolldice;
