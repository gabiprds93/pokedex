// Pokemon interfaces and types

/** Pokemon standard information.
 * @interface PokemonStandardData
 * @since 0.1.0
 * @property {string} name The name of the data.
 */
export interface PokemonStandardData extends Url {
  name: string;
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
 * @property {number} height The height of the pokemon.
 * @property {number} weight The weight of the pokemon.
 * @property {PokemonStandardData} species The species of the pokemon.
 * @property {Stat[]} stats The stats of the pokemon.
 * @property {Ability[]} abilities The abilities of the pokemon.
 */
export interface PokemonDetails {
  id: number;
  name: string;
  types: PokemonType[];
  sprites: Sprites;
  height: number;
  weight: number;
  species: PokemonStandardData;
  stats: Stat[];
  abilities: Ability[];
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

/** Pokemon stat information.
 * @interface Stat
 * @since 0.1.0
 * @property {number} base_stat The base stat of the pokemon.
 * @property {number} effort The effort of the pokemon.
 * @property {PokemonStandardData} stat The stat of the pokemon.
 */
export interface Stat {
  base_stat: number;
  effort: number;
  stat: PokemonStandardData;
}

/** Pokemon ability information.
 * @interface Ability
 * @since 0.1.0
 * @property {PokemonStandardData} ability The ability of the pokemon.
 * @property {boolean} is_hidden Attribute that indicate if the ability is hidden.
 */
export interface Ability {
  ability: PokemonStandardData;
  is_hidden: boolean;
}

/** Pokemon species information.
 * @interface PokemonSpecies
 * @since 0.1.0
 * @property {PokemonFlavor[]} flavor_text_entries The flavor text information.
 * @property {PokemonGenra[]} genera The genera information.
 */
export interface PokemonSpecies {
  flavor_text_entries: PokemonFlavor[];
  genera: PokemonGenra[];
  evolution_chain: Url;
}

/** Pokemon flavor information.
 * @interface PokemonFlavor
 * @since 0.1.0
 * @property {string} flavor_text The flavor text of the pokemon.
 * @property {PokemonStandardData} language The language of the text.
 */
export interface PokemonFlavor {
  flavor_text: string;
  language: PokemonStandardData;
}

/** Pokemon genera information.
 * @interface PokemonGenra
 * @since 0.1.0
 * @property {string} genus The genus of the pokemon.
 * @property {PokemonStandardData} language The language of the text.
 */
export interface PokemonGenra {
  genus: string;
  language: PokemonStandardData;
}

/** Url interface.
 * @interface Url
 * @since 0.1.0
 * @property {string} url The url text.
 */
export interface Url {
  url: string;
}

/** Evolution chain data.
 * @interface EvolutionChain
 * @since 0.1.0
 * @property {number} id The id of the evolution chain.
 * @property {Chain} chain The chain information.
 */
export interface EvolutionChain {
  id: number;
  chain: Chain;
}

/** Chain information.
 * @interface Chain
 * @since 0.1.0
 * @property {Chain[]} evolves_to The evolves of the pokemon.
 * @property {PokemonStandardData} species The pokemon.
 */
export interface Chain {
  evolves_to: Chain[] | [];
  species: PokemonStandardData;
}
