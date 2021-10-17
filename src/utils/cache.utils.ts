// Cache utility functions
import { QueryClient } from "react-query";

// Services
import { fetchPokemonDetails } from "../services/pokemon/pokemon.service";
import { fetchPokemonList } from "../services/pokemon/pokemon.service";
// Types
import { Params } from "../services/pokemon/pokemon.service.types";

/** Function to prefetch pokemon list.
 * @since 0.1.0
 * @param queryClient The cache of query.
 * @param params The params for query.
 */
export const prefetchPokemonList = (
  queryClient: QueryClient,
  params: Params
) => {
  return queryClient.prefetchInfiniteQuery(
    "pokemonList",
    () => fetchPokemonList(params),
    {
      //@ts-ignore
      initialData: () => ({
        pageParams: [1],
      }),
    }
  );
};

/** Function to prefetch pokemon details.
 * @since 0.1.0
 * @param queryClient The cache of query.
 * @param params The name of pokemon.
 */
export const prefetchPokemonDetails = (
  queryClient: QueryClient,
  name: string
) => {
  return queryClient.prefetchQuery(["pokemonDetails", name], () =>
    fetchPokemonDetails(name)
  );
};
