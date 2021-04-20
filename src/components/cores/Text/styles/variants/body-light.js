import styled, { css } from "vue-styled-components";

const BodyLightStyling = (props) => {
  const bodyLight = props.theme.cores.typography.text["body-light"];
  return css`
    font-size: ${bodyLight.mobile.fontSize};
    font-weight: ${bodyLight.mobile.fontWeight};
    line-height: ${bodyLight.mobile.lineHeight};
    @media (min-width: 768px) {
      font-size: ${bodyLight.desktop.fontSize};
      font-weight: ${bodyLight.desktop.fontWeight};
      line-height: ${bodyLight.desktop.lineHeight};
    }
  `;
};

export default BodyLightStyling;
