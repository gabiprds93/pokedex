import { useState } from "react";
import Image from "next/image";

// Components
import PokemonImagePlaceholder from "./PokemonImage.placeholder";
// Types, Styles
import { PokemonImageProps as Props } from "./PokemonImage.types";
import Styles from "./PokemonImage.styles";
// Configs
import CONSTANTS from "../../../configs/constants";

import bulbasaur from "../../../../public/assets/images/bulbasaur.webp";

const { POKEMON_DEFAULT_NAME } = CONSTANTS;

const PokemonImage: React.FC<Props> = (props) => {
  const { pokemon } = props;
  const [loadingImg, setLoadingImg] = useState(true);

  const { name, sprites } = pokemon;
  const isDefaultPokemon = name === POKEMON_DEFAULT_NAME;

  return (
    <Styles className="PokemonImage">
      <div className="PokemonImage__container">
        {loadingImg ? <PokemonImagePlaceholder /> : null}

        {sprites ? (
          <Image
            src={isDefaultPokemon ? bulbasaur : sprites.front_default}
            alt={name}
            width={240}
            height={240}
            onLoadingComplete={() => setLoadingImg(false)}
          />
        ) : null}
      </div>
    </Styles>
  );
};

PokemonImage.defaultProps = {};

export default PokemonImage;
