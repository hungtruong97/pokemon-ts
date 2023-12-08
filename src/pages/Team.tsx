import { Button, Modal } from "antd";
import { useTeam } from "../context/Team";
import PokemonCard from "../organisms/PokemonCard";
import { useState } from "react";

const Team: React.FC = () => {
  //for modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [removingPokemonId, setRemovingPokemonId] = useState<string | null>(
    null
  );

  const showModal = (pokemonId: string) => {
    setRemovingPokemonId(pokemonId);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  //for team context
  const teamContext = useTeam();
  if (!teamContext) {
    return <div>Error</div>;
  }
  const { team, removePokemon } = teamContext;

  const renderSlots = (numberOfSlots: number) => {
    const slots = [];
    for (let i = 0; i < numberOfSlots; i++) {
      slots.push(
        <div
          key={i}
          className="slot"
          style={{
            width: 150,
            height: 200,
            border: "1px dashed black",
            borderRadius: 20,
          }}
        ></div>
      );
    }
    return slots;
  };

  return (
    <div id="team">
      <h1>Your Pokemon Team</h1>
      <div className="team" style={{ display: "flex", gap: 20 }}>
        {team &&
          team.map((pokemon, index) => (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 20,
              }}
            >
              <PokemonCard
                key={index}
                id={pokemon.id}
                name={pokemon.name}
                img={pokemon.img}
              />
              <Button
                id={pokemon.id}
                type="default"
                onClick={() => {
                  showModal(pokemon.id);
                }}
              >
                Remove
              </Button>
              <Modal
                title="Confirmation"
                open={isModalOpen}
                onOk={() => {
                  if (removingPokemonId) {
                    removePokemon(removingPokemonId);
                    setRemovingPokemonId(null);
                  }
                  handleOk();
                }}
                onCancel={() => {
                  setRemovingPokemonId(null);
                  handleCancel();
                }}
              >
                <p>Are you sure you want to delete this Pokemon?</p>
              </Modal>
            </div>
          ))}
        {team.length < 6 && renderSlots(6 - team.length)}

        {/* 
        <div
          className="slot"
          style={{
            width: 100,
            height: 150,
            border: "1px dashed black",
            borderRadius: 20,
          }}
        ></div>
        <div
          className="slot"
          style={{
            width: 100,
            height: 150,
            border: "1px dashed black",
            borderRadius: 20,
          }}
        ></div>

        <div
          className="slot"
          style={{
            width: 100,
            height: 150,
            border: "1px dashed black",
            borderRadius: 20,
          }}
        ></div>
        <div
          className="slot"
          style={{
            width: 100,
            height: 150,
            border: "1px dashed black",
            borderRadius: 20,
          }}
        ></div>
        <div
          className="slot"
          style={{
            width: 100,
            height: 150,
            border: "1px dashed black",
            borderRadius: 20,
          }}
        ></div> */}
      </div>
    </div>
  );
};

export default Team;
