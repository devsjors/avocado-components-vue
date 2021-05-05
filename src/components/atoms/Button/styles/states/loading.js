import styled, { css } from "vue-styled-components";

const LoaderStyling = (props, color) => {
  const { typography } = props.theme.atoms.button.default;
  return css`
    &.loading {
      position: relative;
      > *:not(.spinner) {
        opacity: 0;
      }
      .spinner {
        position: absolute;
        left: calc(50% - 12px);
        color: transparent;
        border: 4px solid transparent;
        border-radius: 50%;
        border-top: 4px solid ${color};
        @media (max-width: 767px) {
          width: ${typography.mobile.lineHeight};
          height: ${typography.mobile.lineHeight};
        }
        width: ${typography.desktop.lineHeight};
        height: ${typography.desktop.lineHeight};
        transition: border-top 0.15s;
        animation: spin 0.7s linear infinite;
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      }
    }
  `;
};

export default LoaderStyling;
