import styled from "styled-components";

// Types
import { EvolutionChainCardStyledProps as Props } from "./EvolutionChainCard.types";
// Configs
import CONSTANTS from "../../../configs/constants";

const { desktop } = CONSTANTS.BREAKPOINTS;

const EvolutionChainCardStyled = styled.div<Props>`
  &.EvolutionChainCard {
    background-color: var(--palette-white);
    border-radius: 1.6rem;
    box-shadow: 0 0.4rem 1.6rem var(--palette-shadow);
    margin-top: 2.4rem;
    max-width: 102.4rem;
    padding: 2.4rem;
    width: 100%;
  }

  .EvolutionChainCard {
    &__title {
      color: var(--palette-dark-red);
      font-size: 1.8rem;
      font-weight: 500;
      padding-bottom: 2.4rem;
    }

    &__evolution {
      align-items: center;
      display: flex;
      justify-content: center;
      margin: auto;

      @media screen and (max-width: ${desktop}px) {
        flex-direction: column;
      }
    }

    &__next {
      align-items: center;
      display: flex;

      @media screen and (max-width: ${desktop}px) {
        flex-direction: column;
      }

      &__icon {
        margin: 2.4rem;
        width: 3.6rem;
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
