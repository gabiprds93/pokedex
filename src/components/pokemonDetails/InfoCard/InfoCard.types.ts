// Interfaces and types from component InfoCard

// Types
import { PokemonDetails, PokemonGenra } from "../../../types/pokemon.type";

// Component Props

/** Information card props.
 * @interface InfoCardProps
 * @since 0.1.0
 * @property {PokemonDetails} pokemon The pokemon information.
 * @property {PokemonGenra[]} genera The genera information.
 */
export interface InfoCardProps {
  pokemon: PokemonDetails;
  genera?: PokemonGenra[];
}

// Styled Component Props
export interface InfoCardStyledProps {
  className: string;
}
