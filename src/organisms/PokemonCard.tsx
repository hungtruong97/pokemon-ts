import { useNavigate } from "react-router-dom";

interface PokemonProps {
  name: string;
  img: string;
  id: string;
}

const PokemonCard: React.FC<PokemonProps> = ({ name, img, id }) => {
  const navigate = useNavigate();

  const handleClick = (id: string) => {
    navigate(`/get-pokemon/${id}`);
  };

  return (
    <div
      id={id}
      style={{
        width: "150px",
        height: "200px",
        border: "1px solid black",
        background: "white",
        cursor: "pointer",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={() => {
        handleClick(id);
      }}
    >
      <style>{`
        @keyframes jump {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-5px); }}       
    `}</style>
      <img
        src={img}
        alt={name}
        style={{
          animation: "jump 0.25s ease infinite",
        }}
      />
      <p>{name}</p>
    </div>
  );
};

export default PokemonCard;
