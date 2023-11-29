import { ApolloError } from "@apollo/client";

export type PokemonTeamComponentPropsType = {
  pokemonTeam: any;
  pokemonTeamLoading: boolean | null | undefined;
  pokemonTeamError: ApolloError | undefined;

  deletePokemon: any;
  deletePokemonLoading: boolean | null | undefined;
  deletePokemonError: ApolloError | undefined;
};

export type PokemonFromDBStatName = {
  name: string;
  __typename: string;
};

export type PokemonFromDBStat = {
  base_stat: number;
  stat: PokemonFromDBStatName;
  __typename: string;
};

export type PokemonFromDBType = {
  name: string;
  __typename: string;
};

export type PokemonFromDB = {
  id: number;
  name: string;
  stats: [PokemonFromDBStat];
  types: [PokemonFromDBType];
  __typename: string;
};

