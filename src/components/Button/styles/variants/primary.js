import styled, { css } from "vue-styled-components";
import LoaderStyling from "../states/loading";

const PrimaryStyling = (props, disabled) => {
  const { textColor, backgroundColor } = props.theme.atoms.button.primary;
  const StateStyling = (props) =>
    disabled ? PrimaryDisabledStyling(props) : PrimaryHoverStyling(props);
  return css`
    color: ${textColor};
    background-color: ${backgroundColor};
    ${(props) => StateStyling(props)};
    ${(props) => LoaderStyling(props, textColor)};
    transition: background-color 0.15s;
  `;
};

const PrimaryHoverStyling = (props) => {
  const { textColor, backgroundColor } = props.theme.atoms.button.primary.hover;
  return css`
    &:hover,
    &:focus {
      outline: none;
      color: ${textColor};
      background-color: ${backgroundColor};
    }
  `;
};

const PrimaryDisabledStyling = (props) => {
  const {
    textColor,
    backgroundColor,
  } = props.theme.atoms.button.primary.disabled;
  return css`
    pointer-events: none;
    color: ${textColor};
    background-color: ${backgroundColor};
  `;
};

export default PrimaryStyling;
