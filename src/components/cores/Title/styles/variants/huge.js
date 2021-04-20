import styled, { css } from "vue-styled-components";

const HugeTitleStyling = (props) => {
  const { huge } = props.theme.cores.typography.titles;
  return css`
    font-size: ${huge.mobile.fontSize};
    font-weight: ${huge.mobile.fontWeight};
    line-height: ${huge.mobile.lineHeight};
    @media (min-width: 768px) {
      font-size: ${huge.desktop.fontSize};
      font-weight: ${huge.desktop.fontWeight};
      line-height: ${huge.desktop.lineHeight};
    }
  `;
};

export default HugeTitleStyling;
