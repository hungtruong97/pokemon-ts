import { Flex, Button } from "antd";

const Pokedex: React.FC = () => {
  return (
    <Flex
      justify="center"
      align="center"
      style={{ height: "100vh", flexDirection: "column" }}
    >
      <h1>Welcome to Pokeworld</h1>
      <h2>Click on the button below to generate a random Pokemon</h2>
      <Button type="primary" size="large">
        Generate Pokemon
      </Button>
    </Flex>
  );
};

export default Pokedex;
