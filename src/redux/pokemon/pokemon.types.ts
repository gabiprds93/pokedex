// Reducer types and interfaces
export const SET_POKEMON_OFFSET = "SET_POKEMON_OFFSET";
export const SET_POKEMON_LIMIT = "SET_POKEMON_LIMIT";

// Reducer State interface
export interface PokemonState {
  offset: number;
  limit: number;
}

export interface SetPokemonOffsettAction {
  type: typeof SET_POKEMON_OFFSET;
  payload: number;
}

export interface SetPokemonLimitAction {
  type: typeof SET_POKEMON_LIMIT;
  payload: number;
}

// Reducer's Actions interfaces
export type PokemonActions = SetPokemonOffsettAction | SetPokemonLimitAction;
