import Header from "./components/Header.tsx";
import Like from "./components/Like.tsx";
import { CartContextProvider } from "./store/CartContext.tsx";
import { UserProgressContextProvider } from "./store/UserProgressContext.tsx";
import React, { useState, useEffect } from "react";
import Login from "./components/Login.tsx";
import { LikeCharacterContextProvider } from "./store/LikeCharacterContext.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home.tsx";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");

    // Replace with your actual validation logic if needed
    if (email === "user@example.com" && password === "password") {
      setIsAuth(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuth(true);
  };

  return (
    <>
      {isAuth ? (
        <UserProgressContextProvider>
          <CartContextProvider>
            <LikeCharacterContextProvider>
              <BrowserRouter>
                <Header />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/like" element={<Like />} />
                </Routes>
              </BrowserRouter>
            </LikeCharacterContextProvider>
          </CartContextProvider>
        </UserProgressContextProvider>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </>
  );
}

export default App;
