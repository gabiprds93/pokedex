import styled from "styled-components";

// Types
import { StatsCardStyledProps as Props } from "./StatsCard.types";

const StatsCardStyled = styled.div<Props>`
  &.StatsCard {
    background-color: var(--palette-white);
    border-radius: 1.6rem;
    margin-left: 2.4rem;
    padding: 2.4rem;
  }

  .StatsCard {
    &__title {
      color: var(--palette-dark-red);
      font-size: 1.8rem;
      font-weight: 500;
      padding-bottom: 0.8rem;
      padding-left: 0.8rem;
    }

    &__content {
      display: flex;
    }

    &__item {
      align-items: center;
      display: flex;
      flex-direction: column;
      padding: 0 0.8rem;
      width: 6.4rem;
    }

    &__column {
      background-color: var(--palette-backgound-stat);
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      height: 20rem;
      width: 4rem;
    }

    &__percent {
      background-color: var(--palette-grey-dark);
    }

    &__text {
      font-size: 1.4rem;
      padding: 0.8rem 0;
      text-align: center;
    }
  }
`;

export default StatsCardStyled;
