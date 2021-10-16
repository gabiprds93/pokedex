import React from "react";
import Head from "next/head";

// Components
import PokemonList from "../PokemonList/PokemonList";
// Types, Styles
import { HomeProps as Props } from "./Home.types";
import Styles from "./Home.styles";

const Home: React.FC<Props> = (props) => {
  return (
    <Styles className="Home">
      <Head>
        <title>home</title>
      </Head>

      <header className="Home__header" />

      <main className="Home__main">
        <PokemonList />
      </main>

      <footer className="Home__footer" />
    </Styles>
  );
};

Home.defaultProps = {};

export default Home;
