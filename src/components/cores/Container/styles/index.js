import styled, { css } from "vue-styled-components";

const StyledContainer = (StyledProps) => {
  const { maxWidth } = StyledProps;
  return styled.section`
    ${(props) => DefaultStyling(props)}
    ${(props) => maxWidthStyling(props, maxWidth)}
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

const maxWidthStyling = (props, maxWidth) => {
  return css`
    ${maxWidth === "sm" && "max-width: 640px;"}
    ${maxWidth === "md" && "max-width: 768px;"}
    ${maxWidth === "lg" && "max-width: 1024px;"}
    ${maxWidth === "xl" && "max-width: 1280px;"}
  `;
};

export default StyledContainer;
