import { useReducer } from "react";

import CartContext from "./CartContext";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingItemsIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingItems = state.items[existingItemsIndex];

    let updateditems;

    if (existingItems) {
      const updateditem = {
        ...existingItems,
        amount: action.item.amount + existingItems.amount,
      };

      updateditems = [...state.items];
      updateditems[existingItemsIndex] = updateditem;
      console.log("updatedItems : " + updateditems);
    } else {
      updateditems = state.items.concat(action.item);
      console.log("updatedItems : " + updateditems);
    }

    return {
      items: updateditems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
