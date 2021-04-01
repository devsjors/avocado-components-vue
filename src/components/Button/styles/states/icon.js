import styled, { css } from "vue-styled-components";

const IconStyling = (start, end) => {
  const direction = start ? "right" : "left";
  return css`
    svg {
      margin-${direction}: 8px;
      fill: currentColor;
    }
  `;
};

export default IconStyling;
