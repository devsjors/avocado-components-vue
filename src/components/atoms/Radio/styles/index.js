import styled, { css } from "vue-styled-components";

const StyledRadio = (StyledProps) => {
  const { disabled } = StyledProps;
  return styled.div`
    ${(props) => DefaultStyling(props)}
    ${(props) => HoverStyling(props)}
    ${(props) => CheckedStyling(props)}
    ${(props) => disabled && DisabledStyling(props)}
  `;
};

const DefaultStyling = (props) => {
  const def = props.theme.atoms.radio.default;
  return css`
    .custom-radio-wrapper {
      display: flex;
      align-items: center;
      .custom-input-wrapper {
        position: relative;
        display: flex;
        align-items: center;
        input,
        .custom-input {
          width: 16px;
          height: 16px;
        }
        input {
          opacity: 0;
          z-index: 1;
        }
      }
      .custom-input {
        position: absolute;
        border-radius: 999px;
        background: transparent;
        box-shadow: inset 0 0 0 1px ${def.borderColor};
      }
      label {
        color: ${def.labelColor};
        padding-left: 8px;
      }
    }
  `;
};

const HoverStyling = (props) => {
  const hover = props.theme.atoms.radio.hover;
  const checkedHover = props.theme.atoms.radio.checked.hover;
  return css`
    &:not(.checked) {
      &:hover,
      &:focus-within {
        .custom-input {
          box-shadow: inset 0 0 0 1px ${hover.borderColor};
        }
      }
    }
    &.checked {
      &:hover,
      &:focus-within {
        .custom-input {
          background: ${checkedHover.backgroundColor};
          box-shadow: inset 0 0 0 1px ${checkedHover.borderColor};
        }
      }
    }
  `;
};

const CheckedStyling = (props) => {
  const checked = props.theme.atoms.radio.checked;
  return css`
    &.checked {
      .custom-input {
        background: ${checked.backgroundColor};
        box-shadow: inset 0 0 0 1px ${checked.borderColor};
        &:after {
          content: "";
          position: absolute;
          width: 6px;
          height: 6px;
          border-radius: 999px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: white;
        }
      }
    }
  `;
};

const DisabledStyling = (props) => {
  const disabled = props.theme.atoms.radio.disabled;
  return css`
    pointer-events: none;
    .custom-radio-wrapper label {
      color: ${disabled.labelColor};
    }
    &:not(.checked) {
      .custom-input {
        box-shadow: inset 0 0 0 1px ${disabled.borderColor};
      }
    }
    &.checked {
      .custom-input {
        background: ${disabled.backgroundColor};
        box-shadow: inset 0 0 0 1px ${disabled.borderColor};
      }
    }
  `;
};

export default StyledRadio;
