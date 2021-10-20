import Head from "next/head";
import Image from "next/image";

// Types, Styles
import { FourZeroFourProps as Props } from "./FourZeroFour.types";
import Styles from "./FourZeroFour.styles";
// Configs
import i18n from "../../../i18n/i18n";

import fourZeroFour from "../../../../public/assets/images/404.png";

const FourZeroFour: React.FC<Props> = (props) => {
  return (
    <Styles className="FourZeroFour">
      <Head>
        <title>{i18n.t("notFound")}</title>
      </Head>

      <header className="FourZeroFour__header" />

      <main className="FourZeroFour__main">
        <Image
          src={fourZeroFour}
          alt={i18n.t("notFound")}
          width={300}
          height={300}
        />

        <p>{i18n.t("notFound")}</p>
      </main>

      <footer className="FourZeroFour__footer" />
    </Styles>
  );
};

FourZeroFour.defaultProps = {};

export default FourZeroFour;
