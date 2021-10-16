// Pokemon interfaces and types

/** Pokemon information.
 * @interface Pokemon
 * @since 0.1.0
 * @property {string} name The name of the pokemon.
 * @property {string} url The url of the pokemon details.
 */
export interface Pokemon {
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
  results: Pokemon[];
}
