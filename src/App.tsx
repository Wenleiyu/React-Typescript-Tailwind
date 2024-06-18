import Header from "./components/Header.tsx";
import Cart from "./components/Cart.tsx";
import { CartContextProvider } from "./store/CartContext.tsx";
import { UserProgressContextProvider } from "./store/UserProgressContext.tsx";
import Checkout from "./components/Checkout.tsx";
import Characters from "./components/Characters.tsx";
import React, { useState } from "react";
import Login from "./components/Login.tsx";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const handleLogin = () => {
    setIsAuth(true);
  };
  return (
    <>
      {isAuth ? (
        <UserProgressContextProvider>
          <CartContextProvider>
            <Header />
            <Characters />
            <Cart />
            <Checkout />
          </CartContextProvider>
        </UserProgressContextProvider>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </>
  );
}

export default App;
