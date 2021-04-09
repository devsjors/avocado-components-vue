import styled, { css } from "vue-styled-components";

const StyledBreadcrumb = () => {
  return styled.ol`
    ${(props) => DefaultStyling(props)}
  `;
};

const DefaultStyling = (props) => {
  const { textColor, typography } = props.theme.atoms.link;
  return css`
    display: flex;
    .separator {
      margin: 0 8px;
    }
    span {
      color: ${textColor};
      @media (max-width: 767px) {
        font-size: ${typography.mobile.fontSize};
        font-weight: ${typography.mobile.fontWeight};
        line-height: ${typography.mobile.lineHeight};
      }
      font-size: ${typography.desktop.fontSize};
      font-weight: ${typography.desktop.fontWeight};
      line-height: ${typography.desktop.lineHeight};
    }
  `;
};

export default StyledBreadcrumb;
