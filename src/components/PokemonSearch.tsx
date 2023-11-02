import React, { useState }  from  'react';
import { useQuery, gql } from '@apollo/client';
import { pokemonClient } from "../servers";
import PokemonPreview from './PokemonPreview';


const GET_POKEMON_BY_ID_QUERY = gql`
  query Pokemons($pokemonId: Int!) {
    pokemon_v2_pokemon(where: {id: {_eq: $pokemonId}}) {
      id
      name
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
      pokemon_v2_pokemonstats {
        base_stat
        pokemon_v2_stat {
          name
        }
      }
    }
  }
`;

export function PokemonSearch () {
  const [pokemonId, setPokemonId] = useState<number>(1)

  const { loading, error, data } = useQuery(GET_POKEMON_BY_ID_QUERY, {
    variables: { pokemonId },
    client: pokemonClient,
  });

  return (
    <div>
      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPokemonId(parseInt(e.target.value))
        }
        value={pokemonId.toString()}
        type="number"
      />
      <PokemonPreview data={data}/>
    </div>
  );
}
