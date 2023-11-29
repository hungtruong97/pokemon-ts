// import "./index.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Flex, Button } from "antd";
import Container from "./Container";

const App: React.FC = () => {
  const numberOfPokemon = 1021;
  const [pokemon, setPokemon] = useState({});
  const [searchType, setSearchType] = useState("");
  const [isShow, setIsShow] = useState(false);
  const [isSearch, setIsSearch] = useState(false);

  useEffect(() => {
    console.log(pokemon);
    console.log("clicked");
    console.log(isShow);
  }, [pokemon]);

  const generateRandomId = () => {
    return Math.floor(Math.random() * numberOfPokemon) + 1;
  };

  const fetchPokemon = async (id: unknown) => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      setPokemon(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRandomButtonClick = () => {
    const id = generateRandomId();
    fetchPokemon(id);
    setIsShow(true);
  };

  return (
    <div>
      <Flex gap={20} justify="center" align="center">
        <Button type="default">Clear Content</Button>
        <Button type="primary" onClick={handleRandomButtonClick}>
          Generate Random Pokemon
        </Button>
        <Button type="primary">Search</Button>
      </Flex>
      {isShow && <Container data={pokemon} />}
    </div>
  );
};

export default App;
