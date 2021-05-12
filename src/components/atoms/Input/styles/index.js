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
  const def = props.theme.atoms.input.default;
  return css`
  .input-wrapper {
    display: flex;
    position: relative;
    input, textarea {
      border: none;
      outline: none;
      width: 100%;
      padding: 12px 20px;
      border-radius: ${def.borderRadius};
      color: ${def.labelColor}
      box-shadow: inset 0 0 0 1px ${def.borderColor};
      ::placeholder {
        color: ${def.placeholderColor};
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
    color: ${def.labelColor};
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
  const hover = props.theme.atoms.input.hover;
  return css`
    .input-wrapper:hover input,
    .input-wrapper:focus input,
    .input-wrapper:focus-within input,
    textarea:hover,
    textarea:focus {
      box-shadow: inset 0 0 0 1px ${hover.borderColor};
    }
  `;
};

const IconStyling = (props) => {
  const def = props.theme.atoms.input.default;
  const hover = props.theme.atoms.input.hover;
  return css`
    &:focus-within .input-icon,
    &:hover .input-icon {
      fill: ${hover.iconColor};
    }
    .input-icon {
      margin: 14px 8px 14px 20px;
      fill: ${def.iconColor};
    }
    .input-wrapper input,
    input-wrapper textarea {
      padding: 12px 20px 12px 48px;
    }
  `;
};

const ErrorStyling = (props) => {
  const error = props.theme.atoms.input.error;
  return css`
    .input-wrapper.error {
      &:focus-within,
      &:hover {
        .input-icon {
          fill: ${error.iconColor};
        }
      }
      .input-icon {
        margin: 14px 8px 14px 20px;
        fill: ${error.iconColor};
      }
      .error-icon {
        margin: 14px 20px 14px 8px;
        right: 0;
        fill: ${error.iconColor};
      }
      input,
      textarea {
        box-shadow: inset 0 0 0 1px ${error.borderColor};
        color: ${error.message};
        padding-right: 48px;
      }
    }
    .error-message {
      color: ${error.message};
    }
  `;
};

export default StyledInput;
