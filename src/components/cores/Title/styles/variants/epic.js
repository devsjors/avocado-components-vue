import styled, { css } from "vue-styled-components";

const EpicTitleStyling = (props) => {
  const { epic } = props.theme.cores.typography.titles;
  return css`
    font-size: ${epic.mobile.fontSize};
    font-weight: ${epic.mobile.fontWeight};
    line-height: ${epic.mobile.lineHeight};
    @media (min-width: 768px) {
      font-size: ${epic.desktop.fontSize};
      font-weight: ${epic.desktop.fontWeight};
      line-height: ${epic.desktop.lineHeight};
    }
  `;
};

export default EpicTitleStyling;
