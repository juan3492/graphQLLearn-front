import { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { pokemonClient, localClient } from "./servers";

import { PokemonSearch } from './components/PokemonSearch';

const LIST_QUERY = gql`
  query Pokemons ($limit: Int!){
    pokemon_v2_pokemon (limit: $limit){
      id
      name
      height
    }
  }
`;

const USER_QUERY = gql `
query Users {
  users {
    name
    email
    id
  }
}
`;

function App() {

/*   // Consulta a localServerLink
  const {
    loading: loading1,
    error: error1,
    data: data1,
  } = useQuery(USER_QUERY, {
    client: localClient,
  }); */
  
  return (
    <div className="App">
      <PokemonSearch/>
    </div>
  );
}

export default App;
