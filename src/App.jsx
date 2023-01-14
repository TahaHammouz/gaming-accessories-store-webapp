import React from "react";
import Hardware from "./components/Hardware/Hardware";
import CartProvider from "./components/Store/CartProvider";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import Header from "./components/Header/Header";

const App = () => {
  const [Overlay, setOverlay] = useState(false);
  const ShowOverlayHandler = () => {
    setOverlay(true);
  };
  const HideOverlayHandler = () => {
    setOverlay(false);
  };

  return (
    <CartProvider>
      {Overlay && <Cart HiddenOverlay={HideOverlayHandler} />}
      <Header OverlayisShow={ShowOverlayHandler} c />
      <main>
        <Hardware />
      </main>
    </CartProvider>
  );
};

export default App;


