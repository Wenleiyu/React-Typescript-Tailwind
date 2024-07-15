import { currencyFormatter } from "../util/formatting.js";
import Button from "./UI/Button.tsx";
import React, { useContext } from "react";
import CartContext from "../store/CartContext.tsx";
import LikeCharacter from "./LikeCharacter.tsx";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CharacterItem({ character }) {
  const cartCtx = useContext(CartContext);
  function handleAddcharacterToCart() {
    cartCtx.addItem(character);
  }

  const handlePage = (character) => {
    const confirmation = window.confirm(
      "You are about to navigate to a website. Please proceed with caution. This website is not designed by us, and we are not responsible for any content on that site."
    );
    if (confirmation) {
      const url = `https://gameofthrones.fandom.com/wiki/${character.firstName}_${character.lastName}`;
      window.location.href = url;
    }
  };

  return (
    <li className="character-item">
      <article>
        <img src={`${character.imageUrl}`} alt={character.fullName} />
        <div>
          <div className="character-item-header">
            <h2>{character.fullName}</h2>
            <button>
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                onClick={() => handlePage(character)}
              />
            </button>
          </div>
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
