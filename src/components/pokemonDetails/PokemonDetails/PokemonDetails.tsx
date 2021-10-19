import Head from "next/head";

// Components
import InfoCard from "../InfoCard/InfoCard";
import StatsCard from "../StatsCard/StatsCard";
import PokemonImage from "../../global/PokemonImage/PokemonImage";
import TypeLabel from "../../global/TypeLabel/TypeLabel";
// Utils
import { capitalize } from "../../../utils/common.util";
// Services
import { useFetchPokemonSpecies } from "../../../services/pokemon/pokemon.service.hooks";
// Types, Styles
import { PokemonDetailsProps as Props } from "./PokemonDetails.types";
import Styles from "./PokemonDetails.styles";
// Configs
import i18n from "../../../i18n/i18n";

const PokemonDetails: React.FC<Props> = (props) => {
  const { pokemon } = props;
  const { id, name, types, stats } = pokemon;
  const { data: pokemonSpecies } = useFetchPokemonSpecies(id);

  const nameCapitalize = capitalize(name);
  const { flavor_text_entries, genera } = pokemonSpecies ?? {};
  const { flavor_text } =
    flavor_text_entries?.find(
      (flavor) => flavor.language.name === window.navigator.language
    ) ?? {};

  return (
    <Styles className="PokemonDetails">
      <Head>
        <title>{nameCapitalize}</title>

        <meta
          name="description"
          content={`${i18n.t("descriptionDetails")} ${nameCapitalize}`}
        />
      </Head>

      <header className="PokemonDetails__header" />

      <main className="PokemonDetails__main">
        <div className="PokemonDetails__main__top">
          <div className="PokemonDetails__main__image">
            <PokemonImage pokemon={pokemon} />
          </div>

          <div className="PokemonDetails__main__details">
            <h1 className="PokemonDetails__main__title">
              {`${nameCapitalize} ${i18n.t("numeration")} ${id}`}
            </h1>

            <p className="PokemonDetails__main__description">{flavor_text}</p>

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

        <div className="PokemonDetails__main__content">
          <div className="PokemonDetails__main__info">
            <InfoCard pokemon={pokemon} genera={genera} />
          </div>

          <div className="PokemonDetails__main__stats">
            <StatsCard stats={stats} />
          </div>
        </div>
      </main>

      <footer className="PokemonDetails__footer" />
    </Styles>
  );
};

PokemonDetails.defaultProps = {};

export default PokemonDetails;
