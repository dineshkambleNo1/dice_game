import React, { useState } from "react";
import TotalSore from "../TotalScore/TotalSore";
import NumberSelector from "../NumeberSelector/NumberSelector";
import styles from "./Gameplay.module.css";
import Rolldice from "../Rolldice/Rolldice";
import Rules from "../Rules/Rules";

const Gameplay = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(4);
  const [score, updateScore] = useState(0);
  const [error, setError] = useState("");

  const generateRandomNo = (min, max) => {
    //  console.log(Math.floor(Math.random() * (max - min) + min));
    return Math.floor(Math.random() * (max - min) + min);
  };

  //state set karne k liye ekk function bananna hoga

  const roleDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }
    // setError(""); // reset kardo
    // ye nhi ho rha he esliye setError pass krna hoga
    const randomNumber = generateRandomNo(1, 7);
    setCurrentDice((prev) => randomNumber);

    if (selectedNumber === randomNumber) {
      updateScore((prev) => prev + randomNumber);
    } else {
      updateScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
    // number selected hoga woh use hone k baad refresh jese ho jayega
  };

  const resetScore = () => {
    console.log("k");
    updateScore(0);
  };

  return (
    <main>
      <div className={styles.flex}>
        <TotalSore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>

      <div className={styles.rolldice}>
        <Rolldice
          currentDice={currentDice}
          roleDice={roleDice}
          resetScore={resetScore}
        />
      </div>
      <div>
        <Rules />
        
      </div>
    </main>
  );
};

export default Gameplay;
