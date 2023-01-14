import Input from "../../UI/Input";
import React, { useRef, useState } from "react";
import styles from "./HardwareItemsForm.module.css";
const HardwareItemsForm = (props) => {
  const [inputValid, setInvalidInput] = useState(true);
  const AmountinputRef = useRef();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const inputAmount = AmountinputRef.current.value;
    const inputAmountNumber = +inputAmount;
    if (
      inputAmount.trim() === 0 ||
      inputAmountNumber > 5 ||
      inputAmountNumber < 1
    ) {
      setInvalidInput(false);
      return;
    }
    props.onAddHandler(inputAmountNumber);
  };
  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <Input
        ref={AmountinputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          min: "1",
          max: "5",
          defaultValue: "1",
          type: "number",
          steps: "1",
        }}
      />
      <button>+ Add</button>
      {!inputValid && <div>please enter invalid input</div>}
    </form>
  );
};

export default HardwareItemsForm;
