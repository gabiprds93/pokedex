// Interfaces and types from component EvolutionChainCard

// Types
import { Chain } from "../../../types/pokemon.type";

// Component Props

/** Evolution chain card properties.
 * @interface
 * @since 0.1.0
 * @property {Chain} chain The chain of the pokemon.
 */
export interface EvolutionChainCardProps {
  chain: Chain | undefined;
}

// Styled Component Props
export interface EvolutionChainCardStyledProps {
  className: string;
}
