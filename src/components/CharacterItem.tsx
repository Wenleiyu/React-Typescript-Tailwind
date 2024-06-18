import { currencyFormatter } from "../util/formatting.js";
import Button from "./UI/Button.tsx";
import React, { useContext } from "react";
import CartContext from "../store/CartContext.tsx";

export default function CharacterItem({ character }) {
  const cartCtx = useContext(CartContext);
  function handleAddcharacterToCart() {
    cartCtx.addItem(character);
  }
  return (
    <li className="character-item">
      <article>
        <img src={`${character.image}`} alt={character.name} />
        <div>
          <h3>{character.name}</h3>
          <p className="character-item-price">
            {currencyFormatter.format(character.price)}
          </p>
          <p className="character-item-description">{character.description}</p>
        </div>
        <p className="character-item-actions">
          <Button onClick={handleAddcharacterToCart} textOnly={false}>
            Add it to Cart
          </Button>
        </p>
      </article>
    </li>
  );
}
