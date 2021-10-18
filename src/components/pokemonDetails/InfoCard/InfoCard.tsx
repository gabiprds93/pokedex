import React from "react";

// Types, Styles
import { InfoCardProps as Props } from "./InfoCard.types";
import Styles from "./InfoCard.styles";
import i18n from "../../../i18n/i18n";

const InfoCard: React.FC<Props> = (props) => {
  const { pokemon } = props;

  const { height, weight, abilities } = pokemon;

  return (
    <Styles className="InfoCard">
      <div className="InfoCard__content">
        <div className="InfoCard__info-container">
          <span className="InfoCard__info-container__title">
            {i18n.t("height")}
          </span>

          <span className="InfoCard__info-container__data">{height}</span>
        </div>

        <div className="InfoCard__info-container">
          <span className="InfoCard__info-container__title">
            {i18n.t("weight")}
          </span>

          <span className="InfoCard__info-container__data">{weight}</span>
        </div>
      </div>

      <div className="InfoCard__content">
        <div className="InfoCard__info-container">
          <span className="InfoCard__info-container__title">
            {i18n.t("category")}
          </span>

          <span className="InfoCard__info-container__data">{height}</span>
        </div>

        <div className="InfoCard__info-container">
          <span className="InfoCard__info-container__title">
            {i18n.t("abilities")}
          </span>

          {abilities.map((ability, index) => {
            return (
              <span
                key={index}
                className="InfoCard__info-container__data InfoCard__info-container__data--ability"
              >
                {ability.ability.name}
              </span>
            );
          })}
        </div>
      </div>
    </Styles>
  );
};

InfoCard.defaultProps = {};

export default InfoCard;
