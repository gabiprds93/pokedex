import styled from "styled-components";

// Types
import { PokemonCardStyledProps as Props } from "./PokemonCard.types";
import { PokemonCardPlaceholderStyledProps as PlaceholderProps } from "./PokemonCard.types";

const PokemonCardStyled = styled.div<Props>`
  &.PokemonCard {
    align-items: center;
    border-radius: 2.4rem;
    box-shadow: 0 0.4rem 1.6rem var(--palette-shadow);
    cursor: pointer;
    display: flex;
    flex-direction: column;
    height: var(--sizes-card-height);
    padding: 1.6rem;
    width: var(--sizes-card-width);
  }

  .PokemonCard {
    &__img-box {
      height: 12rem;
      width: 12rem;
    }

    &__id {
      align-items: center;
      background-color: var(--palette-grey);
      border-radius: 0.4rem;
      display: flex;
      height: 2.4rem;
      margin: 0.8rem 0;
      padding: 0 0.8rem;
    }

    &__name {
      font-size: 2rem;
      font-weight: 500;
      line-height: 2.4rem;
      text-align: center;
      text-transform: capitalize;
    }

    &__types {
      padding-top: 0.8rem;
      display: flex;

      & > *:not(:last-child) {
        margin-right: 0.8rem;
      }
    }
  }
`;

export const PokemonCardPlaceholderStyled = styled.div<PlaceholderProps>`
  &.PokemonCardPlaceholder {
    align-items: center;
    background-color: var(--palette-white);
    border-radius: 2.4rem;
    box-shadow: 0 0.4rem 1.6rem var(--palette-shadow);
    display: flex;
    flex-direction: column;
    height: 25.6rem;
    overflow: hidden;
    padding: 1.6rem;
    position: relative;
    width: 20rem;
  }

  .PokemonCardPlaceholder {
    &__shine {
      animation: move-shine 2s infinite;
      background-color: var(--palette-shine);
      height: 7.2rem;
      position: absolute;
      transform: translate(-30%) rotateZ(-45deg);
      width: 300%;
    }

    &__img {
      background-color: var(--palette-background-grey);
      height: 12rem;
      width: 12rem;
    }

    &__lines {
      align-items: center;
      display: flex;
      flex-direction: column;
      padding-top: 0.8rem;

      & > *:not(:last-child) {
        margin-bottom: 0.8rem;
      }
    }

    &__line {
      background-color: var(--palette-background-grey);
      border-radius: 0.4rem;
      height: 2.4rem;
      width: 5.6rem;

      &--medium {
        width: 8.8rem;
      }

      &--large {
        width: 11.8rem;
      }
    }
  }
`;

export const PokemonCardImgPlaceholderStyled = styled.div<PlaceholderProps>`
  &.PokemonCardImgPlaceholder {
    background-color: var(--palette-background-grey);
    height: 12rem;
    width: 12rem;
  }

  .PokemonCardImgPlaceholder {
  }
`;

export const PokemonCardIdPlaceholderStyled = styled.div<PlaceholderProps>`
  &.PokemonCardIdPlaceholder {
    background-color: var(--palette-background-grey);
    border-radius: 0.4rem;
    height: 2.4rem;
    margin: 0.8rem 0;
    width: 5.6rem;
  }

  .PokemonCardIdPlaceholder {
  }
`;

export const PokemonCardTypesPlaceholderStyled = styled.div<PlaceholderProps>`
  &.PokemonCardTypesPlaceholder {
    background-color: var(--palette-background-grey);
    border-radius: 0.4rem;
    height: 2.4rem;
    margin-top: 0.8rem;
    width: 8.8rem;
  }

  .PokemonCardTypesPlaceholder {
  }
`;

export default PokemonCardStyled;
