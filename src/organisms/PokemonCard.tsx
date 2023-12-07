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
      style={{ width: "100px", border: "1px solid black" }}
      onClick={() => {
        handleClick(id);
      }}
    >
      <img src={img} alt={name} />
      <p>{name}</p>
    </div>
  );
};

export default PokemonCard;
