import styles from "./rolldice.module.css";
import Button from "../Button/Button";

import { useState } from "react";

const Rolldice = ({ currentDice, roleDice, resetScore }) => {
  // const changeRulesState = () => {
  //   setShowRules(); // Replace "some value" with your condition

  //   setShowRules(undefined);
  // };

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
      <div >
        

        {/* <Button
          onClick={showProps}
          text={"Show Rules"}
          className={styles.rules}
        /> */}

        {/* {!showBtn ? <button>Hide</button> : <button>Show</button>} */}
        

      </div>
    </div>
  );
};

export default Rolldice;
