import styled, { css } from "vue-styled-components";
import VariantStyling from "./variants";

const StyledSubtitle = (StyledProps) => {
  const { as, variant } = StyledProps;
  return styled.h4`
    ${(props) => VariantStyling(variant)}
  `;
};

export { StyledSubtitle };
