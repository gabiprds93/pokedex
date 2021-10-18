import { NextPage } from "next";
import { useRouter } from "next/router";

// Components
import PokemonDetails from "../../components/pokemonDetails/PokemonDetails/PokemonDetails";
// Services
import { useFetchPokemonDetails } from "../../services/pokemon/pokemon.service.hooks";

const PokemonDetailsPage: NextPage = () => {
  const { query } = useRouter();
  const pokemonName = query.pokemonName as string;
  const { data: pokemon } = useFetchPokemonDetails(pokemonName);

  if (!pokemon) {
    return null;
  }

  return <PokemonDetails pokemon={pokemon} />;
};

export default PokemonDetailsPage;
