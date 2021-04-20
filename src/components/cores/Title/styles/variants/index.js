import styled, { css } from "vue-styled-components";
import HugeTitleStyling from "./huge";
import GiantTitleStyling from "./giant";
import EpicTitleStyling from "./epic";
import LargeTitleStyling from "./large";

const VariantStyling = (variant) => {
  switch (variant) {
    case "huge":
      return css`
        ${(props) => HugeTitleStyling(props)}
      `;
    case "giant":
      return css`
        ${(props) => GiantTitleStyling(props)}
      `;
    case "epic":
      return css`
        ${(props) => EpicTitleStyling(props)}
      `;
    case "large":
      return css`
        ${(props) => LargeTitleStyling(props)}
      `;
    default:
      return css`
        ${(props) => HugeTitleStyling(props)}
      `;
  }
};

export default VariantStyling;
