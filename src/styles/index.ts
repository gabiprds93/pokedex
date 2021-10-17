import { createGlobalStyle } from "styled-components";

// Styles
import cssVariables from "./cssVariables";
import variables from "./variables";
import base from "./base";
import animations from "./animations";

const GlobalStyles = createGlobalStyle`
    ${cssVariables(variables)}
    ${base}
    ${animations}
`;

export default GlobalStyles;
