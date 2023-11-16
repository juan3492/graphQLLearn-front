import React from "react";
import { gql, useMutation } from "@apollo/client";
import { localClient } from "../servers";
import { ResponseData } from "../interfaces/pokemonInterfaces";
import { Spinner, Progress, Button, Card, CardBody } from "@nextui-org/react";

interface PokemonPreviewProps {
  data: ResponseData;
}

const ADD_POKEMON_MUTATION = gql`
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

export default function PokemonPreview({ data }: PokemonPreviewProps) {
  const [addPokemon, { loading, error }] = useMutation(ADD_POKEMON_MUTATION, {
    client: localClient,
  });

  if (!data) {
    return <Spinner />;
  }
  const pokemonData = data.pokemon_v2_pokemon[0];

  if (!pokemonData) {
    return <div> ID de pokemon inexistente </div>;
  }

  const id = pokemonData.id;
  const name = pokemonData.name;
  const types = pokemonData.pokemon_v2_pokemontypes.map((pokemonType) => (
    <li className="capitalize">{pokemonType.pokemon_v2_type.name}</li>
  ));

  const stats = pokemonData.pokemon_v2_pokemonstats.map((stat) => {
    const statName = stat.pokemon_v2_stat.name;
    const baseStat = stat.base_stat;
    return (
      <div className="flex w-96 justify-between">
        <Progress
          size="sm"
          radius="sm"
          classNames={{
            base: "max-w-md",
            track: "drop-shadow-md border border-default",
            indicator: "bg-gradient-to-r from-yellow-500 to-red-500",
            label: "tracking-wider font-medium text-default-600",
            value: "text-foreground/60",
          }}
          label={statName}
          value={baseStat}
          maxValue={200}
          showValueLabel={true}
        />
      </div>
    );
  });

  const handleAddPokemon = (data: ResponseData) => {
    const pokemonData = data.pokemon_v2_pokemon[0];

    addPokemon({
      variables: {
        input: {
          name: name,
          types: pokemonData.pokemon_v2_pokemontypes.map((type) => {
            return type.pokemon_v2_type.name;
          }),
          stats: pokemonData.pokemon_v2_pokemonstats.map((stat)=>{  
            return {
              base_stat: stat.base_stat,
              stat_name: stat.pokemon_v2_stat.name,
            }
          }),
        }
      },
    });
  };

  return (
    <section>
      <h2 className="text-4xl w-full text-center mb-10">Pokemon Data</h2>
      <Card className="max-w-4xl m-auto">
        <CardBody>
          <div className="flex justify-between p-10">
            <div>
              <h3 className="text-2xl mb-5">Basic Info</h3>
              <ul>
                <li>
                  ID: <span className="capitalize">{id}</span>
                </li>
                <li>
                  Name: <span className="capitalize">{name}</span>
                </li>
              </ul>
              <div className="flex">
                <h3 className="mr-5">Tipos:</h3>
                <ul>{types}</ul>
              </div>
            </div>
            <div>
              <h3 className="text-2xl mb-5">Stats</h3>
              <ul>{stats}</ul>
            </div>
          </div>
          <Button onClick={() => handleAddPokemon(data)} color="danger" className="m-5">
            Add Pokemon
          </Button>
        </CardBody>
      </Card>
    </section>
  );
}
