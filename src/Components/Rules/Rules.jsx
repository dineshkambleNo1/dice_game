import React from "react";
import styles from "./Rules.modules.css"; // Verify the correct path

const Rules = () => {
  return (
    <div>
      <div className={styles.rules}>
        <h2>How to play dice game</h2>
      </div>
      <div>
        <p>Select any numberSelect any number</p>
        <p>Click on dice image</p>
        <p>
          after click on dice if selected number is equal to dice number you
          will get same point as dice{" "}
        </p>
        <p>if you get wrong guess then 2 point will be dedcuted </p>
      </div>
    </div>
  );
};

export default Rules;
