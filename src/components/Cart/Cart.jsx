import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import { useContext, useState } from "react";
import CartContext from "../Store/CartContext";
import CartItem from "./CartItem";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import ProgressBar from "../UI/ProgressBar";

const Cart = (props) => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };
  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const ctx = useContext(CartContext);
  const totalAmount = `$${ctx.totalAmount.toFixed(2)}`;

  const RemoveitemHandler = (id) => {
    ctx.removeItem(id);
  };

  const AdditemHandler = (item) => {
    ctx.addItem({ ...item, amount: 1 });
  };

  const cartlist = (
    <ul className={styles["cart-items"]}>
      {ctx.items.map((item, key) => (
        <CartItem
          key={key.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove={RemoveitemHandler.bind(null, item.id)}
          onAdd={AdditemHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  const orderbutton = ctx.items.length > 0;
  return (
    <Modal hiddenOverlay={props.hiddenOverlay}>
      {currentStep === 1 && (
        <>
          {cartlist}
          <div>
            <span className={styles.total}> Total Amount</span>
            <span>{totalAmount}</span>
          </div>
          <div className={styles.actions}>
            {orderbutton && (
              <button
                className={styles["button--alt"]}
                onClick={handleNextStep}
              >
                Order
              </button>
            )}
            <button className={styles.button} onClick={props.hiddenOverlay}>
              Cancel
            </button>
          </div>
        </>
      )}
      {currentStep === 2 && <CheckoutForm handlePrevStep={handlePrevStep} />}
      
      <div className={styles.progressBar}>
        <ProgressBar currentStep={currentStep} totalSteps={3} />
      </div>
    </Modal>
  );
};

export default Cart;
