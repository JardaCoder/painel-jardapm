import { transparentize } from "polished";
import { createGlobalStyle } from "styled-components/macro";
import { color } from "./colors";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Lato', sans-serif;
    background-color: ${(p) => color.background};
    color: ${(p) => color.secondary};
  }

  .confirm-overlay {
    background-color: ${transparentize(0.2, color.secondary)};
  }
  .info-overlay {
    background-color: ${transparentize(0.2, color.background)};
  }
`;
