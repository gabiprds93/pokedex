import styled from "styled-components";

// Types
import { PokemonCardStyledProps as Props } from "./PokemonCard.types";

const PokemonCardStyled = styled.div<Props>`
  &.PokemonCard {
    align-items: center;
    border-radius: 2.4rem;
    box-shadow: 0 3px 15px rgba(100, 100, 100, 0.5);
    cursor: pointer;
    display: flex;
    flex-direction: column;
    padding: 1.6rem;
    width: var(--sizes-card-width);
  }

  .PokemonCard {
    &__name {
      font-size: 1.8rem;
      font-weight: 700;
      text-align: center;
      text-transform: capitalize;
    }
  }
`;

export default PokemonCardStyled;
