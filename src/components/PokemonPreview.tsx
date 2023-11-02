import React from "react";
import { ResponseData } from "../interfaces/pokemonInterfaces";

interface PokemonPreviewProps {
  data: ResponseData;
}

export default function PokemonPreview({ data }: PokemonPreviewProps) {
  if (!data) {
    return (
      <section>
        <h1>Error introduce un ID Válido</h1>
      </section>
    );
  }
  const pokemonData = data.pokemon_v2_pokemon[0];
  const id = pokemonData.id;
  const name = pokemonData.name;
  const types = pokemonData.pokemon_v2_pokemontypes.map((pokemonType) => (
    <li>
      {pokemonType.pokemon_v2_type.name}
    </li>
  ));

  const stats = pokemonData.pokemon_v2_pokemonstats.map(stat => {
    const statName = stat.pokemon_v2_stat.name;
    const baseStat = stat.base_stat;
    return(
      <div>
        <label>{statName}</label>
        <progress max="300" value={baseStat}>baseStat</progress>
      </div>
    );
  })

  return (
    <section>
      <h1>PokemonPreview</h1>
      <div>
        <h2>Info basica</h2>
        <ul>
          <li>ID:{id} </li>
          <li>nombre:{name}</li>
        </ul>
      </div>
      <div>
        <h2>tipos</h2>
        <ul>
          {types}
        </ul>
      </div>
      <div>
        <h2>stats</h2>
        <ul>
          {stats}
        </ul>
      </div>
    </section>
  );
}
