import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { dehydrate, QueryClient } from "react-query";

// Components
import PokemonDetails from "../components/pokemonDetails/PokemonDetails/PokemonDetails";
import FourZeroFour from "../components/fourZeroFour/FourZeroFour/FourZeroFour";
// Utils
import { prefetchPokemonList } from "../utils/cache.util";
import { prefetchPokemonDetails } from "../utils/cache.util";
import { prefetchPokemonSpecies } from "../utils/cache.util";
// Services
import { useFetchPokemonDetails } from "../services/pokemon/pokemon.service.hooks";
// Types
import { PokemonsData } from "../types/pokemon.type";
import { PokemonDetails as IPokemonDetails } from "../types/pokemon.type";
// Configs
import CONSTANTS from "../configs/constants";

const { POKEMON_DEFAULT_PARAMS } = CONSTANTS;

const PokemonDetailsPage: NextPage = () => {
  const { query } = useRouter();
  const pokemonName = query.pokemonName as string;
  const { data: pokemon } = useFetchPokemonDetails(pokemonName);

  if (!pokemonName) return null;

  if (!pokemon) {
    return <FourZeroFour />;
  }

  return <PokemonDetails pokemon={pokemon} />;
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  const queryClient = new QueryClient();
  const pokemonsData = queryClient.getQueryData<PokemonsData>("pokemonList");
  const { results } = pokemonsData ?? {};
  const paths = (results ?? []).map((pokemon) => {
    const { name } = pokemon;
    return {
      params: { pokemonName: name },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context ?? {};
  const { pokemonName } = params ?? {};
  const queryClient = new QueryClient();

  const pokemonList = prefetchPokemonList(queryClient, {
    offset: POKEMON_DEFAULT_PARAMS.offset,
    limit: POKEMON_DEFAULT_PARAMS.limit,
  });

  const pokemonDetails = prefetchPokemonDetails(
    queryClient,
    pokemonName ? (pokemonName as string) : ""
  );

  const pokemonsDetails = queryClient.getQueryData<IPokemonDetails>([
    "pokemonDetails",
    pokemonName,
  ]);

  const pokemonSpecies = pokemonsDetails
    ? prefetchPokemonSpecies(queryClient, pokemonsDetails.id)
    : undefined;

  await Promise.all([pokemonList, pokemonDetails, pokemonSpecies]);

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
    revalidate: 60 * 60,
  };
};

export default PokemonDetailsPage;
