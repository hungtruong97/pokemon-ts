import { PokemonProps } from "../type/types";

type Props = Omit<
  PokemonProps,
  "id" | "type" | "abilities" | "weight" | "height" | "cardImg"
>;

const SearchResult: React.FC<Props> = (props) => {
  return (
    <div>
      <h3>{props.name}</h3>
      <img src={props.img} alt="" />
    </div>
  );
};

export default SearchResult;
