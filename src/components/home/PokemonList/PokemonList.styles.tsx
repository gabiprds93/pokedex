import styled from "styled-components";

// Types
import { PokemonListStyledProps as Props } from "./PokemonList.types";
// Configs
import CONSTANTS from "../../../configs/constants";

const { desktop, tablet, mobile } = CONSTANTS.BREAKPOINTS;

const PokemonListStyled = styled.div<Props>`
  &.PokemonList {
    padding: 3.2rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .PokemonList {
    &__grid {
      display: grid;
      grid-template-columns: repeat(4, 20rem);
      gap: 2.4rem;

      @media screen and (max-width: ${desktop}px) {
        grid-template-columns: repeat(3, 20rem);
      }

      @media screen and (max-width: ${tablet}px) {
        grid-template-columns: repeat(2, 20rem);
      }

      @media screen and (max-width: ${mobile}px) {
        grid-template-columns: repeat(1, 20rem);
      }
    }

    &__refresh {
      text-align: center;
      padding: 1.6rem 0;
    }
  }
`;

export default PokemonListStyled;
