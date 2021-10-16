import styled from "styled-components";

// Types
import { PokemonCardStyledProps as Props } from "./PokemonCard.types";

const PokemonCardStyled = styled.div<Props>`
  &.PokemonCard {
    align-items: center;
    border-radius: 2.4rem;
    box-shadow: 0 3px 15px var(--palette-shadow);
    cursor: pointer;
    display: flex;
    flex-direction: column;
    padding: 1.6rem;
    width: var(--sizes-card-width);
  }

  .PokemonCard {
    &__img-box {
      border-radius: 50%;
      position: relative;
    }

    &__id {
      margin: 1.6rem 0;
      padding: 0.4rem 0.8rem;
      background-color: var(--palette-grey);
      border-radius: 0.4rem;
    }

    &__name {
      font-size: 2rem;
      font-weight: 500;
      text-align: center;
      text-transform: capitalize;
    }

    &__types {
      padding-top: 1.6rem;
      display: flex;

      & > *:not(:last-child) {
        margin-right: 0.8rem;
      }
    }
  }
`;

export default PokemonCardStyled;
