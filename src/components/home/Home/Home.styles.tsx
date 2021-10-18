import styled from "styled-components";

// Types
import { HomeStyledProps as Props } from "./Home.types";

const HomeStyled = styled.div<Props>`
  &.Home {
    display: flex;
    flex-direction: column;
    min-height: var(--sizes-page-minHeight);
    min-width: var(--sizes-page-minWidth);
    max-width: var(--sizes-page-maxWidth);
    padding: 2.4rem;
  }

  .Home {
    &__header {
    }

    &__main {
      flex: 1;

      &__title {
        font-size: 3.2rem;
        text-align: center;
      }
    }

    &__footer {
    }
  }
`;

export default HomeStyled;
