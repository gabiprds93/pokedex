// Pokemon services

// Types
import { Params } from "./pokemon.service.types";
import { PokemonsData, PokemonDetails } from "../../types/pokemon.type";

const baseUrl = "https://pokeapi.co/api/v2";

/** Function to get pokemon list data.
 * @since 0.1.0
 * @param {Params} params The params of the endpoint.
 * @returns {Promise<PokemonStandardData[]>} Returns a promise with the result of pokemon list data.
 */
export const fetchPokemonList = async (
  params: Params
): Promise<PokemonsData> => {
  const { offset, limit } = params;

  try {
    const data = await fetch(
      `${baseUrl}/pokemon?offset=${offset}&limit=${limit}`
    )
      .then((response) => response.json())
      .then((data) => data);

    return data;
  } catch (e) {
    throw new Error(e.message);
  }
};

/** Function to get pokemon details.
 * @since 0.1.0
 * @param {string} name The name of the pokemon.
 * @returns {Promise<PokemonDetails>} Returns a promise with the result of pokemon details.
 */
export const fetchPokemonDetails = async (
  name: string
): Promise<PokemonDetails> => {
  try {
    const data = await fetch(`${baseUrl}/pokemon/${name}`)
      .then((response) => response.json())
      .then((data) => data);

    return data;
  } catch (e) {
    throw new Error(e.message);
  }
};
