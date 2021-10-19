import styled from "styled-components";

// Types
import { StatsCardStyledProps as Props } from "./StatsCard.types";

const StatsCardStyled = styled.div<Props>`
  &.StatsCard {
    background-color: var(--palette-white);
    border-radius: 1.6rem;
    padding: 2.4rem;
  }

  .StatsCard {
    &__title {
      color: var(--palette-dark-red);
      font-size: 1.8rem;
      font-weight: 500;
    }

    &__content {
      display: flex;
      flex-direction: column;
      justify-content: center;

      & > *:not(:last-child) {
        padding-bottom: 0.8rem;
      }
    }

    &__item {
      align-items: center;
      display: flex;

      & > p {
        width: 2.4rem;
      }
    }

    &__row {
      background-color: var(--palette-backgound-stat);
      display: flex;
      flex: 1;
      height: 2.4rem;
      margin-right: 0.8rem;
    }

    &__percent {
      background-color: var(--palette-grey-dark);
    }

    &__text {
      font-size: 1.4rem;
      padding: 0.8rem 0;
    }
  }
`;

export default StatsCardStyled;
