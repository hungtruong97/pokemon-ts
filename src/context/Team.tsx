import { createContext, useContext, useState } from "react";
import Pokemon from "../organisms/Pokemon";

interface Pokemon {
  id: string;
  name: string;
  img: string;
}

interface TeamContextProps {
  team: Pokemon[];
  addPokemon: (pokemon: Pokemon) => void;
  removePokemon: (pokemonId: string) => void;
}

export const TeamContext = createContext<TeamContextProps | null>(null);

export const useTeam = () => useContext(TeamContext);

interface TeamProviderProps {
  children: React.ReactNode;
}

export const TeamProvider: React.FC<TeamProviderProps> = ({ children }) => {
  const [team, setTeam] = useState<Pokemon[]>([]);

  const addPokemon = (pokemon: Pokemon) => {
    setTeam((prevTeam) => [...prevTeam, pokemon]);
  };

  const removePokemon = (pokemonId: string) => {
    setTeam((prevTeam) =>
      prevTeam.filter((pokemon) => pokemon.id !== pokemonId)
    );
  };

  return (
    <TeamContext.Provider value={{ team, addPokemon, removePokemon }}>
      {children}
    </TeamContext.Provider>
  );
};
