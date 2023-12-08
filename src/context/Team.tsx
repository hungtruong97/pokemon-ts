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
  const [team, setTeam] = useState<Pokemon[]>(() => {
    //Check local storage to see if team exists
    const savedTeam = localStorage.getItem("team");
    return savedTeam ? JSON.parse(savedTeam) : [];
  });

  const addPokemon = (pokemon: Pokemon) => {
    if (team.length < 6) {
      setTeam((prevTeam) => {
        const updatedTeam = [...prevTeam, pokemon];
        //save team to local storage
        localStorage.setItem("team", JSON.stringify(updatedTeam));
        return updatedTeam;
      });
    }
  };

  const removePokemon = (pokemonId: string) => {
    setTeam((prevTeam) => {
      const updatedTeam = prevTeam.filter(
        (pokemon) => pokemon.id !== pokemonId
      );
      //save team to local storage
      localStorage.setItem("team", JSON.stringify(updatedTeam));
      return updatedTeam;
    });
  };

  return (
    <TeamContext.Provider value={{ team, addPokemon, removePokemon }}>
      {children}
    </TeamContext.Provider>
  );
};
