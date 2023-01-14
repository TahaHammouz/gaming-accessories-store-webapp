import styles from "./HardwareItems.module.css";
import HardwareItemsForm from "./HardwareItemsForm";
import { useContext } from "react";
import CartContext from "../../Hardware/Store/CartContext";

const HardwareItems = (props) => {
  const Ctx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const onAddHandler = (amount) => {
    Ctx.addItem({
      id: props.id,
      price: props.price,
      amount: amount,
      name: props.name,
    });
  };
  return (
    <li className={styles.hardware}>
      <div className={styles.container}>
        <img src={props.image} />
        <h3>{props.hardware}</h3>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <HardwareItemsForm id={props.id} onAddHandler={onAddHandler} />
      </div>
    </li>
  );
};
export default HardwareItems;
