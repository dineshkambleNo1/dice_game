import React from "react";
// Verify the correct path

import styles from "./Rules.module.css";

//src\Components
const Rules = () => {
  return (
    <div>
      <div className={styles.text}>
        <div>
          <h2>How to play dice game</h2>
        </div>
        <div>
          <p>Select any number</p>
          <p>Click on dice image</p>
          <p>
            after click on dice if selected number is equal to dice number you
            will get same point as dice
          </p>
          <p>if you get wrong guess then 2 point will be dedcuted </p>
        </div>
      </div>
    </div>
  );
};

export default Rules;
