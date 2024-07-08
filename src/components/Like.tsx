import React, { useContext } from "react";
import CharacterItem from "./CharacterItem.tsx";
import LikeCharacterContext from "../store/LikeCharacterContext.tsx";

export default function Like() {
  const likeCtx = useContext(LikeCharacterContext);

  return (
    <ul id="characters">
      {likeCtx.items.map((character) => (
        <CharacterItem character={character} />
      ))}
    </ul>
  );
}
