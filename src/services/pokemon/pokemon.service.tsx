// Pokemon services
import axios from "axios";

// Types
import { Params } from "./pokemon.service.types";
import { PokemonsData } from "../../types/pokemon.type";

const baseUrl = "https://pokeapi.co/api/v2";

/** Function to get pokemon list data.
 * @since 0.1.0
 * @param {Params} params The params of the endpoint.
 * @returns {Promise<Pokemon[]>} Returns a promise with the result of pokemon list data.
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
