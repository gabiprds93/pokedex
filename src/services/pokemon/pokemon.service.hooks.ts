import { useQuery } from "react-query";

// Services
import { fetchPokemonList } from "./pokemon.service";

/** Hook to fetch pokemon list.
 * @since 0.1.0
 * @returns {UseQueryResult<Pokemon[]>} Returns a use query result with the pokemon list data.
 */
export const useFetchPokemonList = () => {
  return useQuery(["pokemonList"], () => fetchPokemonList(), {
    enabled: true,
  });
};
