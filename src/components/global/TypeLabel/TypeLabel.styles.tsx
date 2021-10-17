import styled from "styled-components";

// Types
import { TypeLabelStyledProps as Props } from "./TypeLabel.types";

const TypeLabelStyled = styled.div<Props>`
  &.TypeLabel {
    background-color: ${(props) => `var(--palette-types-${props.type})`};
    border-radius: 0.4rem;
    color: var(--palette-white);
    font-size: 1.2rem;
    font-weight: 500;
    height: 2.4rem;
    padding: 0.2rem 0.4rem;
    text-align: center;
    text-transform: capitalize;
    width: 8rem;
  }

  .TypeLabel {
  }
`;

export default TypeLabelStyled;
