import React, { createContext, useState, ReactNode } from "react";

type UserProgressContextType = {
  progress: string;
  showCart: () => void;
  hideCart: () => void;
  showCheckout: () => void;
  hideCheckout: () => void;
};

const UserProgressContext = createContext<UserProgressContextType>({
  progress: "",
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
});

interface UserProgressContextProviderProps {
  children: ReactNode;
}

export function UserProgressContextProvider({
  children,
}: UserProgressContextProviderProps) {
  const [userProgress, setUserProgress] = useState<string>("");

  function showCart() {
    setUserProgress("cart");
  }

  function hideCart() {
    setUserProgress("");
  }

  function showCheckout() {
    setUserProgress("checkout");
  }

  function hideCheckout() {
    setUserProgress("");
  }

  const userProgressCtx: UserProgressContextType = {
    progress: userProgress,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,
  };

  return (
    <UserProgressContext.Provider value={userProgressCtx}>
      {children}
    </UserProgressContext.Provider>
  );
}

export default UserProgressContext;
