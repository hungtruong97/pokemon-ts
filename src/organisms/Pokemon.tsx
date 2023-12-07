import { Link, useParams, useNavigate } from "react-router-dom";
import { Button } from "antd";
import axios from "axios";
import { useState, useEffect } from "react";

interface PokemonProps {
  name: string;
  id: number;
  type: string;
  image: string;
  weight: string;
  height: string;
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

  const getPokemon = async (id: string) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemonData: PokemonProps = {
      name: response.data.name,
      id: response.data.id,
      type: response.data.types[0].type.name,
      image: response.data.sprites.other[`official-artwork`].front_default,
      weight: response.data.weight,
      height: response.data.height,
      abilities: response.data.abilities,
    };
    setPokemon(pokemonData);
  };

  useEffect(() => {
    pokemonId && getPokemon(pokemonId);
  }, [pokemonId]);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", textAlign: "center" }}
    >
      <div className="pokemon">
        <h2>Your Pokemon is {pokemon ? pokemon.name : ""}</h2>
        <img
          src={pokemon ? pokemon.image : ""}
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
        <Link to="/team">
          <Button type="primary">Add to my team</Button>
        </Link>
      </div>
    </div>
  );
};

export default Pokemon;
