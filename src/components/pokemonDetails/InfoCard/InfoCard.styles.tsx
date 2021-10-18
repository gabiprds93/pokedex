import styled from "styled-components";

// Styles
import { InfoCardStyledProps as Props } from "./InfoCard.types";

const InfoCardStyled = styled.div<Props>`
  &.InfoCard {
    background-color: var(--palette-white);
    border-radius: 1.6rem;
    display: flex;
    justify-content: space-around;
    min-height: 16.8rem;
    padding: 2.4rem;
  }

  .InfoCard {
    &__content {
      display: flex;
      flex-direction: column;

      & > *:not(:last-child) {
        padding-bottom: 1.6rem;
      }
    }

    &__info-container {
      display: flex;
      flex-direction: column;

      &__title {
        color: var(--palette-dark-red);
        font-size: 1.8rem;
        font-weight: 500;
        padding-bottom: 0.8rem;
      }

      &__data {
        color: var(--palette-black);
        font-size: 1.6rem;

        &--ability {
          text-transform: capitalize;
        }
      }
    }
  }
`;

export default InfoCardStyled;
