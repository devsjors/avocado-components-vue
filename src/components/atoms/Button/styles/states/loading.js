import styled, { css } from "vue-styled-components";

const LoaderStyling = (props, color) => {
  const size = props.theme.atoms.button.lineHeight;
  return css`
    .loading {
      color: transparent;
      border: 4px solid transparent;
      border-radius: 50%;
      border-top: 4px solid ${color};
      @media (max-width: 767px) {
        width: ${size.mobile.lineHeight};
        height: ${size.mobile.lineHeight};
      }
      width: ${size.desktop.lineHeight};
      height: ${size.desktop.lineHeight};
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
  `;
};

export default LoaderStyling;
