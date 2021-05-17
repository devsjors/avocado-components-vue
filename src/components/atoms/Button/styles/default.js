import styled, { css } from "vue-styled-components";

const DefaultStyling = (props) => {
  const { padding, typography, textTransform, borderRadius } =
    props.theme.atoms.button.default;
  return css`
    border: none;
    text-decoration: none;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    padding: ${padding};
    text-transform: ${textTransform};
    border-radius: ${borderRadius};
    font-family: ${typography.fontFamily};
    @media (max-width: 767px) {
      font-size: ${typography.mobile.fontSize};
      font-weight: ${typography.mobile.fontWeight};
      line-height: ${typography.mobile.lineHeight};
    }
    font-size: ${typography.desktop.fontSize};
    font-weight: ${typography.desktop.fontWeight};
    line-height: ${typography.desktop.lineHeight};
    &:hover,
    &:focus {
      outline: none;
    }
  `;
};

export default DefaultStyling;
