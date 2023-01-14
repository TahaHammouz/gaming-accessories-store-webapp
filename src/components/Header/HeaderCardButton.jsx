import React from "react";
import CartIcon from "../Cart/CartIcon";
import styles from "../Header/HeaderCardButton.module.css";
import { useContext, useEffect, useState } from "react";
import CartContext from "../Store/CartContext";
const HeaderCardButton = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const [isHighlighted, setisHighlighted] = useState(false);

  const buttonClasses = `${styles.button} ${isHighlighted ? styles.bump : ""}`;
  const { items } = cartCtx;
  useEffect(() => {
    if (items.length === 0) return;
    setisHighlighted(true);
    const timer = setTimeout(() => {
      setisHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={buttonClasses} onClick={props.isShow}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>

      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCardButton;
