import React from "react";
import styles from "./HardwareItems.module.css";

const HardwareItems = (props) => {
  return (
    <li className={styles.hardware}>
      <div className={styles.product}>
        <img src={props.image} />
        <h3>{props.hardware}</h3>
      </div>

      <div className={styles.price}>{props.price}</div>
    </li>
  );
};
export default HardwareItems;
