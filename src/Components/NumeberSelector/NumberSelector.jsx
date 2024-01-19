import styles from "./NumberSelector.module.css";

const NumberSelector = ({
  error,
  setError,
  selectedNumber,
  setSelectedNumber,
}) => {
  const arrayNumber = [1, 2, 3, 4, 5, 6];

  // console.log(selectedNumber);
  // yaha pr number nhi aa rha he dispatchsetstate aa arahr he

  //number select krne pr error jana chahiye tha nhi ja rha

  const numberSelectorhandler = (value) => {
    setSelectedNumber(value);
    setError("");
    // number select karte he erro remove ho jana chahiye
  };

  return (
    <div className={styles.maindiv}>
      <p style={{ color: "red", fontSize: "24px" }}>{error}</p>
      <div className={styles.sidebox}>
        {arrayNumber.map((value, i) => (
          <div
            // isSelected={value === selectedNumber} // agar essa hua toh boolean return karega
            key={i}
            onClick={() => numberSelectorhandler(value)}
            className={`${styles.box} ${
              value === selectedNumber ? styles.selected : styles.notselected
            } `}
          >
            {value}
          </div>
          //setSelectedNumber(value) k vajh se error aata he check karna subah abhi () => karle
          //Too many re-renders. React limits the number of renders to prevent an infinite loop
        ))}
      </div>
      <p className={styles.ptag}>SELECT NUMBER </p>
    </div>
  );
};

export default NumberSelector;
