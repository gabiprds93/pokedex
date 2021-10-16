import { useInfiniteQuery } from "react-query";
import { useSelector } from "react-redux";

// Services
import { fetchPokemonList } from "./pokemon.service";
// Redux
import { AppState } from "../../redux/reducers";
// Types
import { Params } from "./pokemon.service.types";
import { PokemonsData } from "../../types/pokemon.type";

/** Hook to fetch pokemon list.
 * @since 0.1.0
 * @returns {UseQueryResult<Pokemon[]>} Returns a use query result with the pokemon list data.
 */
export const useFetchPokemonList = (params: Params) => {
  const { offset, limit } = params;
  const cardsOffset = useSelector((state: AppState) => state.pokemon.offset);

  return useInfiniteQuery(
    "pokemonList",
    ({ pageParam }) => {
      return fetchPokemonList({
        offset: pageParam ?? offset,
        limit,
      });
    },
    {
      getNextPageParam: (lastPage: PokemonsData) => {
        const { next } = lastPage;
        return !next ? false : cardsOffset;
      },
    }
  );
};
