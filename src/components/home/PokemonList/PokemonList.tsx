import React, { useCallback, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

// Components
import PokemonCard from "../PokemonCard/PokemonCard";
import PokemonCardPlaceholder from "../PokemonCard/PokemonCard.placeholder";
// Redux
import { AppState } from "../../../redux/reducers";
import { setPokemonOffset } from "../../../redux/pokemon/pokemon.actions";
// Services
import { useFetchPokemonList } from "../../../services/pokemon/pokemon.service.hooks";
// Types, Styles
import { PokemonListProps as Props } from "./PokemonList.types";
import { PokemonStandardData } from "../../../types/pokemon.type";
import Styles from "./PokemonList.styles";
// Configs
import i18n from "../../../i18n/i18n";
import CONSTANTS from "../../../configs/constants";

const { POKEMON_DEFAULT_PARAMS } = CONSTANTS;

const PokemonList: React.FC<Props> = (props) => {
  const observer = useRef<IntersectionObserver>();
  const dispatch = useDispatch();
  const cardsOffset = useSelector((state: AppState) => state.pokemon.offset);
  const cardsLimit = useSelector((state: AppState) => state.pokemon.limit);
  const fetchPokemonList = useFetchPokemonList({
    offset: POKEMON_DEFAULT_PARAMS.offset,
    limit: cardsLimit,
  });

  const { data: pokemonData, isFetchingNextPage } = fetchPokemonList;
  const { fetchNextPage, hasNextPage } = fetchPokemonList;

  /** Function that triggers to bring more pokemons information.
   * @since 0.1.0
   * @param {HTMLSpanElement} item Referenced element.
   */
  const triggerRef = useCallback(
    (item: HTMLSpanElement) => {
      if (isFetchingNextPage) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
          dispatch(setPokemonOffset(cardsOffset + cardsLimit));
        }
      });

      if (item) observer.current.observe(item);
    },
    [
      cardsLimit,
      cardsOffset,
      dispatch,
      fetchNextPage,
      hasNextPage,
      isFetchingNextPage,
    ]
  );

  /** Function to get an array of pokemons information.
   * @since 0.1.0
   * @returns { PokemonStandardData[]} Returns array of pokemons information.
   */
  const getPokemonArray = useCallback(() => {
    return pokemonData?.pages.reduce<PokemonStandardData[]>((acc, page) => {
      if (!page.results) {
        return [...acc];
      }

      return [...acc, ...page.results];
    }, []);
  }, [pokemonData]);

  const pokemonArray = getPokemonArray();

  return (
    <Styles className="PokemonList">
      <div className="PokemonList__grid">
        {!pokemonArray
          ? Array(20)
              .fill(undefined)
              .map((_, index) => {
                return <PokemonCardPlaceholder key={index} />;
              })
          : null}

        {pokemonArray?.map((pokemon, index) => {
          return <PokemonCard key={index} pokemon={pokemon} />;
        })}
      </div>

      <span className="PokemonList__refresh" ref={triggerRef}>
        {i18n.t("loading")}
      </span>
    </Styles>
  );
};

PokemonList.defaultProps = {};

export default PokemonList;
