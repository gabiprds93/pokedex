import styled from "styled-components";

// Types
import { PokemonImageStyledProps as Props } from "./PokemonImage.types";
import { PokemonImagePlaceholderStyledProps as PlaceholderProps } from "./PokemonImage.types";

const PokemonImageStyled = styled.div<Props>`
  &.PokemonImage {
    align-items: center;
    background-color: var(--palette-white);
    border-radius: 2.4rem;
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .PokemonImage {
    &__container {
      height: 24rem;
      position: relative;
    }
  }
`;

export const PokemonImagePlaceholderStyled = styled.div<PlaceholderProps>`
  &.PokemonImagePlaceholder {
    background-color: var(--palette-background-grey);
    border-radius: 2.4rem;
    height: 24rem;
    position: absolute;
    width: 24rem;
    z-index: 1;
  }

  .PokemonImagePlaceholder {
  }
`;

export default PokemonImageStyled;
