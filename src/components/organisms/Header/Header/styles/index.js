import styled, { css } from "vue-styled-components";

const StyledHeader = (StyledProps) => {
  const { headerNavigationPosition } = StyledProps;
  return styled.header`
    ${(props) => DefaultStyling(props)}
    ${(props) => ToggleStyling(props)}
    ${HeaderLayoutStyling(headerNavigationPosition)}
  `;
};

const DefaultStyling = (props) => {
  const { grey } = props.theme.cores.colors.base;
  return css`
    background: ${grey["200"]};
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

  // Vanaf dropdown zichtbaar exta 'auto' toevoegen achter grid-template-columns
  return css`
    .header-wrapper {
      display: grid;
      grid-gap: 40px;
      align-items: center;
      grid-template-columns: ${gridColumns};
      .toggle {
        display: block;
        padding: 0 16px;
        justify-self: end;
      }
      @media (min-width: 768px) {
        grid-template-columns: ${gridColumns};
        .toggle {
          display: none;
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
      }
      nav {
        position: absolute;
        top: 80px;
        left: 0;
        background: red;
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
