import styled, { css } from "vue-styled-components";

const DefaultStyling = (props) => {
  const {
    padding,
    fontSize,
    fontWeight,
    lineHeight,
    textTransform,
    borderRadius,
  } = props.theme.atoms.button;
  return css`
    border: none;
    text-decoration: none;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    padding: ${padding};
    text-transform: ${textTransform};
    border-radius: ${borderRadius};
    @media (max-width: 767px) {
      font-size: ${fontSize.mobile.fontSize};
      font-weight: ${fontWeight.mobile.fontWeight};
      line-height: ${lineHeight.mobile.lineHeight};
    }
    font-size: ${fontSize.desktop.fontSize};
    font-weight: ${fontWeight.desktop.fontWeight};
    line-height: ${lineHeight.desktop.lineHeight};
  `;
};

export default DefaultStyling;
