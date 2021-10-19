import styled from "styled-components";

// Types
import { PokemonImageStyledProps as Props } from "./PokemonImage.types";
import { PokemonImagePlaceholderStyledProps as PlaceholderProps } from "./PokemonImage.types";

const PokemonImageStyled = styled.div<Props>`
  &.PokemonImage {
    background-color: var(--palette-white);
    border-radius: 2.4rem;
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;
  }

  .PokemonImage {
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
