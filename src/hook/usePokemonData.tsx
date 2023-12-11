import { useEffect, useState } from "react";
import axios from "axios";
import { PokemonProps, UsePokemonData } from "../type/types";

//Function overloads
function usePokemonData(pokemonId: number): UsePokemonData;
function usePokemonData(pokemonName: string): UsePokemonData;

function usePokemonData(pokemonIdentifier: number | string): UsePokemonData {
  const [pokemon, setPokemon] = useState<PokemonProps | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemonIdentifier}`
        );

        const Pokemon: PokemonProps = {
          id: response.data.id,
          name: response.data.name,
          img: response.data.sprites.other[`official-artwork`].front_default,
          cardImg: response.data.sprites.front_default,
          type: response.data.types,
          weight: response.data.weight,
          height: response.data.height,
          abilities: response.data.abilities,
        };
        setPokemon(Pokemon);
        setError(null);
      } catch (error) {
        setError("Error fetching Pokemon");
        setPokemon(null);
      } finally {
        setLoading(false);
      }
    };
    fetchPokemon();
  }, [pokemonIdentifier]);
  return { pokemon, loading, error };
}

export default usePokemonData;
