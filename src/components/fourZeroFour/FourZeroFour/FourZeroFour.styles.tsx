import styled from "styled-components";

// Types
import { FourZeroFourStyledProps as Props } from "./FourZeroFour.types";

const FourZeroFourStyled = styled.div<Props>`
  &.FourZeroFour {
    display: flex;
    flex-direction: column;
    max-width: var(--sizes-page-maxWidth);
    min-height: var(--sizes-page-minHeight);
    min-width: var(--sizes-page-minWidth);
    padding: 2.4rem;
  }

  .FourZeroFour {
    &__header {
    }

    &__main {
      align-items: center;
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: center;

      & > p {
        font-size: 2.4rem;
        font-weight: 700;
        padding-top: 1.6rem;
      }
    }

    &__footer {
    }
  }
`;

export default FourZeroFourStyled;
