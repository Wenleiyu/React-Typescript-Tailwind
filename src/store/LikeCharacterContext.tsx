import React, { createContext, useReducer } from "react";

const LikeCharacterContext = createContext({
  items: [],
  likeItem: (item) => {},
  unlikeItem: (id) => {},
  clearCart: () => {},
});

function likeCharacterReducer(state, action) {
  if (action.type === "LIKE_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const updatedItems = [...state.items];

    // if (existingCartItemIndex > -1) {
    //   const existingItem = state.items[existingCartItemIndex];
    //   const updatedItem = {
    //     ...existingItem,
    //     quantity: existingItem.quantity + 1,
    //   };
    //   updatedItems[existingCartItemIndex] = updatedItem;
    // } else {
    updatedItems.push({ ...action.item });
    //}

    return { ...state, items: updatedItems };
  }

  if (action.type === "UNLIKE_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingCartItem = state.items[existingCartItemIndex];
    const updatedItems = [...state.items];

    updatedItems.splice(existingCartItemIndex, 1);

    // if (existingCartItem.quantity === 1) {
    //   updatedItems.splice(existingCartItemIndex, 1);
    // } else {
    //   const updatedItem = {
    //     ...existingCartItem,
    //     quantity: existingCartItem.quantity - 1,
    //   };
    //   updatedItems[existingCartItemIndex] = updatedItem;
    // }

    return { ...state, items: updatedItems };
  }

  if (action.type === "CLEAR_CART") {
    return { ...state, items: [] };
  }

  return state;
}

export function LikeCharacterContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(likeCharacterReducer, {
    items: [],
  });
  const cartContext = {
    items: cart.items,
    likeItem,
    unlikeItem,
    clearCart,
  };

  function likeItem(item) {
    dispatchCartAction({ type: "LIKE_ITEM", item });
  }

  function unlikeItem(id) {
    dispatchCartAction({ type: "UNLIKE_ITEM", id });
  }

  function clearCart() {
    dispatchCartAction({ type: "CLEAR_CART" });
  }

  return (
    <LikeCharacterContext.Provider value={cartContext}>
      {children}
    </LikeCharacterContext.Provider>
  );
}

export default LikeCharacterContext;
