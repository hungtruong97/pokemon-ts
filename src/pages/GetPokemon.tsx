import { Flex, Button } from "antd";
import { useNavigate } from "react-router-dom";

const GetPokemon: React.FC = () => {
  const navigate = useNavigate();

  const generateRandomID = () => {
    const pokemonNumber = 1017;
    const randomID = Math.floor(Math.random() * pokemonNumber) + 1;
    navigate(`/get-pokemon/${randomID}`);
  };

  return (
    <Flex vertical justify="center" align="center">
      <h1 style={{ marginTop: "100px" }}>Welcome to Pokeworld</h1>
      <h2>Click on the button below to generate a random Pokemon</h2>
      <Button type="primary" size="large" onClick={generateRandomID}>
        Generate Pokemon
      </Button>
    </Flex>
  );
};

export default GetPokemon;
