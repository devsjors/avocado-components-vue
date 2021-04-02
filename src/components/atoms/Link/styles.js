import styled, { css } from "vue-styled-components";

const StyledLink = (StyledProps) => {
  const { start, end, disabled } = StyledProps;
  return styled.a`
    ${(props) => DefaultStyling(props)}
    ${(props) => (disabled ? DisabledStyling(disabled) : HoverStyling(props))}
    ${IconStyling(start, end)}
  `;
};

const DefaultStyling = (props) => {
  const color = props.theme.cores.colors.base.grey["900"];
  // eslint-disable-next-line prettier/prettier
  const { fontSize, fontWeight, lineHeight, textTransform } = props.theme.atoms.button;
  return css`
    border: none;
    text-decoration: none;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    color: ${color};
    font-size: ${fontSize};
    font-weight: ${fontWeight};
    line-height: ${lineHeight};
  `;
};

const HoverStyling = (props) => {
  return css`
    &:hover,
    &:focus {
      outline: none;
      text-decoration: underline;
    }
  `;
};

const DisabledStyling = (disabled) => {
  return css`
    pointer-events: none;
    opacity: 0.5;
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

export { StyledLink };
