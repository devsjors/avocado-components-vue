import styled, { css } from "vue-styled-components";

const StyledGrid = (StyledProps) => {
  const { spacing } = StyledProps;
  const extraWidth = spacing * 8;
  const negativeMargin = spacing * 4;
  const space =
    spacing &&
    css`
      width: calc(100% + ${extraWidth}px);
      margin-left: -${negativeMargin}px;
      margin-right: -${negativeMargin}px;
    `;

  return styled.div`
    display: flex;
    flex-wrap: wrap;
    ${space}
    .grid-item {
      ${spacing &&
      css`
        padding-left: ${negativeMargin}px;
        padding-right: ${negativeMargin}px;
      `};
    }
  `;
};

const StyledGridItem = (StyledProps) => {
  return styled.div`
    ${(props) => breakpoints(props, StyledProps)}
  `;
};

const breakpoints = (props, StyledProps) => {
  const noBreakpoints = Object.values(StyledProps).every(
    (prop) => prop === undefined
  );
  if (noBreakpoints) {
    return css`
      max-width: 100%;
      flex-grow: 1;
      flex-basis: 0;
    `;
  } else {
    const container = props.theme.cores.container;
    return css`
      ${Object.entries(StyledProps).map((entry) => {
        if (entry[0] !== "default" && entry[1] !== undefined) {
          return css`
            @media (min-width: ${container[entry[0]].breakpoint}) {
              flex-basis: ${(entry[1] / 12) * 100}%;
            }
          `;
        }
      })}
    `;
  }
};

export { StyledGrid, StyledGridItem };
