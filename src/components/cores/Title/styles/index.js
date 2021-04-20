import styled, { css } from "vue-styled-components";
import VariantStyling from "./variants";

const StyledTitle = (StyledProps) => {
  const { variant } = StyledProps;
  return styled.h1`
    ${(props) => VariantStyling(variant)}
  `;
};

export { StyledTitle };
