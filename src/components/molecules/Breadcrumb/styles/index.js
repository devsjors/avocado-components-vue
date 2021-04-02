import styled, { css } from "vue-styled-components";

const StyledBreadcrumb = () => {
  return styled.ul`
    display: flex;
    .ja {
      &:after {
        content: "/";
        margin: 0 8px;
      }
    }
  `;
};

export default StyledBreadcrumb;
