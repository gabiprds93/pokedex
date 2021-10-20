import React, { ReactNode, useState } from "react";
import Image from "next/image";

// Components
import PokemonCard from "../../home/PokemonCard/PokemonCard";
import PokemonCardPlaceholder from "../../home/PokemonCard/PokemonCard.placeholder";
// Types, Styles
import { Chain } from "../../../types/pokemon.type";
import { EvolutionChainCardProps as Props } from "./EvolutionChainCard.types";
import Styles from "./EvolutionChainCard.styles";
// Configs
import CONSTANTS from "../../../configs/constants";
import i18n from "../../../i18n/i18n";

import ChevronSVG from "../../../../public/assets/images/chevron-right-solid.svg";
import ChevronDownSVG from "../../../../public/assets/images/chevron-down-solid.svg";

const { BREAKPOINTS } = CONSTANTS;
const EvolutionChainCard: React.FC<Props> = (props) => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const { chain } = props;

  const { species: firstPokemon, evolves_to } = chain ?? {};
  const isDesktop = windowWidth > BREAKPOINTS.desktop;

  window.onresize = () => {
    setWindowWidth(window.innerWidth);
  };

  /** Funtion to render the pokemons of the next evolution.
   * @since 0.1.0
   * @param {ReactNode[]} pokemonArray The list of pokemons.
   * @returns {ReactNode} Returns React node with information of the next evolution.
   */
  const renderEvolution = (pokemonArray: ReactNode[]) => {
    if (!pokemonArray.length) return null;

    return (
      <div className="EvolutionChainCard__next">
        <div className="EvolutionChainCard__next__icon">
          <Image
            src={isDesktop ? ChevronSVG : ChevronDownSVG}
            alt="Chevron icon"
            width={36}
            height={36}
          />
        </div>

        <div className="EvolutionChainCard__next__container">
          {pokemonArray}
        </div>
      </div>
    );
  };

  /** Function to render all evolutions of the pokemon.
   * @since 0.1.0
   * @param {Chain[]} evolves_to The evolves to of the pokemon.
   * @returns {ReactNode} Return a React node with all evolutions of the pokemon.
   */
  const showEvolutionChain = (evolves_to?: Chain[] | []): ReactNode => {
    const pokemonArray: ReactNode[] = [];

    const content = evolves_to?.map((item, index) => {
      pokemonArray.push(
        <div className="EvolutionChainCard__next__pokemon">
          <PokemonCard key={index} pokemon={item.species} />
        </div>
      );

      return showEvolutionChain(item.evolves_to);
    });

    return (
      <>
        {renderEvolution(pokemonArray)}

        {content}
      </>
    );
  };

  return (
    <Styles className="EvolutionChainCard">
      <p className="EvolutionChainCard__title">{i18n.t("evolutions")}</p>

      <div className="EvolutionChainCard__evolution">
        {firstPokemon ? (
          <PokemonCard pokemon={firstPokemon} />
        ) : (
          <PokemonCardPlaceholder />
        )}

        {showEvolutionChain(evolves_to)}
      </div>
    </Styles>
  );
};

EvolutionChainCard.defaultProps = {};

export default EvolutionChainCard;
