import styled from "styled-components";

// Types
import { PokemonListStyledProps as Props } from "./PokemonList.types";
// Configs
import CONSTANTS from "../../../configs/constants";

const { desktop, tablet, mobile } = CONSTANTS.BREAKPOINTS;

const PokemonListStyled = styled.div<Props>`
  &.PokemonList {
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 3.2rem;
    width: 100%;
  }

  .PokemonList {
    &__grid {
      display: grid;
      gap: 2.4rem;
      grid-template-columns: repeat(4, 20rem);

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
      font-size: 1.6rem;
      padding: 2.4rem 0;
      text-align: center;
    }
  }
`;

export default PokemonListStyled;
