import styled, { css } from "vue-styled-components";
import IntroductionStyling from "./introduction";
import HighlightedStyling from "./highlighted";
import BodyBoldStyling from "./body-bold";
import BodyRegularStyling from "./body-regular";
import BodyLightStyling from "./body-light";
import CaptionStyling from "./caption";
import MiniStyling from "./mini";

const VariantStyling = (variant) => {
  switch (variant) {
    case "introduction":
      return css`
        ${(props) => IntroductionStyling(props)}
      `;
    case "highlighted":
      return css`
        ${(props) => HighlightedStyling(props)}
      `;
    case "body-bold":
      return css`
        ${(props) => BodyBoldStyling(props)}
      `;
    case "body-regular":
      return css`
        ${(props) => BodyRegularStyling(props)}
      `;
    case "body-light":
      return css`
        ${(props) => BodyLightStyling(props)}
      `;
    case "caption":
      return css`
        ${(props) => CaptionStyling(props)}
      `;
    case "mini":
      return css`
        ${(props) => MiniStyling(props)}
      `;
    default:
      return css`
        ${(props) => BodyLightStyling(props)}
      `;
  }
};

export default VariantStyling;
