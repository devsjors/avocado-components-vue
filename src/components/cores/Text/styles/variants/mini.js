import styled, { css } from "vue-styled-components";

const MiniStyling = (props) => {
  const { mini } = props.theme.cores.typography.text;
  return css`
    font-size: ${mini.mobile.fontSize};
    font-weight: ${mini.mobile.fontWeight};
    line-height: ${mini.mobile.lineHeight};
    @media (min-width: 768px) {
      font-size: ${mini.desktop.fontSize};
      font-weight: ${mini.desktop.fontWeight};
      line-height: ${mini.desktop.lineHeight};
    }
  `;
};

export default MiniStyling;
