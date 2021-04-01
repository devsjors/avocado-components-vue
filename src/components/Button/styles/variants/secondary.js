import styled, { css } from "vue-styled-components";
import LoaderStyling from "../states/loading";

const SecondaryStyling = (props, disabled) => {
  const { textColor, borderColor } = props.theme.atoms.button.secondary;
  const StateStyling = (props) =>
    disabled ? SecondaryDisabledStyling(props) : SecondaryHoverStyling(props);
  return css`
    color: ${textColor};
    background-color: transparent;
    box-shadow: 0 0 0 1px ${borderColor};
    ${(props) => StateStyling(props)};
    ${(props) => LoaderStyling(props, borderColor)};
    transition: box-shadow 0.15s, color 0.15s;
  `;
};

const SecondaryHoverStyling = (props) => {
  const { textColor, borderColor } = props.theme.atoms.button.secondary.hover;
  return css`
    &:hover,
    &:focus {
      outline: none;
      color: ${textColor};
      box-shadow: 0 0 0 1px ${borderColor};
      ${(props) => LoaderStyling(props, borderColor)};
    }
  `;
};

const SecondaryDisabledStyling = (props) => {
  const {
    textColor,
    borderColor,
  } = props.theme.atoms.button.secondary.disabled;
  return css`
    pointer-events: none;
    color: ${textColor}
    box-shadow: 0 0 0 1px ${borderColor};
  `;
};

export default SecondaryStyling;
