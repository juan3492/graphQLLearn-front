import React, { useState }  from  'react';
import { useQuery, gql } from '@apollo/client';
import { pokemonClient } from "../servers";
import {Input} from '@nextui-org/react'
import PokemonPreview from './PokemonPreview';
import PokemonTeam from './PokemonTeam';


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
    <div className='container max-w-4xl mx-auto'>
      <h2 className='text-4xl w-full text-center mb-10'>Pokemon Search</h2>
      <Input
        className='mb-10 max-w-[220px]'
        placeholder="Enter a pokemon ID"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPokemonId(parseInt(e.target.value))
        }
        value={pokemonId.toString()}
        type="number"
        variant="flat"
      />
      <PokemonPreview data={data}/>
      <PokemonTeam/>
    </div>
  );
}
