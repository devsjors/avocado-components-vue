import styled, { css } from "vue-styled-components";

const GiantTitleStyling = (props) => {
  const { giant } = props.theme.cores.typography.titles;
  return css`
    font-family: ${giant.fontFamily};
    font-size: ${giant.mobile.fontSize};
    font-weight: ${giant.mobile.fontWeight};
    line-height: ${giant.mobile.lineHeight};
    @media (min-width: 768px) {
      font-size: ${giant.desktop.fontSize};
      font-weight: ${giant.desktop.fontWeight};
      line-height: ${giant.desktop.lineHeight};
    }
  `;
};

export default GiantTitleStyling;
