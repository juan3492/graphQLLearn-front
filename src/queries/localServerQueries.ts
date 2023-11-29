import { gql } from "@apollo/client";

export const POKEMON_STORE_QUERY = gql`
  query {
    pokemons {
      id
      name
      types {
        name
      }
      stats {
        base_stat
        stat {
          name
        }
      }
    }
  }
`;

export const ADD_POKEMON_MUTATION = gql`
  mutation AddPokemon($input: PokemonInput!) {
    addPokemon(input: $input) {
      id
      name
      types {
        name
      }
      stats {
        base_stat
        stat {
          name
        }
      }
    }
  }
`;

export const DELETE_POKEMON_MUTATION = gql`
  mutation DeletePokemon($id: ID!) {
    deletePokemon(id: $id){
      id
    }
  }
`;
