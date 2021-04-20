import styled, { css } from "vue-styled-components";

const BodyBoldStyling = (props) => {
  const bodyBold = props.theme.cores.typography.text["body-bold"];
  return css`
    font-size: ${bodyBold.mobile.fontSize};
    font-weight: ${bodyBold.mobile.fontWeight};
    line-height: ${bodyBold.mobile.lineHeight};
    @media (min-width: 768px) {
      font-size: ${bodyBold.desktop.fontSize};
      font-weight: ${bodyBold.desktop.fontWeight};
      line-height: ${bodyBold.desktop.lineHeight};
    }
  `;
};

export default BodyBoldStyling;
