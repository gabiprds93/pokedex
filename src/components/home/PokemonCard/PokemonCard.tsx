import React from "react";
import Image from "next/image";

// Components
import TypeLabel from "../../global/TypeLabel/TypeLabel";
// Services
import { useFetchPokemonDetails } from "../../../services/pokemon/pokemon.service.hooks";
// Types, Styles
import { PokemonCardProps as Props } from "./PokemonCard.types";
import Styles from "./PokemonCard.styles";

const PokemonCard: React.FC<Props> = (props) => {
  const { pokemon } = props;
  const { name } = pokemon;
  const { data: pokemonDetails } = useFetchPokemonDetails(name);

  const { id, sprites, types } = pokemonDetails ?? {};

  return (
    <Styles className="PokemonCard">
      <div className="PokemonCard__img-container">
        <div className="PokemonCard__img-box">
          {sprites ? (
            <Image
              src={sprites.front_default}
              alt={name}
              width={120}
              height={120}
              className="PokemonCard__img"
            />
          ) : null}
        </div>
      </div>

      <span className="PokemonCard__id">{`N°. ${id}`}</span>

      <p className="PokemonCard__name" title={name}>
        {name}
      </p>

      <div className="PokemonCard__types">
        {types?.map((type, index) => {
          return <TypeLabel key={index} type={type.type.name} />;
        })}
      </div>
    </Styles>
  );
};

PokemonCard.defaultProps = {};

export default PokemonCard;
