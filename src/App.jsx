import React from "react";
import Hardware from "./components/Hardware/Hardware";
import CartProvider from "./components/Store/CartProvider";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import Header from "./components/Header/Header";

const App = () => {
  const [overlay, setOverlay] = useState(false);
  const showOverlayHandler = () => {
    setOverlay(true);
  };
  const hideOverlayHandler = () => {
    setOverlay(false);
  };

  return (
    <CartProvider>
      {overlay && <Cart hiddenOverlay={hideOverlayHandler} />}
      <Header OverlayisShow={showOverlayHandler} c />
      <main>
        <Hardware />
      </main>
    </CartProvider>
  );
};

export default App;


