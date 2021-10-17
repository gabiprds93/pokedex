import React, { useState } from "react";
import Image from "next/image";

// Components
import { PokemonCardIdPlaceholder } from "./PokemonCard.placeholder";
import { PokemonCardTypesPlaceholder } from "./PokemonCard.placeholder";
import { PokemonCardImgPlaceholder } from "./PokemonCard.placeholder";
import TypeLabel from "../../global/TypeLabel/TypeLabel";
// Services
import { useFetchPokemonDetails } from "../../../services/pokemon/pokemon.service.hooks";
// Types, Styles
import { PokemonCardProps as Props } from "./PokemonCard.types";
import Styles from "./PokemonCard.styles";
// Configs
import i18n from "../../../i18n/i18n";
import CONSTANTS from "../../../configs/constants";

import bulbasaur from "../../../assets/images/bulbasaur.webp";

const { POKEMON_DEFAULT_NAME } = CONSTANTS;

const PokemonCard: React.FC<Props> = (props) => {
  const { pokemon } = props;
  const [loadingImg, setLoadingImg] = useState(true);
  const { name } = pokemon;
  const { data: pokemonDetails } = useFetchPokemonDetails(name);

  const { id, sprites, types } = pokemonDetails ?? {};
  const isDefaultPokemon = name === POKEMON_DEFAULT_NAME;

  return (
    <Styles className="PokemonCard">
      <div className="PokemonCard__img-container">
        <div className="PokemonCard__img-box">
          {isDefaultPokemon ? (
            <Image
              src={bulbasaur}
              alt={name}
              width={120}
              height={120}
              onLoadingComplete={() => setLoadingImg(false)}
              className="PokemonCard__img"
            />
          ) : (
            <>
              {loadingImg || !sprites ? <PokemonCardImgPlaceholder /> : null}

              {sprites ? (
                <Image
                  src={sprites.front_default}
                  alt={name}
                  width={120}
                  height={120}
                  onLoadingComplete={() => setLoadingImg(false)}
                  className="PokemonCard__img"
                />
              ) : null}
            </>
          )}
        </div>
      </div>

      {!id ? (
        <PokemonCardIdPlaceholder />
      ) : (
        <span className="PokemonCard__id">
          {`${i18n.t("numeration")} ${id}`}
        </span>
      )}

      <p className="PokemonCard__name" title={name}>
        {name}
      </p>

      {!types ? (
        <PokemonCardTypesPlaceholder />
      ) : (
        <div className="PokemonCard__types">
          {types.map((type, index) => {
            return <TypeLabel key={index} type={type.type.name} />;
          })}
        </div>
      )}
    </Styles>
  );
};

PokemonCard.defaultProps = {};

export default PokemonCard;
