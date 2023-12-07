import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import PokemonCard from "../organisms/PokemonCard";

interface PokemonProps {
  name: string;
  url: string;
  img: string;
  id: string;
}

const Evolution: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [evolutionChain, setEvolutionChain] = useState<PokemonProps[]>([]);

  const getPokemonEvolutionChain = async (url: string) => {
    const response = await axios.get(url);
    return response.data.evolution_chain.url;
  };

  const getPokemonImage = async (name: string) => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );
    return { img: response.data.sprites.front_default, id: response.data.id };
  };

  const getPokemonEvolutionInfo = async (url: string) => {
    const response = await axios.get(url);
    let currentStage = response.data.chain;
    const tempChain: PokemonProps[] = [];

    while (currentStage) {
      const pokemonData = await getPokemonImage(currentStage.species.name);
      tempChain.push({
        name: currentStage.species.name,
        url: currentStage.species.url,
        img: pokemonData.img,
        id: pokemonData.id,
      });
      currentStage =
        currentStage.evolves_to.length > 0 ? currentStage.evolves_to[0] : null;
    }

    setEvolutionChain(tempChain);
  };

  const getEvolutionData = async (id: number) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const speciesUrl = response.data.species.url;
    const evolutionChainUrl = await getPokemonEvolutionChain(speciesUrl);
    getPokemonEvolutionInfo(evolutionChainUrl);
  };

  useEffect(() => {
    if (id) {
      const pokemonId = Number(id);
      getEvolutionData(pokemonId);
    }
  }, [id]);

  return (
    <div>
      <h1>Evolution</h1>
      <p>Your Pokemon ID is {id}</p>
      {evolutionChain.length > 0 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "50px",
          }}
        >
          {evolutionChain.map((pokemon) => (
            <PokemonCard
              img={pokemon.img}
              name={pokemon.name}
              id={pokemon.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Evolution;
