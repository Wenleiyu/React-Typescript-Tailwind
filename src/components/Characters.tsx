import CharacterItem from "./CharacterItem";
import useHttp from "../hooks/useHttp";
import Error from "./Error";
import React from "react";

const requestConfig = {};

export default function Characters() {
  const {
    data: loadedcharacters,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/characters", requestConfig, []);

  if (isLoading) {
    return <p className="center">Fetching now...</p>;
  }

  // if (!data) {
  //   return <p>No characters found.</p>;
  // }

  if (error) {
    return <Error title="Failed to fetch characters" message={error} />;
  }

  return (
    <ul id="characters">
      {loadedcharacters.map((character) => (
        <CharacterItem key={character.id} character={character} />
      ))}
    </ul>
  );
}
