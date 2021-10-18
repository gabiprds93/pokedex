// Interfaces and types from component InfoCard

// Types
import { PokemonDetails } from "../../../types/pokemon.type";

// Component Props

/** Information card props.
 * @interface InfoCardProps
 * @since 0.1.0
 * @property {PokemonDetails} pokemon The pokemon information.
 */
export interface InfoCardProps {
  pokemon: PokemonDetails;
}

// Styled Component Props
export interface InfoCardStyledProps {
  className: string;
}
