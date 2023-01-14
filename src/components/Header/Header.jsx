import React, { Fragment } from "react";
import styles from "./Header.module.css";
import image from "../../assets/game-pc-accessories.jpg";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>PC Store</h1>
      </header>
      <div className={styles["main-image"]}>
        <img src={image} alt="gaming icons" />
      </div>
    </Fragment>
  );
};

export default Header