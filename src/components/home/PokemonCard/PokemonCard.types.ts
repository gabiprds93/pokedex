// Interfaces and types from component PokemonCard

// Types
import { PokemonStandardData } from "../../../types/pokemon.type";

// Component Props

/** Pokemon card props.
 * @interface PokemonCardProps
 * @since 0.1.0
 * @property {PokemonStandardData} pokemon The pokemon information.
 */
export interface PokemonCardProps {
  pokemon: PokemonStandardData;
}

// Styled Component Props

/** Pokemon card styled props.
 * @interface PokemonCardStyledProps
 * @since 0.1.0
 * @property {string} className The class name of the component.
 * @property {string} type The type of the pokemon.
 */
export interface PokemonCardStyledProps {
  className: string;
  type?: string;
}

// Styled Placeholder Props
export interface PokemonCardPlaceholderStyledProps {
  className: string;
}
