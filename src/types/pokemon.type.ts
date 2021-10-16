// Pokemon interfaces and types

/** Pokemon standard information.
 * @interface PokemonStandardData
 * @since 0.1.0
 * @property {string} name The name of the data.
 * @property {string} url The url of the data.
 */
export interface PokemonStandardData {
  name: string;
  url: string;
}

/** Pokemons information data.
 * @interface PokemonsData
 * @since 0.1.0
 * @property {string} count The total of pokemons.
 * @property {string} next The next page.
 * @property {string} previous The previous page.
 * @property {string} results The pokemos information.
 */
export interface PokemonsData {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonStandardData[];
}

/** Pokemon details information.
 * @interface PokemonDetails
 * @since 0.1.0
 * @property {number} id The id of the pokemon.
 * @property {string} name The name of the pokemon.
 * @property {PokemonType[]} types The types of the pokemon.
 * @property {string} sprites The sprites of the pokemon.
 */
export interface PokemonDetails {
  id: number;
  name: string;
  types: PokemonType[];
  sprites: Sprites;
}

/** Pokemon type information.
 * @interface PokemonType
 * @since 0.1.0
 * @property {PokemonStandardData} type The type information of the pokemon.
 */
export interface PokemonType {
  type: PokemonStandardData;
}

/** Pokemon sprites.
 * @interface Sprites
 * @since 0.1.0
 * @property {string} front_default The sprite front of the pokemon.
 */
export interface Sprites {
  front_default: string;
}
