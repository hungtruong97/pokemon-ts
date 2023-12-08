import { Flex, Button } from "antd";
import { useNavigate } from "react-router-dom";

const GetPokemon: React.FC = () => {
  const navigate = useNavigate();

  function generateRandomNumber(): number {
    // Generate a random float between 0 and 1
    const rand: number = Math.random();

    // Set probability ranges
    const probFirstGroup: number = 0.6; // Probability for numbers 1, 4, 7, 10, ...
    const probSecondGroup: number = 0.3; // Probability for numbers 2, 5, 8, 11, ...
    const probThirdGroup: number = 0.07; // Probability for the rest, except 140-151
    // const probSpecialGroup: number = 0.03; // Probability for numbers 140-151

    // Function to generate a random number within a range
    const randomInRange = (start: number, end: number): number =>
      Math.floor(Math.random() * (end - start + 1)) + start;

    if (rand < probFirstGroup) {
      // Generate a number in the first group (1, 4, 7, ...)
      return 1 + 3 * randomInRange(0, 46); // There are 47 numbers in this group
    } else if (rand < probFirstGroup + probSecondGroup) {
      // Generate a number in the second group (2, 5, 8, ...)
      return 2 + 3 * randomInRange(0, 46); // There are 47 numbers in this group
    } else if (rand < probFirstGroup + probSecondGroup + probThirdGroup) {
      // Generate a number in the third group (excluding numbers ending in 1 or 2)
      let number: number;
      do {
        number = randomInRange(3, 139);
      } while (number % 3 === 0 || number % 3 === 1);
      return number;
    } else {
      // Generate a number in the special group (140-151)
      return randomInRange(140, 151);
    }
  }

  // Example usage

  const generateRandomID = () => {
    const randomNumber = generateRandomNumber();
    navigate(`/get-pokemon/${randomNumber}`);
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
