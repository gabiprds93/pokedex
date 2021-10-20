import { useInfiniteQuery, useQuery } from "react-query";
import { useSelector } from "react-redux";

// Services
import { fetchPokemonList, fetchPokemonDetails } from "./pokemon.service";
import { fetchPokemonSpecies, fetchEvolutionChain } from "./pokemon.service";
// Redux
import { AppState } from "../../redux/reducers";
// Types
import { Params } from "./pokemon.service.types";
import { PokemonsData } from "../../types/pokemon.type";

/** Hook to fetch pokemon list.
 * @since 0.1.0
 * @param {Params} params The params of the endpoint.
 * @returns {UseQueryResult<PokemonsData>} Returns a use query result with the pokemon list data.
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

/** Hook to fetch pokemon details.
 * @since 0.1.0
 * @param {string} name The name of the pokemon.
 * @returns {UseQueryResult<PokemonDetails>} Returns a use query result with the pokemon details.
 */
export const useFetchPokemonDetails = (name?: string) => {
  return useQuery(
    ["pokemonDetails", name],
    () => {
      return fetchPokemonDetails(name ?? "");
    },
    {
      enabled: !!name,
    }
  );
};

/** Hook to fetch pokemon species information.
 * @since 0.1.0
 * @param {number} id The id of the pokemon.
 * @returns {UseQueryResult<PokemonSpecies>} Returns a use query result with the pokemon species.
 */
export const useFetchPokemonSpecies = (id: number) => {
  return useQuery(["pokemonSpecies", id], () => {
    return fetchPokemonSpecies(id);
  });
};

/** Hook to fetch pokemon evolution chain information.
 * @since 0.1.0
 * @param {string} url The url of the request.
 * @returns {UseQueryResult<PokemonSpecies>} Returns a use query result with the pokemon evolution chain.
 */
export const useFetchEvolutionChain = (url?: string) => {
  return useQuery(
    "evolutionChain",
    () => {
      return fetchEvolutionChain(url ?? "");
    },
    { enabled: !!url }
  );
};
