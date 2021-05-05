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
    padding-left: 24px;
    padding-right: 24px;
    @media (min-width: 640px) {
      padding-left: 16px;
      padding-right: 16px;
    }
    @media (min-width: 1280px) {
      padding-left: 24px;
      padding-right: 24px;
    }
    @media (min-width: 1440px) {
      padding-left: 40px;
      padding-right: 40px;
    }
    @media (min-width: 1520px) {
      padding-left: 0;
      padding-right: 0;
    }
  `;
};

export default StyledContainer;
