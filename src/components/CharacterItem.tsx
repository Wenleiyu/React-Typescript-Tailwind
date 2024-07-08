import { currencyFormatter } from "../util/formatting.js";
import Button from "./UI/Button.tsx";
import React, { useContext } from "react";
import CartContext from "../store/CartContext.tsx";
import LikeCharacter from "./LikeCharacter.tsx";

export default function CharacterItem({ character }) {
  const cartCtx = useContext(CartContext);
  function handleAddcharacterToCart() {
    cartCtx.addItem(character);
  }
  return (
    <li className="character-item">
      <article>
        <img src={`${character.imageUrl}`} alt={character.fullName} />
        <div>
          <h3>{character.fullName}</h3>
          <p className="character-item-price">
            {currencyFormatter.format(character.id)}
          </p>
          <p className="character-item-description">{character.title}</p>
        </div>
        <p className="character-item-actions">
          <LikeCharacter character={character} />
          <Button onClick={handleAddcharacterToCart} textOnly={false}>
            Add it to Cart
          </Button>
        </p>
      </article>
    </li>
  );
}
