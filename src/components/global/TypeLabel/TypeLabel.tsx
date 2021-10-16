import React from "react";

// Types, Styles
import { TypeLabelProps as Props } from "./TypeLabel.types";
import Styles from "./TypeLabel.styles";

const TypeLabel: React.FC<Props> = (props) => {
  const { type } = props;

  return (
    <Styles className="TypeLabel" type={type}>
      {type}
    </Styles>
  );
};

TypeLabel.defaultProps = {};

export default TypeLabel;
