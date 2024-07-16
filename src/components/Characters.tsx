import React, { useState, useEffect } from "react";
import CharacterItem from "./CharacterItem";
import useHttp from "../hooks/useHttp";
import Error from "./Error";
import SearchBar from "./SearchBar";

const requestConfig = {};

export default function Characters() {
  const {
    data: loadedcharacters,
    isLoading,
    error,
  } = useHttp("https://thronesapi.com/api/v2/Characters", requestConfig, []);

  const [query, setQuery] = useState("");
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const family = [
    "All",
    "Targaryen",
    "Tarly",
    "Stark",
    "Baratheon",
    "Lannister",
    "Greyjoy",
    "Lanister",
    "Clegane",
    "Baelish",
    "Seaworth",
    "Tyrell",
    "Free Folk",
    "Tarth",
    "Naathi",
    "Bolton",
    "Naharis",
    "Lorathi",
    "Mormont",
    "Sparrow",
    "Viper",
    "Lorath",
    "Sand",
    "Worm",
    "Qyburn",
    "Bronn",
    "None",
    "Unknown",
  ];

  useEffect(() => {
    if (loadedcharacters) {
      setFilteredCharacters(loadedcharacters);
    }
  }, [loadedcharacters]);

  const handleSearch = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    setFilteredCharacters(
      loadedcharacters.filter((character) =>
        character.fullName.toLowerCase().includes(newQuery.toLowerCase())
      )
    );
  };

  const handleFamily = (item) => {
    if (item == "All") {
      setFilteredCharacters(loadedcharacters);
    } else {
      setFilteredCharacters(
        loadedcharacters.filter((character) =>
          character.family.toLowerCase().includes(item.toLowerCase())
        )
      );
    }
  };

  if (isLoading) {
    return <p className="center">Fetching now...</p>;
  }

  if (error) {
    return <Error title="Failed to fetch characters" message={error} />;
  }

  return (
    <>
      <SearchBar query={query} handleSearch={handleSearch} />
      <div id="family-characters">
        {family.map((item) => (
          <button onClick={() => handleFamily(item)}>{item}</button>
        ))}
      </div>
      <ul id="characters">
        {filteredCharacters.map((character) => (
          <CharacterItem character={character} />
        ))}
      </ul>
    </>
  );
}
