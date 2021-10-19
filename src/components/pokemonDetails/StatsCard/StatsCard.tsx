import React from "react";

// Utils
import { capitalize } from "../../../utils/common.util";
// Types, Styles
import { StatsCardProps as Props } from "./StatsCard.types";
import Styles from "./StatsCard.styles";
// Configs
import i18n from "../../../i18n/i18n";
import CONSTANTS from "../../../configs/constants";

const { MAX_STAT_POINTS } = CONSTANTS;

const StatsCard: React.FC<Props> = (props) => {
  const { stats } = props;

  return (
    <Styles className="StatsCard">
      <p className="StatsCard__title">{i18n.t("stats")}</p>

      <div className="StatsCard__content">
        {stats.map((item, index) => {
          const { base_stat, stat } = item;
          const statName = stat.name.split("-").join(" ");
          const statCapitalize = capitalize(statName);
          const percent = (base_stat * 100) / MAX_STAT_POINTS;

          return (
            <div key={index}>
              <p className="StatsCard__text">{statCapitalize}</p>

              <div className="StatsCard__item">
                <div className="StatsCard__row">
                  <div
                    className="StatsCard__percent"
                    style={{ width: `${percent}%` }}
                  />
                </div>

                <p className="StatsCard__text">{base_stat}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Styles>
  );
};

StatsCard.defaultProps = {};

export default StatsCard;
