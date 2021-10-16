// Types
import { SET_POKEMON_LIMIT, SET_POKEMON_OFFSET } from "./pokemon.types";

export const setPokemonOffset = (quantity: number) => {
  return { type: SET_POKEMON_OFFSET, payload: quantity };
};

export const setPokemonLimit = (quantity: number) => {
  return { type: SET_POKEMON_LIMIT, payload: quantity };
};
