// Pokemon services
import axios from "axios";

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
  try {
    const { data } = await axios.get<any>(`${baseUrl}/pokemon`, { params });

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
    const { data } = await axios.get<any>(`${baseUrl}/pokemon/${name}`);

    return data;
  } catch (e) {
    throw new Error(e.message);
  }
};
