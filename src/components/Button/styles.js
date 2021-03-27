import styled, { css } from "vue-styled-components";

const StyledButton = (StyledProps) => {
  const { start, end, variant } = StyledProps;
  return styled.button`
    ${(props) => DefaultStyling(props)}
    ${(props) => variant === "primary" && PrimaryStyling(props)}
    ${(props) => variant === "secondary" && SecondaryStyling(props)}
    ${(props) => variant === "ghost" && GhostStyling(props)}
    ${IconStyling(start, end)}
  `;
};

const StyledAnchor = (start, end) =>
  StyledButton(start, end).withComponent("a");

const DefaultStyling = (props) => {
  // eslint-disable-next-line prettier/prettier
  const { padding, fontSize, fontWeight, lineHeight, textTransform, borderRadius } = props.theme.atoms.button;
  return css`
    border: none;
    text-decoration: none;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    padding: ${padding};
    font-size: ${fontSize};
    font-weight: ${fontWeight};
    line-height: ${lineHeight};
    text-transform: ${textTransform};
    border-radius: ${borderRadius};
    &:hover,
    &:focus {
      outline: none;
    }
  `;
};

const PrimaryStyling = (props) => {
  const { textColor, backgroundColor } = props.theme.atoms.button;
  return css`
    color: ${textColor};
    background-color: ${backgroundColor};
  `;
};

const SecondaryStyling = (props) => {
  const { textColor, backgroundColor } = props.theme.atoms.button;
  return css`
    color: ${backgroundColor};
    background-color: transparent;
    border: 1px solid ${backgroundColor};
  `;
};

const GhostStyling = (props) => {
  const textColor = props.theme.cores.colors.base.grey["500"];
  return css`
    color: ${textColor};
    background-color: transparent;
  `;
};

const IconStyling = (start, end) => {
  const direction = start ? "right" : "left";
  return css`
    svg {
      margin-${direction}: 8px;
      fill: currentColor;
    }
  `;
};

export { StyledButton, StyledAnchor };
