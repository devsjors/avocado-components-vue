import styled, { css } from "vue-styled-components";

const IntroductionStyling = (props) => {
  const { introduction } = props.theme.cores.typography.text;
  return css`
    font-family: ${introduction.fontFamily};
    font-size: ${introduction.mobile.fontSize};
    font-weight: ${introduction.mobile.fontWeight};
    line-height: ${introduction.mobile.lineHeight};
    @media (min-width: 768px) {
      font-size: ${introduction.desktop.fontSize};
      font-weight: ${introduction.desktop.fontWeight};
      line-height: ${introduction.desktop.lineHeight};
    }
  `;
};

export default IntroductionStyling;
