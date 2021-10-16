import { createGlobalStyle } from "styled-components";

// Styles
import cssVariables from "./cssVariables";
import variables from "./variables";
import base from "./base";

const GlobalStyles = createGlobalStyle`
    ${cssVariables(variables)}
    ${base}
`;

export default GlobalStyles;
