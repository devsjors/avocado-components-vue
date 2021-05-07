import styled, { css } from "vue-styled-components";

const StyledGrid = (StyledProps) => {
  const { spacing } = StyledProps;
  const extraWidth = spacing * 8;
  const negativeMargin = spacing * 4;
  const space =
    spacing &&
    css`
      width: calc(100% + ${extraWidth}px);
      margin: 0 -${negativeMargin}px;
    `;

  return styled.div`
    display: flex;
    flex-wrap: wrap;
    ${space}
    .grid-item {
      padding: 0 ${negativeMargin}px;
    }
  `;
};

export default StyledGrid;
