import React from "react";
import styles from "./Home.module.css";
import Button from "../Button/Button";

const Home = (props) => {
  const { toggle } = props;

  return (
    <div className={styles.home_container}>
      <div className={styles.home_image}>
        <img src="./images/dices 1.png" alt="Dice" />
      </div>

      <div className={styles.home_content}>
        <div className="heading">
          <h1 className={styles.home_heading}>DICE GAME</h1>
        </div>

        <div onClick={toggle} className={styles.btn}>
          <Button
            // yaha pr onclick q likh ne se nhi hua 
            text={"PLAY NOW"}
            className={styles.home_btn}
            
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
