import styled, { css } from "vue-styled-components";

const TinySubtitleStyling = (props) => {
  const { tiny } = props.theme.cores.typography.subtitles;
  return css`
    font-size: ${tiny.mobile.fontSize};
    font-weight: ${tiny.mobile.fontWeight};
    line-height: ${tiny.mobile.lineHeight};
    @media (min-width: 768px) {
      font-size: ${tiny.desktop.fontSize};
      font-weight: ${tiny.desktop.fontWeight};
      line-height: ${tiny.desktop.lineHeight};
    }
  `;
};

export default TinySubtitleStyling;
