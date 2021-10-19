// Cache utility functions
import { QueryClient } from "react-query";

// Services
import { fetchPokemonList } from "../services/pokemon/pokemon.service";
import { fetchPokemonDetails } from "../services/pokemon/pokemon.service";
import { fetchPokemonSpecies } from "../services/pokemon/pokemon.service";
// Types
import { Params } from "../services/pokemon/pokemon.service.types";

/** Function to prefetch pokemon list.
 * @since 0.1.0
 * @param {QueryClient} queryClient The cache of query.
 * @param {Params} params The params for query.
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
 * @param {QueryClient} queryClient The cache of query.
 * @param {string} name The name of pokemon.
 */
export const prefetchPokemonDetails = (
  queryClient: QueryClient,
  name: string
) => {
  return queryClient.prefetchQuery(["pokemonDetails", name], () =>
    fetchPokemonDetails(name)
  );
};

/** Function to prefetch pokemon species.
 * @since 0.1.0
 * @param {QueryClient} queryClient The cache of query.
 * @param {number} id The id of pokemon.
 */
export const prefetchPokemonSpecies = (
  queryClient: QueryClient,
  id: number
) => {
  return queryClient.prefetchQuery(["pokemonSpecies", id], () =>
    fetchPokemonSpecies(id)
  );
};
