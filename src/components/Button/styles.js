import styled, { css } from "vue-styled-components";

const StyledButton = (StyledProps) => styled.button`
  ${(props) => DefaultStyling(props)}
  ${(props) => StyledProps.variant === "primary" && PrimaryStyling(props)}
  ${(props) => StyledProps.variant === "secondary" && SecondaryStyling(props)}
  ${(props) => StyledProps.variant === "ghost" && GhostStyling(props)}
  ${StyledProps.start && IconLeft}
  ${StyledProps.end && IconRight}
`;

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

const IconLeft = () => {
  return css`
    svg {
      margin-right: 8px;
      fill: currentColor;
    }
  `;
};

const IconRight = () => {
  return css`
    svg {
      margin-left: 8px;
      fill: currentColor;
    }
  `;
};

export { StyledButton, StyledAnchor };
