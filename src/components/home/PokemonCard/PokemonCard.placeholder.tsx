import React from "react";

// Styles
import { PokemonCardPlaceholderStyled as Styles } from "./PokemonCard.styles";
import { PokemonCardImgPlaceholderStyled as StylesImg } from "./PokemonCard.styles";
import { PokemonCardIdPlaceholderStyled as StylesId } from "./PokemonCard.styles";
import { PokemonCardTypesPlaceholderStyled as StylesTypes } from "./PokemonCard.styles";

const PokemonCardPlaceholder: React.FC<any> = (props) => {
  return (
    <Styles className="PokemonCardPlaceholder">
      <div className="PokemonCardPlaceholder__shine" />
      <div className="PokemonCardPlaceholder__img" />
      <div className="PokemonCardPlaceholder__lines">
        <div className="PokemonCardPlaceholder__line" />
        <div className="PokemonCardPlaceholder__line PokemonCardPlaceholder__line--large" />
        <div className="PokemonCardPlaceholder__line PokemonCardPlaceholder__line--medium" />
      </div>
    </Styles>
  );
};

export const PokemonCardImgPlaceholder: React.FC<any> = (props) => {
  return <StylesImg className="PokemonCardImgPlaceholder" />;
};

export const PokemonCardIdPlaceholder: React.FC<any> = (props) => {
  return <StylesId className="PokemonCardIdPlaceholder" />;
};

export const PokemonCardTypesPlaceholder: React.FC<any> = (props) => {
  return <StylesTypes className="PokemonCardTypesPlaceholder" />;
};

PokemonCardPlaceholder.defaultProps = {};

export default PokemonCardPlaceholder;
