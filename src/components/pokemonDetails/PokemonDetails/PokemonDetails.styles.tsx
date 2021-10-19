import styled from "styled-components";

// Types
import { PokemonDetailsStyledProps as Props } from "./PokemonDetails.types";
// Configs
import CONSTANTS from "../../../configs/constants";

const { tablet } = CONSTANTS.BREAKPOINTS;

const PokemonDetailsStyled = styled.div<Props>`
  &.PokemonDetails {
    align-items: center;
    display: flex;
    flex-direction: column;
    max-width: var(--sizes-page-maxWidth);
    min-height: var(--sizes-page-minHeight);
    padding: 2.4rem;
  }

  .PokemonDetails {
    &__header {
    }

    &__main {
      align-items: center;
      background-color: var(--palette-background-grey);
      border-radius: 1.6rem;
      box-shadow: 0 0.4rem 1.6rem var(--palette-shadow);
      display: flex;
      flex: 1;
      flex-direction: column;
      max-width: 102.4rem;
      width: 100%;

      &__top {
        display: flex;
        justify-content: center;
        padding: 2.4rem;
        width: 100%;

        @media screen and (max-width: ${tablet}px) {
          flex-wrap: wrap;
        }
      }

      &__image {
        display: flex;
        justify-content: center;
        width: 40%;

        @media screen and (max-width: ${tablet}px) {
          /* max-width: 24rem; */
          width: 100%;
        }
      }

      &__details {
        background-color: var(--palette-white);
        border-radius: 1.6rem;
        margin-left: 2.4rem;
        padding: 2.4rem;
        width: 50%;

        @media screen and (max-width: ${tablet}px) {
          margin-left: 0;
          margin-top: 4.8rem;
          width: 100%;
        }
      }

      &__title {
        font-size: 3.4rem;
        padding-bottom: 1.6rem;
      }

      &__description {
        font-size: 1.8rem;
      }

      &__types {
        padding-top: 2.4rem;

        &__title {
          font-size: 1.8rem;
        }

        &__content {
          display: flex;
          padding-top: 1.6rem;

          & > *:not(:last-child) {
            margin-right: 0.8rem;
          }
        }
      }

      &__content {
        display: flex;
        justify-content: center;
        padding: 2.4rem;
        width: 100%;

        @media screen and (max-width: ${tablet}px) {
          flex-wrap: wrap;
        }
      }

      &__info {
        width: 40%;

        @media screen and (max-width: ${tablet}px) {
          width: 100%;
        }
      }

      &__stats {
        margin-left: 2.4rem;
        width: 50%;

        @media screen and (max-width: ${tablet}px) {
          margin-left: 0;
          margin-top: 4.8rem;
          width: 100%;
        }
      }
    }

    &__footer {
    }
  }
`;

export default PokemonDetailsStyled;
