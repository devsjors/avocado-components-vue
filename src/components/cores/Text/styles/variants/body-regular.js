import styled, { css } from "vue-styled-components";

const BodyRegularStyling = (props) => {
  const bodyRegular = props.theme.cores.typography.text["body-regular"];
  return css`
    font-family: ${bodyRegular.fontFamily};
    font-size: ${bodyRegular.mobile.fontSize};
    font-weight: ${bodyRegular.mobile.fontWeight};
    line-height: ${bodyRegular.mobile.lineHeight};
    @media (min-width: 768px) {
      font-size: ${bodyRegular.desktop.fontSize};
      font-weight: ${bodyRegular.desktop.fontWeight};
      line-height: ${bodyRegular.desktop.lineHeight};
    }
  `;
};

export default BodyRegularStyling;
