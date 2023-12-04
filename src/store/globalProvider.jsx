import { useState } from "react";
import GlobalContext from "./globalContext";

function GlobalProvider(props) {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({
    name: "Eric",
    emali: "eric.wells@gmail.com",
  });

  function addProductToCart() {
    console.log("global add");
  }

  function removeProductFromCart() {
    console.log("global remove");
  }

  return (
    <GlobalContext.Provider
      value={{
        cart: cart,
        user: user,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}

export default GlobalProvider;
