import React from "react";

// Types, Styles
import { PokemonCardProps as Props } from "./PokemonCard.types";
import Styles from "./PokemonCard.styles";

const PokemonCard: React.FC<Props> = (props) => {
  const { pokemon } = props;

  const { name } = pokemon;

  return (
    <Styles className="PokemonCard">
      <p className="PokemonCard__name" title={name}>
        {name}
      </p>
    </Styles>
  );
};

PokemonCard.defaultProps = {};

export default PokemonCard;
