import React from "react";

// Components
import InfoCard from "../InfoCard/InfoCard";
import PokemonImage from "../../global/PokemonImage/PokemonImage";
import TypeLabel from "../../global/TypeLabel/TypeLabel";
// Types, Styles
import { PokemonDetailsProps as Props } from "./PokemonDetails.types";
import Styles from "./PokemonDetails.styles";
// Configs
import i18n from "../../../i18n/i18n";

const PokemonDetails: React.FC<Props> = (props) => {
  const { pokemon } = props;

  const { id, name, types } = pokemon;

  return (
    <Styles className="PokemonDetails">
      <header className="PokemonDetails__header" />

      <main className="PokemonDetails__main">
        <h1 className="PokemonDetails__main__title">
          {`${name} ${i18n.t("numeration")} ${id}`}
        </h1>

        <PokemonImage pokemon={pokemon} />

        <div className="PokemonDetails__main__content">
          <div className="PokemonDetails__main__info">
            <InfoCard pokemon={pokemon} />

            <div className="PokemonDetails__main__types">
              <p className="PokemonDetails__main__types__title">
                {i18n.t("type")}
              </p>

              <div className="PokemonDetails__main__types__content">
                {types.map((type, index) => {
                  return <TypeLabel key={index} type={type.type.name} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="PokemonDetails__footer" />
    </Styles>
  );
};

PokemonDetails.defaultProps = {};

export default PokemonDetails;
