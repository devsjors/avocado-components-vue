import styled, { css } from "vue-styled-components";

const CaptionStyling = (props) => {
  const { caption } = props.theme.cores.typography.text;
  return css`
    font-family: ${caption.fontFamily};
    font-size: ${caption.mobile.fontSize};
    font-weight: ${caption.mobile.fontWeight};
    line-height: ${caption.mobile.lineHeight};
    @media (min-width: 768px) {
      font-size: ${caption.desktop.fontSize};
      font-weight: ${caption.desktop.fontWeight};
      line-height: ${caption.desktop.lineHeight};
    }
  `;
};

export default CaptionStyling;
