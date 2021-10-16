// Interfaces and types from component PokemonCard

// Types
import { Pokemon } from "../../../types/pokemon.type";

// Component Props

/** Pokemon card props.
 * @interface PokemonCardProps
 * @since 0.1.0
 * @property {Pokemon} pokemon The pokemon information.
 */
export interface PokemonCardProps {
  pokemon: Pokemon;
}

// Styled Component Props
export interface PokemonCardStyledProps {
  className: string;
}
