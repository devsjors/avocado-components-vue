import styled, { css } from "vue-styled-components";

const StyledRadio = () => {
  return styled.div`
    ${(props) => DefaultStyling(props)}
  `;
};

const DefaultStyling = (props) => {
  return css`
    display: flex;
    align-items: center;
    input {
      margin-top: -3px;
      margin-right: 8px;
      width: 20px;
      height: 20px;
    }
  `;
};

export default StyledRadio;
