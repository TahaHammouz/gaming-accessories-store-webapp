import styles from "./CheckoutForm.module.css";

const CheckoutForm = (props) => {
  return (
    <form className={styles.form}>
      <label className={styles.label}>
        Name:
        <input className={styles.input} type="text" name="name" required />
      </label>
      <br />
      <label className={styles.label}>
        Email:
        <input className={styles.input} type="email" name="email" required />
      </label>
      <div className={styles.actions}>

        <input className={styles.submit} type="submit" value="Submit" />
        <button className={styles.button} onClick={props.handlePrevStep}>
          Back
        </button>
      </div>
    </form>
  );
};
export default CheckoutForm;
