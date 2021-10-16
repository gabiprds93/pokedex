import React from "react";

// Components
import PokemonCard from "../PokemonCard/PokemonCard";
// Services
import { useFetchPokemonList } from "../../../services/pokemon/pokemon.service.hooks";
// Types, Styles
import { PokemonListProps as Props } from "./PokemonList.types";
import Styles from "./PokemonList.styles";

const PokemonList: React.FC<Props> = (props) => {
  const { data: pokemonList } = useFetchPokemonList();

  return (
    <Styles className="PokemonList">
      <div className="PokemonList__grid">
        {pokemonList?.map((pokemon, index) => {
          return <PokemonCard key={index} pokemon={pokemon} />;
        })}
      </div>

      <span className="PokemonList__refresh">Loading more...</span>
    </Styles>
  );
};

PokemonList.defaultProps = {};

export default PokemonList;
