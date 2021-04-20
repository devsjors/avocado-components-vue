import styled, { css } from "vue-styled-components";
import MediumSubtitleStyling from "./medium";
import SmallSubtitleStyling from "./small";
import TinySubtitleStyling from "./tiny";

const VariantStyling = (variant) => {
  switch (variant) {
    case "medium":
      return css`
        ${(props) => MediumSubtitleStyling(props)}
      `;
    case "small":
      return css`
        ${(props) => SmallSubtitleStyling(props)}
      `;
    case "tiny":
      return css`
        ${(props) => TinySubtitleStyling(props)}
      `;
    default:
      return css`
        ${(props) => MediumSubtitleStyling(props)}
      `;
  }
};

export default VariantStyling;
