import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { localClient } from "../servers";
import {
  POKEMON_STORE_QUERY,
  ADD_POKEMON_MUTATION,
  DELETE_POKEMON_MUTATION,
} from "../queries/localServerQueries";

const useLocalServer = () => {
  const {
    loading: pokemonTeamLoading,
    error: pokemonTeamError,
    data: pokemonTeam,
    refetch,
  } = useQuery(POKEMON_STORE_QUERY, {
    client: localClient,
  });

  const [addPokemon, { loading: addPokemonLoading, error: addPokemonError }] =
    useMutation(ADD_POKEMON_MUTATION, {
      client: localClient,
      onCompleted: () => {
        refetch();
      },
    });

  const [
    deletePokemon,
    { loading: deletePokemonLoading, error: deletePokemonError },
  ] = useMutation(DELETE_POKEMON_MUTATION, {
    client: localClient,
    onCompleted: () => {
      refetch();
    },
  });

  return {
    pokemonTeam,
    pokemonTeamLoading,
    pokemonTeamError,

    addPokemon,
    addPokemonLoading,
    addPokemonError,

    deletePokemon,
    deletePokemonLoading,
    deletePokemonError,
  };
};

export default useLocalServer;
