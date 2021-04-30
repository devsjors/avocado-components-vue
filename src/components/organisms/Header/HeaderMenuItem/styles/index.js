import styled, { css } from "vue-styled-components";

const StyledHeaderMenuItem = () => {
  return styled.li`
    ${(props) => DefaultStyling(props)}
    ${(props) => MobileStyling(props)}
  `;
};

const DefaultStyling = (props) => {
  const { primary } = props.theme.cores.colors;
  return css`
    height: 100%;
    a {
      display: flex;
      align-items: center;
      height: 100%;
      padding: 0 16px;
      position: relative;
      &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background: ${primary["slime-light"]};
        transition: width 0.15s;
      }
      &:hover:after {
        width: 100%;
      }
    }
  `;
};

const MobileStyling = () => {
  return css`
    width: 100%;
    a {
      padding: 8px 0;
      margin: 0 16px;
    }
  `;
};

export default StyledHeaderMenuItem;
