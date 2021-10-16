import { combineReducers } from "redux";

// Redux
import Pokemon from "./pokemon/pokemon.reducer";

const reducer = combineReducers({
  pokemon: Pokemon,
});

export type AppState = ReturnType<typeof reducer>;

export default reducer;
