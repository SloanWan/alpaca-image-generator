import AlpacaDisplay from "./AlpacaDisplay";
import styles from "./components.module.css";

const LeftContainer = () => {
  return (
    <div className={styles.leftContainer}>
      <AlpacaDisplay />
      <div className="flex-button-container">
        <button>Random</button>
        <button>Download</button>
      </div>
    </div>
  );
};

export default LeftContainer;
