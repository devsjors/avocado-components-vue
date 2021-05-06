import styled, { css } from "vue-styled-components";

const StyledGrid = () => {
  return styled.div`
    display: flex;
    flex-wrap: wrap;
  `;
};

const StyledGridItem = (StyledProps) => {
  const { xs, sm, md, lg, xl, xxl } = StyledProps;
  const noBreakpoints = Object.values(StyledProps).every(
    (prop) => prop === null
  );
  return styled.div`
    ${(props) => noBreakpoints && DefaultStyling(props)}
    ${(props) => xs && XSStyling(props, xs)}
    @media (min-width: 640px) {
      ${(props) => sm && SMStyling(props, sm)}
    }
    @media (min-width: 768px) {
      ${(props) => md && MDStyling(props, md)}
    }
    @media (min-width: 1024px) {
      ${(props) => lg && LGStyling(props, lg)}
    }
    @media (min-width: 1280px) {
      ${(props) => xl && XLStyling(props, xl)}
    }
    @media (min-width: 1440px) {
      ${(props) => xxl && XXLStyling(props, xxl)}
    }
  `;
};

const DefaultStyling = (props) => {
  return css`
    max-width: 100%;
    flex-grow: 1;
    flex-basis: 0;
  `;
};

const XSStyling = (props, columns) => {
  return css`
    flex-basis: ${(columns / 12) * 100}%;
  `;
};

const SMStyling = (props, columns) => {
  return css`
    flex-basis: ${(columns / 12) * 100}%;
  `;
};

const MDStyling = (props, columns) => {
  return css`
    flex-basis: ${(columns / 12) * 100}%;
  `;
};

const LGStyling = (props, columns) => {
  return css`
    flex-basis: ${(columns / 12) * 100}%;
  `;
};

const XLStyling = (props, columns) => {
  return css`
    flex-basis: ${(columns / 12) * 100}%;
  `;
};

const XXLStyling = (props, columns) => {
  return css`
    flex-basis: ${(columns / 12) * 100}%;
  `;
};

export { StyledGrid, StyledGridItem };
