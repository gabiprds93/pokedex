import styled from "styled-components";

// Types
import { TypeLabelStyledProps as Props } from "./TypeLabel.types";

const TypeLabelStyled = styled.div<Props>`
  &.TypeLabel {
    background-color: ${(props) => `var(--palette-types-${props.type})`};
    border-radius: 0.4rem;
    height: 2.4rem;
    padding: 0.2rem 0.4rem;
    text-align: center;
    width: 8rem;
  }

  .TypeLabel {
    &__label {
      color: var(--palette-black);
      font-size: 1.4rem;
      font-weight: 500;
      text-transform: capitalize;
    }
  }
`;

export default TypeLabelStyled;
