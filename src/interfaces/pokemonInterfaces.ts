export type PokemonType = {
  name: string;
}

export type PokemonStat = {
  base_stat: number;
  pokemon_v2_stat: {
    name: string;
    __typename: string;
  };
}

export type Pokemon = {
  id: number;
  name: string;
  pokemon_v2_pokemontypes: {
    pokemon_v2_type: PokemonType;
    __typename: string;
  }[];
  pokemon_v2_pokemonstats: PokemonStat[];
  __typename: string;
}

export type ResponseData = {
  pokemon_v2_pokemon: Pokemon[];
}

