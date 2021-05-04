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
    display: flex;
    position: relative;
    input, textarea {
      border: none;
      outline: none;
      width: 100%;
      padding: 12px 20px;
      border-radius: 8px;
      color: ${grey["900"]}
      box-shadow: inset 0 0 0 1px ${grey["400"]};
      ::placeholder {
        color: ${grey["400"]};
      }
      -webkit-appearance: none;
      &[type="search"]::-webkit-search-cancel-button,
      &[type="search"]::-webkit-search-decoration {
        -webkit-appearance: none;
        appearance: none;
      }
    }
    textarea {
      resize: none;
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
    .input-wrapper:hover input,
    .input-wrapper:focus input,
    .input-wrapper:focus-within input,
    textarea:hover,
    textarea:focus {
      box-shadow: inset 0 0 0 1px ${primary["slime-light"]};
    }
  `;
};

const IconStyling = (props) => {
  const { base, primary } = props.theme.cores.colors;
  return css`
    &:focus-within .input-icon,
    &:hover .input-icon {
      fill: ${primary["slime-light"]};
    }
    .input-icon {
      margin: 14px 8px 14px 20px;
      fill: ${base.grey["500"]};
    }
    .input-wrapper input,
    input-wrapper textarea {
      padding: 12px 20px 12px 48px;
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
      input,
      textarea {
        box-shadow: inset 0 0 0 1px ${feedback.error};
        color: ${feedback.error};
        padding-right: 48px;
      }
    }
    .error-message {
      color: ${feedback.error};
    }
  `;
};

export default StyledInput;
