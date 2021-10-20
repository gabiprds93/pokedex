import styled from "styled-components";

import { EvolutionChainCardStyledProps as Props } from "./EvolutionChainCard.types";

const EvolutionChainCardStyled = styled.div<Props>`
  &.EvolutionChainCard {
    background-color: var(--palette-white);
    border-radius: 1.6rem;
    box-shadow: 0 0.4rem 1.6rem var(--palette-shadow);
    flex: 1;
    margin-top: 2.4rem;
    max-width: 102.4rem;
    padding: 2.4rem 4rem;
    width: 90%;
  }

  .EvolutionChainCard {
    &__title {
      color: var(--palette-dark-red);
      font-size: 1.8rem;
      font-weight: 500;
    }

    &__evolution {
      align-items: center;
      display: flex;
      justify-content: center;
      margin: auto;
    }

    &__next {
      align-items: center;

      display: flex;

      &__icon {
        margin: 2.4rem;
        width: 2.4rem;
      }

      &__container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: fit-content;
      }

      &__pokemon {
        padding: 0.8rem;
      }
    }
  }
`;

export default EvolutionChainCardStyled;
