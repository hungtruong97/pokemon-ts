import { useTeam } from "../context/Team";
import PokemonCard from "../organisms/PokemonCard";

const Team: React.FC = () => {
  const teamContext = useTeam();
  if (!teamContext) {
    return <div>Error</div>;
  }
  const { team } = teamContext;

  return (
    <div id="team">
      <h1>Your Pokemon Team</h1>
      <div className="team" style={{ display: "flex", gap: 20 }}>
        {team ? (
          team.map((pokemon, index) => (
            <PokemonCard
              key={index}
              id={pokemon.id}
              name={pokemon.name}
              img={pokemon.img}
            />
          ))
        ) : (
          <div
            className="slot"
            style={{
              width: 100,
              height: 150,
              border: "1px dashed black",
              borderRadius: 20,
            }}
          ></div>
        )}
        {/* <div
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
