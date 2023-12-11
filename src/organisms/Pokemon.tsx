import { Link, useParams, useNavigate } from "react-router-dom";
import { Button, Modal } from "antd";
import { useState } from "react";
import { useTeam } from "../context/Team";
import usePokemonData from "../hook/usePokemonData";

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
  const { pokemon, loading, error } = usePokemonData(Number(pokemonId));
  const teamContext = useTeam();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

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

  return (
    <div
      style={{ display: "flex", flexDirection: "column", textAlign: "center" }}
    >
      {pokemon && (
        <div>
          <div className="pokemon">
            <h2>Your Pokemon is {pokemon ? pokemon.name : ""}</h2>
            <img
              src={pokemon ? pokemon.img : ""}
              alt={pokemon ? pokemon.name : ""}
            />
            <h3>
              Type:{" "}
              {pokemon &&
                pokemon.type.map((item, index) => (
                  <span key={index}>
                    {item.type.name}
                    {index !== pokemon.type?.length - 1 ? "," : ""}
                  </span>
                ))}
            </h3>
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
                <span style={{ color: "coral" }}>{pokemon?.name}</span> to your
                team
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
                Your team is full. Do you want to remove a member of your team
                to add this pokemon?
              </p>
            </Modal>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pokemon;
