import styled, { css } from "vue-styled-components";

const MediumSubtitleStyling = (props) => {
  const { medium } = props.theme.cores.typography.subtitles;
  return css`
    font-family: ${medium.fontFamily};
    font-size: ${medium.mobile.fontSize};
    font-weight: ${medium.mobile.fontWeight};
    line-height: ${medium.mobile.lineHeight};
    @media (min-width: 768px) {
      font-size: ${medium.desktop.fontSize};
      font-weight: ${medium.desktop.fontWeight};
      line-height: ${medium.desktop.lineHeight};
    }
  `;
};

export default MediumSubtitleStyling;
