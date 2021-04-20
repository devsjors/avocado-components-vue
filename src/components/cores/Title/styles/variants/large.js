import styled, { css } from "vue-styled-components";

const LargeTitleStyling = (props) => {
  const { large } = props.theme.cores.typography.titles;
  return css`
    font-size: ${large.mobile.fontSize};
    font-weight: ${large.mobile.fontWeight};
    line-height: ${large.mobile.lineHeight};
    @media (min-width: 768px) {
      font-size: ${large.desktop.fontSize};
      font-weight: ${large.desktop.fontWeight};
      line-height: ${large.desktop.lineHeight};
    }
  `;
};

export default LargeTitleStyling;
