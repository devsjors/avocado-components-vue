import styled, { css } from "vue-styled-components";

const StyledHeaderName = () => {
  return styled.a`
    ${(props) => DefaultStyling(props)}
  `;
};

const DefaultStyling = (props) => {
  return css`
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 16px;
  `;
};

export default StyledHeaderName;
