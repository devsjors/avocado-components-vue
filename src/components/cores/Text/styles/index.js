import styled, { css } from "vue-styled-components";
import VariantStyling from "./variants";

const StyledText = (StyledProps) => {
  const { variant } = StyledProps;
  return styled.p`
    ${(props) => VariantStyling(variant)}
  `;
};

export { StyledText };
