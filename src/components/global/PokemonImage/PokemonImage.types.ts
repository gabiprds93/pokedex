// Interfaces and types from component PokemonImage

// Types
import { PokemonDetails } from "../../../types/pokemon.type";

// Component Props

/** Pokemon image props.
 * @interface PokemonImageProps
 * @since 0.1.0
 * @property {PokemonDetails} pokemon The pokemon information.
 */
export interface PokemonImageProps {
  pokemon: PokemonDetails;
}

// Styled Component Props

export interface PokemonImageStyledProps {
  className: string;
}

// Styled Placeholder Props
export interface PokemonImagePlaceholderStyledProps {
  className: string;
}
