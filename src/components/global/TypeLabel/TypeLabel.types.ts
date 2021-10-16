// Interfaces and types from component TypeLabel

// Component Props

/** Type label props.
 * @interface TypeLabelProps
 * @since 0.1.0
 * @property {string} type The type of the pokemon.
 */
export interface TypeLabelProps {
  type: string;
}

// Styled Component Props

/** TypeLabelStyledProps
 * @interface TypeLabelStyledProps
 * @since 0.1.0
 * @property {string} className The class name of the component.
 * @property {string} type The type of the pokemon.
 */
export interface TypeLabelStyledProps {
  className: string;
  type: string;
}
