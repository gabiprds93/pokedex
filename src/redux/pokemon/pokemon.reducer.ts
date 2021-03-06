// Types
import { PokemonState as State, PokemonActions } from "./pokemon.types";
import { SET_POKEMON_LIMIT, SET_POKEMON_OFFSET } from "./pokemon.types";
import { SetPokemonLimitAction } from "./pokemon.types";
import { SetPokemonOffsettAction } from "./pokemon.types";
// Configs
import CONSTANTS from "../../configs/constants";

const { POKEMON_DEFAULT_PARAMS } = CONSTANTS;

const initialState: State = {
  offset: POKEMON_DEFAULT_PARAMS.limit,
  limit: POKEMON_DEFAULT_PARAMS.limit,
};

const reducer = (state = initialState, action: PokemonActions): State => {
  switch (action.type) {
    case SET_POKEMON_OFFSET:
      return setPokemonOffset(state, action.payload);
    case SET_POKEMON_LIMIT:
      return setPokemonLimit(state, action.payload);
    default:
      return state;
  }
};

const setPokemonOffset = (
  state: State,
  payload: SetPokemonOffsettAction["payload"]
): State => {
  return { ...state, offset: payload };
};

const setPokemonLimit = (
  state: State,
  payload: SetPokemonLimitAction["payload"]
): State => {
  return { ...state, limit: payload };
};

export default reducer;
