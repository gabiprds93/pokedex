import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { dehydrate, QueryClient } from "react-query";

// Components
import PokemonDetails from "../../components/pokemonDetails/PokemonDetails/PokemonDetails";
// Utils
import { prefetchPokemonList } from "../../utils/cache.utils";
import { prefetchPokemonDetails } from "../../utils/cache.utils";
// Services
import { useFetchPokemonDetails } from "../../services/pokemon/pokemon.service.hooks";
import { PokemonsData } from "../../types/pokemon.type";
// Configs
import CONSTANTS from "../../configs/constants";

const { POKEMON_DEFAULT_PARAMS } = CONSTANTS;

const PokemonDetailsPage: NextPage = () => {
  const { query } = useRouter();
  const pokemonName = query.pokemonName as string;
  const { data: pokemon } = useFetchPokemonDetails(pokemonName);

  if (!pokemon) {
    return null;
  }

  return <PokemonDetails pokemon={pokemon} />;
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  const queryClient = new QueryClient();
  const pokemonList = prefetchPokemonList(queryClient, {
    offset: POKEMON_DEFAULT_PARAMS.offset,
    limit: POKEMON_DEFAULT_PARAMS.limit,
  });

  await Promise.all([pokemonList]);

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
  const pokemonDetails = prefetchPokemonDetails(
    queryClient,
    pokemonName ? (pokemonName as string) : ""
  );

  await Promise.all([pokemonDetails]);

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
    revalidate: 60 * 60,
  };
};

export default PokemonDetailsPage;
