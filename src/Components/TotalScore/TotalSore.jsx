import React from "react";
import styles from "./totalscore.module.css";

const TotalSore = ({ score }) => {
  return (
    <main>
      <div>
        <h1 className={styles.score}>{score}</h1>
        <p className={styles.totalScore}>TOTAL SCORE </p>
      </div>
    </main>
  );
};

export default TotalSore;
