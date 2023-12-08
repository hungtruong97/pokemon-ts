import { Link, useParams, useNavigate } from "react-router-dom";
import { Button, Modal } from "antd";
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
  //for sucess modal and button
  const [open, setOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
    setIsErrorModalOpen(false);
  };

  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  //for error modal

  const showErrorModal = () => {
    setIsErrorModalOpen(true);
    setOpen(false);
  };

  const handleErrorModalOk = () => {
    setIsErrorModalOpen(false);
  };

  const handleErrorModalCancel = () => {
    setIsErrorModalOpen(false);
  };

  //for the Pokemon component
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

  const { team, addPokemon } = teamContext;

  //Function to add pokemon to the team context
  const handleAddPokemon = (id: string, name: string, img: string) => {
    if (team.length < 6) {
      addPokemon({ id, name, img });
      showModal();
    } else {
      showErrorModal();
    }
  };

  //Function to get pokemon if provided id

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
            showModal();
            if (pokemon) {
              handleAddPokemon(pokemon.id, pokemon.name, pokemon.cardImg);
            }
          }}
        >
          Add to my team
        </Button>
        <Modal
          title="Basic Modal"
          open={open}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Button
              key="back"
              onClick={handleCancel}
              style={{ marginRight: 20 }}
            >
              Return
            </Button>,
            <Link to="/team">
              <Button type="primary" key="team">
                Go to my team
              </Button>
            </Link>,
          ]}
        >
          <p>
            You have added{" "}
            <span style={{ color: "coral" }}>{pokemon?.name}</span> to your team
          </p>
        </Modal>
        <Modal
          title="Sorry"
          open={isErrorModalOpen}
          onOk={handleErrorModalOk}
          onCancel={handleErrorModalCancel}
          footer={[
            <Button
              key="back"
              onClick={handleErrorModalCancel}
              style={{ marginRight: 20 }}
            >
              Cancel
            </Button>,
            <Link to="/team">
              <Button type="primary" key="team">
                Yes
              </Button>
            </Link>,
          ]}
        >
          <p>
            Your team is full. Do you want to remove a member of your team to
            add this pokemon?
          </p>
        </Modal>
      </div>
    </div>
  );
};

export default Pokemon;
