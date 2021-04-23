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
  const { grey } = props.theme.cores.colors.base;
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
        box-shadow: inset 0 0 0 1px ${grey["600"]};
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
        .custom-input {
          box-shadow: inset 0 0 0 1px ${primary["slime-dark"]};
        }
      }
    }
    &.checked {
      &:hover,
      &:focus-within {
        .custom-input {
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
      .custom-input {
        background: ${primary["slime-light"]};
        box-shadow: inset 0 0 0 1px ${primary["slime-light"]};
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
  const { grey } = props.theme.cores.colors.base;
  return css`
    pointer-events: none;
    color: ${grey["300"]};
    &:not(.checked) {
      .custom-input {
        box-shadow: inset 0 0 0 1px ${grey["300"]};
      }
    }
    &.checked {
      .custom-input {
        background: ${grey["300"]};
        box-shadow: inset 0 0 0 1px ${grey["300"]};
      }
    }
  `;
};

export default StyledRadio;
