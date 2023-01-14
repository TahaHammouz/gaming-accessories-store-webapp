import React from "react";
import styles from "./ProgressBar.module.css"
const ProgressBar = (props) => {
  const { currentStep, totalSteps } = props;
  const width = (currentStep / totalSteps) * 100;

  return (
    <div className={styles.progressBarContainer}>
      <div className={styles.progressBar} style={{ width: `${width}%` }} />
    </div>
  );
};

export default ProgressBar;
