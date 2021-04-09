import styled, { css } from "vue-styled-components";

const IconStyling = (start, end) => {
  const margin = () => {
    if (start && end) {
      return css`
        &:first-of-type {
          margin-right: 8px;
        }
        &:last-of-type {
          margin-left: 8px;
        }
      `;
    } else if (start || end) {
      const direction = start ? "right" : "left";
      return css`margin-${direction}: 8px;`;
    }
  };
  return css`
    svg {
      ${margin};
      fill: currentColor;
    }
  `;
};

export default IconStyling;
