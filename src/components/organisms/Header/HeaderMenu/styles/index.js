import styled, { css } from "vue-styled-components";

const StyledHeaderMenu = (StyledProps) => {
  const { menuOpen } = StyledProps;
  return styled.li`
    ${(props) => DefaultStyling(props, menuOpen)}
    ${(props) => MobileStyling(props)}
  `;
};

const DefaultStyling = (props, menuOpen) => {
  return css`
    height: 100%;
    position: relative;
    cursor: pointer;
    a {
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
    }
    ul {
      min-width: 100%;
      position: absolute;
      left: 0;
      li {
        background: grey;
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

const MobileStyling = (props) => {
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
