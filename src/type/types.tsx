export interface PokemonProps {
  id: string;
  name: string;
  img: string;
  cardImg: string;
  type: PokemonType[];
  weight?: string;
  height?: string;
  abilities: AbilityProps[];
}

export interface PokemonType {
  type: {
    name: string;
  };
}

export interface AbilityProps {
  ability: {
    name: string;
  };
}

export interface UsePokemonData {
  pokemon: PokemonProps | null;
  loading: boolean;
  error: string | null;
}
