import styled, { css } from "vue-styled-components";

const StyledHeader = (StyledProps) => {
  const { headerNavigationPosition } = StyledProps;
  return styled.header`
    ${(props) => DefaultStyling(props)}
    ${(props) => ToggleStyling(props)}
    ${(props) => MenuTogglerStyling(props)}
    ${HeaderLayoutStyling(headerNavigationPosition)}
  `;
};

const DefaultStyling = (props) => {
  const { grey } = props.theme.cores.colors.base;
  return css`
    background: ${grey["200"]};
    box-shadow: 0 0 0 1px ${grey["300"]};
    .header-wrapper {
      max-width: 1440px;
      margin: auto;
      height: 80px;
    }
  `;
};

const HeaderLayoutStyling = (headerNavigationPosition) => {
  const gridColumns = headerNavigationPosition
    .map((position) => (position ? "1fr" : "auto"))
    .toString()
    .replaceAll(",", " ");
  return css`
    .header-wrapper {
      display: grid;
      grid-gap: 40px;
      align-items: center;
      grid-template-columns: ${gridColumns};
      @media (min-width: 768px) {
        grid-template-columns: ${gridColumns};
        .toggle {
          display: none;
        }
      }
      & > :first-child,
      & > :nth-last-child(2) {
        margin: 0 -16px;
      }
    }
  `;
};

const MenuTogglerStyling = (props) => {
  const { primary } = props.theme.cores.colors;
  return css`
    .toggle {
      display: flex;
      align-items: center;
      height: 100%;
      padding: 0 16px;
      justify-self: end;
      > div {
        display: flex;
        flex-direction: column;
        width: 32px;
        cursor: pointer;
        span {
          background: ${primary["slime-dark"]};
          border-radius: 10px;
          height: 3px;
          margin: 3px 0;
          transition: 0.3s cubic-bezier(0.68, -0.6, 0.32, 1.6);
          &:nth-of-type(1) {
            width: 50%;
          }
          &:nth-of-type(2) {
            width: 100%;
          }
          &:nth-of-type(3) {
            width: 75%;
          }
        }
      }
      &.menu-open > div {
        span:nth-of-type(1) {
          transform-origin: bottom;
          transform: rotatez(45deg) translate(3px, 0px);
        }
        span:nth-of-type(2) {
          transform-origin: top;
          transform: rotatez(-45deg);
        }
        span:nth-of-type(3) {
          transform-origin: bottom;
          width: 50%;
          transform: translate(14px, -4px) rotatez(45deg);
        }
      }
    }
  `;
};

const ToggleStyling = (props) => {
  return css`
    @media (max-width: 767px) {
      .header-wrapper {
        position: relative;
        grid-template-columns: auto auto;
        & > :first-child,
        & > :last-child {
          margin: 0 -16px;
        }
      }
      nav {
        position: absolute;
        top: 80px;
        left: 0;
        width: 100%;
        height: auto;
        transform: scaleY(0);
        transition: transform 0.15s ease;
        transform-origin: top;
      }
      &.open {
        nav {
          transform: scaleY(1);
        }
      }
    }
  `;
};

export default StyledHeader;
