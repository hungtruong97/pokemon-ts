import { useState, ChangeEvent, useRef, useEffect } from "react";
import SearchResult from "./SearchResult";
import usePokemonData from "../hook/usePokemonData";
import gen1PokemonName from "../data/pokemonNameData";

const SearchInput: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [pokemonNames, setPokemonNames] = useState<string[]>([]);

  const ref = useRef<HTMLDivElement | null>(null);

  const catchSearchTerm = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    const result = gen1PokemonName.filter((pokemonName) =>
      pokemonName.toLowerCase().includes(value)
    );
    setPokemonNames(result);
  };

  const handleClickOnSearchSuggestion = (name: string) => {
    setInputValue(name);
    setPokemonNames([]);
  };

  const handleSearchClick = () => {
    setSearchTerm(inputValue.toLowerCase());
  };

  const { pokemon } = usePokemonData(searchTerm);

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        // If the click is outside the search box, clear the suggestions
        setPokemonNames([]);
      }
    };

    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Clean up the event listener
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={ref}>
      <form>
        <label>Search</label>
        <input
          placeholder="Enter keyword here"
          id="search"
          onChange={catchSearchTerm}
          value={inputValue}
        ></input>
        <button type="button" onClick={handleSearchClick}>
          Search
        </button>
        <div
          style={{
            width: 300,
            height: 200,
            overflow: "scroll",
          }}
        >
          {pokemonNames &&
            pokemonNames.map((name) => (
              <p onClick={() => handleClickOnSearchSuggestion(name)}>{name}</p>
            ))}
        </div>
        {pokemon && <SearchResult name={pokemon.name} img={pokemon.img} />}
      </form>
    </div>
  );
};

export default SearchInput;
