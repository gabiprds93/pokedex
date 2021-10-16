// Pokemon services
import axios from "axios";

// Types
import { Pokemon } from "../../types/pokemon.type";

const baseUrl = "https://pokeapi.co/api/v2";

/** Function to get pokemon list data.
 * @since 0.1.0
 * @returns {Promise<Pokemon[]>} Returns a promise with the result of pokemon list data.
 */
export const fetchPokemonList = async (): Promise<Pokemon[]> => {
  try {
    const { data } = await axios.get<any>(`${baseUrl}/pokemon`);

    return data.results;
  } catch (e) {
    throw new Error(e.message);
  }
};
