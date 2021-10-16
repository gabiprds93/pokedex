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
export interface PokemonCardStyledProps {
  className: string;
}
