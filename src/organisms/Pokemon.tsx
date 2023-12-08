import { useParams, useNavigate } from "react-router-dom";
import { Button } from "antd";
import axios from "axios";
import { useState, useEffect } from "react";
import { useTeam } from "../context/Team";

interface PokemonProps {
  id: string;
  name: string;
  img: string;
  cardImg: string;
  type?: string;
  weight?: string;
  height?: string;
  abilities: AbilityProps[];
}

interface AbilityProps {
  ability: {
    name: string;
  };
}

const Pokemon: React.FC = () => {
  const pokemonId = useParams().id;
  const navigate = useNavigate();

  const [pokemon, setPokemon] = useState<PokemonProps | null>(null);

  useEffect(() => {
    pokemonId && getPokemon(pokemonId);
  }, [pokemonId]);

  const teamContext = useTeam();

  if (!teamContext) {
    return <div>Error: team context not available</div>;
  }

  const { addPokemon } = teamContext;

  //Function to add pokemon to the team context
  const handleAddPokemon = (id: string, name: string, img: string) => {
    addPokemon({ id, name, img });
  };

  const getPokemon = async (id: string) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemonData: PokemonProps = {
      name: response.data.name,
      id: response.data.id,
      type: response.data.types[0].type.name,
      img: response.data.sprites.other[`official-artwork`].front_default,
      cardImg: response.data.sprites.front_default,
      weight: response.data.weight,
      height: response.data.height,
      abilities: response.data.abilities,
    };
    setPokemon(pokemonData);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", textAlign: "center" }}
    >
      <div className="pokemon">
        <h2>Your Pokemon is {pokemon ? pokemon.name : ""}</h2>
        <img
          src={pokemon ? pokemon.img : ""}
          alt={pokemon ? pokemon.name : ""}
        />
        <h3>Type: {pokemon ? pokemon.type : ""} </h3>
        <h3>Weight: {pokemon ? pokemon.weight : ""}</h3>
        <h3>Height: {pokemon ? pokemon.height : ""}</h3>
        <h3>
          Abilities:{" "}
          {pokemon &&
            pokemon.abilities.map((item, index) => (
              <span key={index}>
                {item.ability.name}
                {index !== pokemon.abilities.length - 1 ? "," : ""}{" "}
              </span>
            ))}
        </h3>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Button
          type="default"
          onClick={() => {
            navigate(`/evolution/${pokemonId}`);
          }}
        >
          See its evolution
        </Button>
        <Button
          type="primary"
          onClick={() => {
            if (pokemon) {
              handleAddPokemon(pokemon.id, pokemon.name, pokemon.cardImg);
            }
          }}
        >
          Add to my team
        </Button>
      </div>
    </div>
  );
};

export default Pokemon;
