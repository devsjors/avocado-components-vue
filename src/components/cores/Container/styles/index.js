import styled, { css } from "vue-styled-components";

const StyledContainer = (StyledProps) => {
  const { maxWidth } = StyledProps;
  return styled.section`
    ${(props) => DefaultStyling(props)}
    ${(props) => maxWidthStyling(props, maxWidth)}
  `;
};

const DefaultStyling = (props) => {
  const styles = [];
  const containerStyles = props.theme.cores.container;
  for (const [key, value] of Object.entries(containerStyles)) {
    if (key === "default") {
      styles.push(css`
        max-width: ${value.maxWidth};
        margin-left: auto;
        margin-right: auto;
        padding-left: ${value.padding};
        padding-right: ${value.padding};
      `);
    } else {
      styles.push(css`
        @media (min-width: ${value.breakpoint}) {
          padding-left: ${value.padding};
          padding-right: ${value.padding};
        }
      `);
    }
  }
  return styles;
};

const maxWidthStyling = (props, maxWidth) => {
  const containerStyles = props.theme.cores.container;
  for (const [key, value] of Object.entries(containerStyles)) {
    if (key === maxWidth) {
      return css`
        max-width: ${value.breakpoint};
      `;
    }
  }
};

export default StyledContainer;
