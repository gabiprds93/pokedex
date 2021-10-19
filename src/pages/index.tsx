import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { dehydrate, QueryClient } from "react-query";

// Components
import Home from "../components/home/Home/Home";
// Utils
import { prefetchPokemonDetails } from "../utils/cache.util";
import { prefetchPokemonList } from "../utils/cache.util";
// Configs
import CONSTANTS from "../configs/constants";
import i18n from "../i18n/i18n";

const { POKEMON_DEFAULT_PARAMS, POKEMON_DEFAULT_NAME } = CONSTANTS;

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>{i18n.t("title")}</title>

        <meta name="description" content={i18n.t("descriptionHome")} />
        <meta name="robots" content="index,follow" />

        <link rel="canonical" href="https://complete-pokedex.vercel.app/" />
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
