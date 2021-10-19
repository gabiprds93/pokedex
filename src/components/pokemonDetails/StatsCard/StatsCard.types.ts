// Interfaces and types from component StatsCard

// Types
import { Stat } from "../../../types/pokemon.type";

// Component Props

/** Stats card props.
 * @interface StatsCardProps
 * @since 0.1.0
 * @property {Stat[]} stats The stats of the pokemon.
 */
export interface StatsCardProps {
  stats: Stat[];
}

// Styled Component Props
export interface StatsCardStyledProps {
  className: string;
}
