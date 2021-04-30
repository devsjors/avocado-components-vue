import styled, { css } from "vue-styled-components";

const StyledHeaderNavigation = () => {
  return styled.nav`
    ${(props) => DefaultStyling(props)}
    ${(props) => MobileStyling(props)}
  `;
};

const DefaultStyling = (props) => {
  return css`
    display: block;
    height: 100%;
    justify-self: end;
    > ul {
      display: flex;
      align-items: center;
      height: 100%;
    }
  `;
};

const MobileStyling = () => {
  return css`
    @media (max-width: 767px) {
      padding: 40px 0;
      > ul {
        flex-direction: column;
        align-items: start;
        margin: -8px 0;
        li {
          &:not(:last-of-type) {
            margin-bottom: 4px;
          }
        }
      }
    }
  `;
};

export default StyledHeaderNavigation;
