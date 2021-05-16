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
      padding: ${def.padding};
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
  const [paddingHorizontal = [0], paddingVertical = [1]] =
    def.padding.split(/ /);
  return css`
    &:focus-within .input-icon,
    &:hover .input-icon {
      fill: ${hover.iconColor};
    }
    .input-icon {
      top: 50%;
      left: ${paddingVertical};
      transform: translateY(-50%);
      fill: ${def.iconColor};
    }
    .input-wrapper input,
    input-wrapper textarea {
      padding: ${paddingHorizontal} ${paddingVertical} ${paddingHorizontal}
        calc(${paddingVertical} + 20px + 8px);
    }
  `;
};

const ErrorStyling = (props) => {
  const def = props.theme.atoms.input.default;
  const [paddingHorizontal = [0], paddingVertical = [1]] =
    def.padding.split(/ /);
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
        top: 50%;
        left: ${paddingVertical};
        transform: translateY(-50%);
        fill: ${error.iconColor};
      }
      .error-icon {
        top: 50%;
        right: ${paddingVertical};
        transform: translateY(-50%);
        fill: ${error.iconColor};
      }
      input,
      textarea {
        box-shadow: inset 0 0 0 1px ${error.borderColor};
        color: ${error.message};
        padding-right: calc(${paddingVertical} + 20px + 8px);
      }
    }
    .error-message {
      color: ${error.message};
    }
  `;
};

export default StyledInput;
