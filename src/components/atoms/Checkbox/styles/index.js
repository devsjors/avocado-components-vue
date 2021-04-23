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
  const { grey } = props.theme.cores.colors.base;
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
        border-radius: 4px;
        svg {
          fill: white;
        }
        background: transparent;
        box-shadow: inset 0 0 0 1px ${grey["600"]};
      }
      .custom-check {
        position: absolute;
      }
      label {
        padding-left: 8px;
      }
    }
  `;
};

const HoverStyling = (props) => {
  const { primary } = props.theme.cores.colors;
  return css`
    &:not(.checked) {
      &:hover,
      &:focus-within {
        .custom-input-wrapper {
          box-shadow: inset 0 0 0 1px ${primary["slime-dark"]};
        }
      }
    }
    &.checked {
      &:hover,
      &:focus-within {
        .custom-input-wrapper {
          background: ${primary["slime-dark"]};
          box-shadow: inset 0 0 0 1px ${primary["slime-dark"]};
        }
      }
    }
  `;
};

const CheckedStyling = (props) => {
  const { primary } = props.theme.cores.colors;
  return css`
    &.checked {
      .custom-input-wrapper {
        background: ${primary["slime-light"]};
        box-shadow: inset 0 0 0 1px ${primary["slime-light"]};
      }
    }
  `;
};

const DisabledStyling = (props) => {
  const { grey } = props.theme.cores.colors.base;
  return css`
    pointer-events: none;
    color: ${grey["300"]};
    &:not(.checked) {
      .custom-input-wrapper {
        box-shadow: inset 0 0 0 1px ${grey["300"]};
      }
    }
    &.checked {
      .custom-input-wrapper {
        background: ${grey["300"]};
        box-shadow: inset 0 0 0 1px ${grey["300"]};
      }
    }
  `;
};

const ErrorStyling = (props) => {
  const { primary, feedback } = props.theme.cores.colors;
  return css`
    &.error {
      .custom-checkbox-wrapper .custom-input-wrapper {
        box-shadow: inset 0 0 0 1px ${feedback.error};
      }
      .error-message {
        color: ${feedback.error};
      }
      &.checked {
        .custom-input-wrapper {
          box-shadow: inset 0 0 0 1px ${primary["slime-light"]};
        }
        &:hover,
        &:focus-within {
          .custom-input-wrapper {
            background: ${primary["slime-dark"]};
            box-shadow: inset 0 0 0 1px ${primary["slime-dark"]};
          }
        }
      }
    }
  `;
};

export default StyledCheckbox;
