import styled, { css } from "vue-styled-components";

const SmallSubtitleStyling = (props) => {
  const { small } = props.theme.cores.typography.subtitles;
  return css`
    font-family: ${small.fontFamily};
    font-size: ${small.mobile.fontSize};
    font-weight: ${small.mobile.fontWeight};
    line-height: ${small.mobile.lineHeight};
    @media (min-width: 768px) {
      font-size: ${small.desktop.fontSize};
      font-weight: ${small.desktop.fontWeight};
      line-height: ${small.desktop.lineHeight};
    }
  `;
};

export default SmallSubtitleStyling;
