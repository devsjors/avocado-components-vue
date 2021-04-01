import styled, { css } from "vue-styled-components";
import LoaderStyling from "../states/loading";

const GhostStyling = (props, disabled) => {
  const { textColor } = props.theme.atoms.button.ghost;
  const StateStyling = (props) =>
    disabled ? GhostDisabledStyling(props) : GhostHoverStyling(props);
  return css`
    color: ${textColor};
    background-color: transparent;
    ${(props) => StateStyling(props)};
    ${(props) => LoaderStyling(props, textColor)};
    transition: color 0.15s;
  `;
};

const GhostHoverStyling = (props) => {
  const { textColor } = props.theme.atoms.button.ghost.hover;
  return css`
    &:hover,
    &:focus {
      outline: none;
      color: ${textColor};
      ${(props) => LoaderStyling(props, textColor)};
    }
  `;
};

const GhostDisabledStyling = (props) => {
  const { textColor } = props.theme.atoms.button.ghost.disabled;
  return css`
    pointer-events: none;
    color: ${textColor};
  `;
};

export default GhostStyling;
