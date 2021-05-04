import styled, { css } from "vue-styled-components";

const StyledHeaderMenuItem = (StyledProps) => {
  const { active } = StyledProps;
  return styled.li`
    ${(props) => DefaultStyling(props)}
    ${(props) => !active && HoverStyling(props)}
    ${(props) => active && ActiveStyling(props)}
    ${(props) => MobileStyling(props)}
  `;
};

const DefaultStyling = (props) => {
  const { primary, base } = props.theme.cores.colors;
  const { button } = props.theme.cores.typography.text;
  return css`
    height: 100%;
    a {
      position: relative;
      display: flex;
      text-decoration: none;
      align-items: center;
      height: 100%;
      padding: 0 16px;
      text-transform: uppercase;
      color: ${base.grey["900"]};
      @media (max-width: 767px) {
        font-size: ${button.mobile.fontSize};
        font-weight: ${button.mobile.fontWeight};
        line-height: ${button.mobile.lineHeight};
      }
      font-size: ${button.desktop.fontSize};
      font-weight: ${button.desktop.fontWeight};
      line-height: ${button.desktop.lineHeight};

      background: linear-gradient(
          to left,
          ${base.grey["900"]} 50%,
          ${primary["slime-dark"]} 50%
        )
        right;
      color: black;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-size: 200% 100%;
      background-position: 100%;
      transition: background-position 0.2s;
    }
  `;
};

const HoverStyling = (props) => {
  const { primary, base } = props.theme.cores.colors;
  return css`
    a:hover {
      background-position: 0 100%;
    }
  `;
};

const ActiveStyling = (props, active) => {
  const { primary } = props.theme.cores.colors;
  return css`
    a {
      background-position: 0 100%;
    }
  `;
};

const MobileStyling = () => {
  return css`
    @media (max-width: 767px) {
      width: 100%;
      a {
        padding: 8px 0;
        margin: 0 16px;
      }
    }
  `;
};

export default StyledHeaderMenuItem;
