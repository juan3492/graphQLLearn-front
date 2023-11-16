import React from 'react'
import { useQuery, gql } from '@apollo/client';
import { Button, Card, CardBody } from "@nextui-org/react";
import { localClient } from "../servers";


const POKEMON_STORE_QUERY = gql`
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

const PokemonTeam = () => {

  const { loading, error, data } = useQuery( POKEMON_STORE_QUERY, {
    client: localClient,
  });

  if (loading) {
    return (
      <div>
        Cargando equipo
      </div>
    );
  }

  if (!data || !data.pokemons[0]) {
    return (
      <div className='my-10'>
        Aun no hay nadie en el equipo
      </div>
    );
  }
  
  return (
    <>
      <h2 className='text-4xl my-10 text-center'>Equipo Actual</h2>
      <Card className="max-w-4xl m-auto">
        <CardBody>

        </CardBody>
      </Card>
    </>
  )
}

export default PokemonTeam
