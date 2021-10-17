import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { dehydrate, QueryClient } from "react-query";

// Components
import Home from "../components/home/Home/Home";
// Utils
import { prefetchPokemonDetails } from "../utils/cache.utils";
import { prefetchPokemonList } from "../utils/cache.utils";
// Configs
import CONSTANTS from "../configs/constants";

const { POKEMON_DEFAULT_PARAMS, POKEMON_DEFAULT_NAME } = CONSTANTS;

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <link
          rel="prefetch"
          as="image"
          crossOrigin="anonymous"
          href="/assets/images/bulbasaur.webp"
        />
      </Head>

      <Home />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  const params = {
    offset: POKEMON_DEFAULT_PARAMS.offset,
    limit: POKEMON_DEFAULT_PARAMS.limit,
  };
  const pokemonList = prefetchPokemonList(queryClient, params);
  const pokemonDetails = prefetchPokemonDetails(
    queryClient,
    POKEMON_DEFAULT_NAME
  );

  await Promise.all([pokemonList, pokemonDetails]);

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
    revalidate: 60 * 60,
  };
};

export default HomePage;
