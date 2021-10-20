import Head from "next/head";
import { useDispatch } from "react-redux";

// Components
import InfoCard from "../InfoCard/InfoCard";
import StatsCard from "../StatsCard/StatsCard";
import PokemonImage from "../../global/PokemonImage/PokemonImage";
import TypeLabel from "../../global/TypeLabel/TypeLabel";
import EvolutionChainCard from "../EvolutionChainCard/EvolutionChainCard";
// Utils
import { capitalize } from "../../../utils/common.util";
// Services
import { useFetchPokemonSpecies } from "../../../services/pokemon/pokemon.service.hooks";
import { useFetchEvolutionChain } from "../../../services/pokemon/pokemon.service.hooks";
// Redux
import { setPokemonOffset } from "../../../redux/pokemon/pokemon.actions";
// Types, Styles
import { PokemonDetailsProps as Props } from "./PokemonDetails.types";
import Styles from "./PokemonDetails.styles";
// Configs
import i18n from "../../../i18n/i18n";
import CONSTANTS from "../../../configs/constants";

const { POKEMON_DEFAULT_PARAMS } = CONSTANTS;

const PokemonDetails: React.FC<Props> = (props) => {
  const { pokemon } = props;
  const { id, name, types, stats } = pokemon;
  const { data: pokemonSpecies } = useFetchPokemonSpecies(id);
  const { flavor_text_entries, genera, evolution_chain } = pokemonSpecies ?? {};
  const { data: evolutionChain } = useFetchEvolutionChain(evolution_chain?.url);
  const dispatch = useDispatch();

  dispatch(setPokemonOffset(POKEMON_DEFAULT_PARAMS.limit));

  const nameCapitalize = capitalize(name);
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

      <EvolutionChainCard chain={evolutionChain?.chain} />

      <footer className="PokemonDetails__footer" />
    </Styles>
  );
};

PokemonDetails.defaultProps = {};

export default PokemonDetails;
