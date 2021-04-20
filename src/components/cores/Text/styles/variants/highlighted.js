import styled, { css } from "vue-styled-components";

const HighlightedStyling = (props) => {
  const { highlighted } = props.theme.cores.typography.text;
  return css`
    font-size: ${highlighted.mobile.fontSize};
    font-weight: ${highlighted.mobile.fontWeight};
    line-height: ${highlighted.mobile.lineHeight};
    @media (min-width: 768px) {
      font-size: ${highlighted.desktop.fontSize};
      font-weight: ${highlighted.desktop.fontWeight};
      line-height: ${highlighted.desktop.lineHeight};
    }
  `;
};

export default HighlightedStyling;
