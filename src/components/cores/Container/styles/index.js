import styled, { css } from "vue-styled-components";

const StyledContainer = () => {
  return styled.section`
    ${(props) => DefaultStyling(props)}
  `;
};

const DefaultStyling = (props) => {
  return css`
    max-width: 1440px;
    margin: auto;
    padding: 0 24px;
    @media (min-width: 640px) {
      padding: 0 16px;
    }
    @media (min-width: 1280px) {
      padding: 0 24px;
    }
    @media (min-width: 1440px) {
      padding: 0 40px;
    }
    @media (min-width: 1520px) {
      padding: 0 0;
    }
  `;
};

export default StyledContainer;
