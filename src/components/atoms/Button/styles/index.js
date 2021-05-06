import styled, { css } from "vue-styled-components";
import DefaultStyling from "./default";
import LoaderStyling from "./states/loading";
import IconStyling from "./states/icon";

const toCss = (string) =>
  string
    .replace(/((?<=[a-z\d])[A-Z]|(?<=[A-Z\d])[A-Z](?=[a-z]))/g, "-$1")
    .toLowerCase();

const ObjectToCss = (object) => {
  return Object.entries(object[1]).map((styles) => {
    let property, value;
    if (styles[0] === "borderColor") {
      property = "box-shadow";
      value = `0 0 0 1px ${styles[1]}`;
    } else {
      property = toCss(styles[0]);
      value = styles[1];
    }
    return css`
      ${property}: ${value};
    `;
  });
};

let basicStyles,
  hoverStyles,
  disabledStyles,
  loadingDefault,
  loadingHover,
  loadingDisabled;

const StyledButton = (StyledProps) => {
  const { start, end, variant, disabled, buttonTheme } = StyledProps;
  for (const [key, value] of Object.entries(buttonTheme)) {
    if (key !== "default" && variant === key) {
      Object.entries(value).forEach((entry) => {
        if (entry[0] === "default") {
          basicStyles = ObjectToCss(entry);
          loadingDefault = Object.entries(entry[1]).filter(
            (item) => item[0] === "color"
          );
        } else if (entry[0] === "hover") {
          hoverStyles = ObjectToCss(entry);
          loadingHover = Object.entries(entry[1]).filter(
            (item) => item[0] === "color"
          );
        } else if (entry[0] === "disabled") {
          disabledStyles = ObjectToCss(entry);
          loadingDisabled = Object.entries(entry[1]).filter(
            (item) => item[0] === "color"
          );
        }
      });
    }
  }

  return styled.button`
    ${(props) => DefaultStyling(props)};
    ${IconStyling(start, end)};
    ${basicStyles};
    transition: all 0.15s;
    ${(props) => StateStyling(props, disabled)}
    ${(props) => LoaderStyling(props, loadingDefault[0][1])}
  `;
};

const StateStyling = (props, disabled) => {
  if (disabled) {
    return css`
      pointer-events: none;
      ${disabledStyles}
      ${(props) => LoaderStyling(props, loadingDisabled[0][1])}
    `;
  } else {
    return css`
      &:hover,
      &:focus {
        ${hoverStyles}
        ${(props) => LoaderStyling(props, loadingHover[0][1])}
      }
    `;
  }
};

const StyledAnchor = (start, end) =>
  StyledButton(start, end).withComponent("a");

export { StyledButton, StyledAnchor };
