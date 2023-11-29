import {
  Button,
  Card,
  CardBody,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Progress,
  Chip,
} from "@nextui-org/react";
import {
  PokemonFromDB,
  PokemonTeamComponentPropsType,
  PokemonFromDBStat,
  PokemonFromDBType,
} from "../interfaces/pokemonTeamComponentPropInterface";

const PokemonTeam = ({
  pokemonTeam,
  pokemonTeamLoading,
  deletePokemon,
}: PokemonTeamComponentPropsType) => {
  if (pokemonTeamLoading) {
    return <div>Cargando equipo</div>;
  }

  if (!pokemonTeam || !pokemonTeam.pokemons[0]) {
    return <div className="my-10">Aun no hay nadie en el equipo</div>;
  }

  const handleDeletePokemon = (pokemonId: number) => {
    deletePokemon({
      variables: { id: pokemonId },
    });
  };

  return (
    <>
      <h2 className="text-4xl my-10 text-center">Equipo Actual</h2>
      <Card className="max-w-4xl m-auto">
        <CardBody>
          <Table isStriped>
            <TableHeader>
              <TableColumn>ID</TableColumn>
              <TableColumn>NAME</TableColumn>
              <TableColumn>TYPES</TableColumn>
              <TableColumn>STATS</TableColumn>
              <TableColumn>ACTIONS</TableColumn>
            </TableHeader>
            <TableBody>
              {pokemonTeam.pokemons.map((poke: PokemonFromDB) => (
                <TableRow key={poke.id}>
                  <TableCell>{poke.id}</TableCell>
                  <TableCell className="capitalize">{poke.name}</TableCell>
                  <TableCell>
                    {poke.types.map(
                      (type: PokemonFromDBType, index: number) => (
                        <Chip
                          className="capitalize m-1"
                          color="success"
                          key={index}
                        >
                          {type.name}
                        </Chip>
                      )
                    )}
                  </TableCell>
                  <TableCell>
                    {poke.stats.map(
                      (stat: PokemonFromDBStat, index: number) => (
                        <Progress
                          key={index}
                          label={stat.stat.name}
                          size="sm"
                          value={stat.base_stat}
                          maxValue={200}
                          color="success"
                          showValueLabel={true}
                          className="max-w-md my-2"
                        />
                      )
                    )}
                  </TableCell>
                  <TableCell>
                    <Button
                      isIconOnly
                      color="danger"
                      aria-label="Like"
                      onPress={() => handleDeletePokemon(poke.id)}
                    >
                      🗑
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardBody>
      </Card>
    </>
  );
};

export default PokemonTeam;
