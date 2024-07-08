import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as like } from "@fortawesome/free-solid-svg-icons";
import { faHeart as unLike } from "@fortawesome/free-regular-svg-icons";
import React, { useState, useContext } from "react";
import LikeCharacterContext from "../store/LikeCharacterContext";

export default function LikeCharacter({ character }) {
  const likeCtx = useContext(LikeCharacterContext);
  const isLiked = likeCtx.items.some(
    (likedItem) => likedItem.id === character.id
  );
  const [content, setcontent] = useState(isLiked ? like : unLike);

  const handleHeart = () => {
    if (content == unLike) {
      setcontent(like);
      likeCtx.likeItem(character);
    } else {
      setcontent(unLike);
      likeCtx.unlikeItem(character);
    }
  };
  return (
    <button className="like" onClick={handleHeart}>
      <FontAwesomeIcon icon={content} className="heart-icon" />
    </button>
  );
}
