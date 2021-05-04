import styled, { css } from "vue-styled-components";

const StyledHeaderMenu = (StyledProps) => {
  const { menuOpen } = StyledProps;
  return styled.li`
    ${(props) => DefaultStyling(props, menuOpen)}
    ${(props) => HoverStyling()}
    ${(props) => menuOpen && OpenStyling()}
    ${(props) => MobileStyling()}
    ${(props) => MenuChildrenStyling(props)}
  `;
};

const MenuChildrenStyling = (props) => {
  const { primary, base } = props.theme.cores.colors;
  return css`
    ul li a {
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
      transition: background-position 0.3s ease;
      &:hover {
        background-position: 0 100%;
      }
    }
  `;
};

const DefaultStyling = (props, menuOpen) => {
  const { primary, base } = props.theme.cores.colors;
  const { button } = props.theme.cores.typography.text;
  return css`
    height: 100%;
    position: relative;
    cursor: pointer;
    color: ${base.grey["900"]}
    text-transform: uppercase;
    @media (max-width: 767px) {
      font-size: ${button.mobile.fontSize};
      font-weight: ${button.mobile.fontWeight};
      line-height: ${button.mobile.lineHeight};
    }
    font-size: ${button.desktop.fontSize};
    font-weight: ${button.desktop.fontWeight};
    line-height: ${button.desktop.lineHeight};
    > a {
      position: relative;
      display: flex;
      align-items: center;
      height: 100%;
      padding: 0 16px;
      span {
        padding-right: 4px;
      }
      .chevron {
        transform: rotate(${menuOpen ? "180deg" : "0deg"});
      }
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
      transition: background-position 0.2s
    }
    ul {
      min-width: 100%;
      position: absolute;
      left: 0;
      li {
        background: ${base.grey["200"]};
        a {
          padding: 12px 16px;
        }
      }
    }
    ul {
      display: ${menuOpen ? "block" : "none"};
    }
  `;
};

const HoverStyling = () => {
  return css`
    > a:hover {
      background-position: 0 100%;
    }
  `;
};

const OpenStyling = () => {
  return css`
    > a {
      background-position: 0 100%;
    }
  `;
};

const MobileStyling = () => {
  return css`
    @media (max-width: 767px) {
      width: 100%;
      > a {
        padding: 8px 0;
        margin: 0 16px;
      }
      ul {
        position: unset;
        li {
          background: none;
          a {
            padding: 0 16px;
          }
        }
      }
    }
  `;
};

export default StyledHeaderMenu;
