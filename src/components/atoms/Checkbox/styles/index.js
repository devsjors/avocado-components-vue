import styled, { css } from "vue-styled-components";

const StyledCheckbox = (StyledProps) => {
  const { disabled } = StyledProps;
  return styled.div`
    ${(props) => DefaultStyling(props)}
    ${(props) => HoverStyling(props)}
    ${(props) => CheckedStyling(props)}
    ${(props) => ErrorStyling(props)}
    ${(props) => disabled && DisabledStyling(props)}
  `;
};

const DefaultStyling = (props) => {
  const def = props.theme.atoms.checkbox.default;
  return css`
    .custom-checkbox-wrapper {
      display: flex;
      align-items: center;
      input {
        width: 16px;
        height: 16px;
        opacity: 0;
      }
      .custom-input-wrapper {
        position: relative;
        display: flex;
        align-items: center;
        border-radius: ${def.borderRadius};
        svg {
          fill: transparent;
        }
        background: transparent;
        box-shadow: inset 0 0 0 1px ${def.borderColor};
      }
      .custom-check {
        position: absolute;
      }
      label {
        padding-left: 8px;
        color: ${def.labelColor};
      }
    }
  `;
};

const HoverStyling = (props) => {
  const hover = props.theme.atoms.checkbox.hover;
  const checkedHover = props.theme.atoms.checkbox.checked.hover;
  return css`
    &:not(.checked) {
      &:hover,
      &:focus-within {
        .custom-input-wrapper {
          box-shadow: inset 0 0 0 1px ${hover.borderColor};
        }
      }
    }
    &.checked {
      &:hover,
      &:focus-within {
        .custom-input-wrapper {
          background: ${checkedHover.backgroundColor};
          box-shadow: inset 0 0 0 1px ${checkedHover.borderColor};
        }
      }
    }
  `;
};

const CheckedStyling = (props) => {
  const checked = props.theme.atoms.checkbox.checked;
  return css`
    &.checked {
      .custom-input-wrapper {
        background: ${checked.backgroundColor};
        box-shadow: inset 0 0 0 1px ${checked.borderColor};
        svg {
          fill: ${checked.iconColor};
        }
      }
    }
  `;
};

const DisabledStyling = (props) => {
  const disabled = props.theme.atoms.checkbox.disabled;
  return css`
    pointer-events: none;
    color: ${disabled.labelColor};
    &:not(.checked) {
      .custom-input-wrapper {
        box-shadow: inset 0 0 0 1px ${disabled.borderColor};
      }
    }
    &.checked {
      .custom-input-wrapper {
        background: ${disabled.backgroundColor};
        box-shadow: inset 0 0 0 1px ${disabled.borderColor};
      }
    }
  `;
};

const ErrorStyling = (props) => {
  const checked = props.theme.atoms.checkbox.checked;
  const checkedHover = props.theme.atoms.checkbox.checked.hover;
  const error = props.theme.atoms.checkbox.error;
  return css`
    &.error {
      .custom-checkbox-wrapper .custom-input-wrapper {
        box-shadow: inset 0 0 0 1px ${error.borderColor};
      }
      .error-message {
        color: ${error.message};
      }
      &.checked {
        .custom-input-wrapper {
          box-shadow: inset 0 0 0 1px ${checked.borderColor};
        }
        &:hover,
        &:focus-within {
          .custom-input-wrapper {
            background: ${checkedHover.backgroundColor};
            box-shadow: inset 0 0 0 1px ${checkedHover.borderColor};
          }
        }
      }
    }
  `;
};

export default StyledCheckbox;
