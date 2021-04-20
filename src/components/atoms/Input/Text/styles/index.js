import styled, { css } from "vue-styled-components";

const StyledInput = (StyledProps) => {
  const { icon } = StyledProps;
  return styled.div`
    ${(props) => DefaultStyling(props)}
    ${(props) => HoverStyling(props)}
    ${(props) => icon && IconStyling(props)}
    ${(props) => ErrorStyling(props)}
  `;
};

const DefaultStyling = (props) => {
  const { grey } = props.theme.cores.colors.base;
  return css`
  .input-wrapper {
    position: relative;
    input {
      border: none;
      outline: none;
      width: 100%;
      padding: 12px 20px;
      border-radius: 8px;
      color: ${grey["900"]}
      box-shadow: 0 0 0 1px ${grey["600"]};
      ::placeholder {
        color: ${grey["400"]};
      }
    }
  }
  .label {
    display: block;
    margin-bottom: 4px;
  }
  .icon {
    position: absolute;
  }
  .error-message {
    display: block;
    margin-top: 4px;
  }
  `;
};

const HoverStyling = (props) => {
  const { primary } = props.theme.cores.colors;
  return css`
    input:hover,
    input:focus {
      box-shadow: 0 0 0 2px ${primary["slime-light"]};
    }
  `;
};

const IconStyling = (props) => {
  const { base, primary } = props.theme.cores.colors;
  return css`
    .input-wrapper {
      &:focus-within .input-icon,
      &:hover .input-icon {
        fill: ${primary["slime-light"]};
      }
      .input-icon {
        margin: 14px 8px 14px 20px;
        fill: ${base.grey["500"]};
      }
      input {
        padding: 12px 20px 12px 48px;
      }
    }
  `;
};

const ErrorStyling = (props) => {
  const { base, primary, feedback } = props.theme.cores.colors;
  return css`
    .input-wrapper.error {
      &:focus-within,
      &:hover {
        .input-icon {
          fill: ${feedback.error};
        }
      }
      .input-icon {
        margin: 14px 8px 14px 20px;
        fill: ${feedback.error};
      }
      .error-icon {
        margin: 14px 20px 14px 8px;
        right: 0;
        fill: ${feedback.error};
      }
      input {
        box-shadow: 0 0 0 1px ${feedback.error};
        color: ${feedback.error};
      }
    }
    .error-message {
      color: ${feedback.error};
    }
  `;
};

export default StyledInput;
