import styled, { css } from "vue-styled-components";

const StyledLink = (StyledProps) => {
  const { start, end, disabled } = StyledProps;
  return styled.a`
    ${(props) => DefaultStyling(props)}
    ${(props) => (disabled ? DisabledStyling(props) : HoverStyling(props))}
    ${IconStyling(start, end)}
  `;
};

const DefaultStyling = (props) => {
  const { textColor, typography } = props.theme.atoms.link;
  return css`
    border: none;
    text-decoration: none;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    color: ${textColor};
    @media (max-width: 767px) {
      font-size: ${typography.mobile.fontSize};
      font-weight: ${typography.mobile.fontWeight};
      line-height: ${typography.mobile.lineHeight};
    }
    font-size: ${typography.desktop.fontSize};
    font-weight: ${typography.desktop.fontWeight};
    line-height: ${typography.desktop.lineHeight};
    span {
      position: relative;
    }
    span:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      height: 1px;
      width: 0;
      transition: width 0.15s;
      background: currentColor;
    }
  `;
};

const HoverStyling = (props) => {
  return css`
    &:hover,
    &:focus {
      outline: none;
      span:after {
        width: 100%;
      }
    }
  `;
};

const DisabledStyling = (props) => {
  const { textColor } = props.theme.atoms.link.disabled;
  return css`
    pointer-events: none;
    color: ${textColor};
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
