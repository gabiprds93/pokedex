import styled from "styled-components";

// Types
import { PokemonListStyledProps as Props } from "./PokemonList.types";

const PokemonListStyled = styled.div<Props>`
  &.PokemonList {
    padding: 3.2rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .PokemonList {
    &__grid {
      display: grid;
      grid-template-columns: repeat(4, 20rem);
      gap: 2.4rem;
    }

    &__refresh {
      text-align: center;
      padding: 1.6rem 0;
    }
  }
`;

export default PokemonListStyled;
