import styled, { css } from "vue-styled-components";
import DefaultStyling from "./default";
import LoaderStyling from "./states/loading";
import IconStyling from "./states/icon";

const toCss = (string) =>
  string
    .replace(/((?<=[a-z\d])[A-Z]|(?<=[A-Z\d])[A-Z](?=[a-z]))/g, "-$1")
    .toLowerCase();

const StyledButton = (StyledProps) => {
  const { start, end, variant } = StyledProps;
  return styled.button`
    ${(props) => DefaultStyling(props)};
    ${(props) => Styling(props, variant)}
    ${IconStyling(start, end)};
    transition: all 0.15s;
  `;
};

const Styling = (props, variant) => {
  let baseStyle = [];
  let hoverStyle = [];
  let disabledStyle = [];
  const styles = props.theme.atoms.button[variant];
  for (const [key, value] of Object.entries(styles)) {
    const loaderColor = value.color ? value.color : "#FFFFFF";
    if (key === "default") {
      for (const [key, value] of Object.entries(value)) {
        let prop, style;
        prop = key;
        style = value;
        if (key === "borderColor") {
          prop = "box-shadow";
          style = `0 0 0 1px ${value}`;
        }
        baseStyle.push(css`
          ${toCss(prop)}: ${style};
        `);
      }
      baseStyle.push(
        css`
          ${LoaderStyling(props, loaderColor)}
        `
      );
    }
    if (key === "hover") {
      for (const [key, value] of Object.entries(value)) {
        let prop, style;
        prop = key;
        style = value;
        if (key === "borderColor") {
          prop = "box-shadow";
          style = `0 0 0 1px ${value}`;
        }
        hoverStyle.push(css`
          ${toCss(prop)}: ${style};
        `);
      }
      hoverStyle.push(
        css`
          ${LoaderStyling(props, loaderColor)}
        `
      );
    }
    if (key === "disabled") {
      for (const [key, value] of Object.entries(value)) {
        let prop, style;
        prop = key;
        style = value;
        if (key === "borderColor") {
          prop = "box-shadow";
          style = `0 0 0 1px ${value}`;
        }
        disabledStyle.push(css`
          ${toCss(prop)}: ${style};
        `);
      }
      disabledStyle.push(
        css`
          ${LoaderStyling(props, loaderColor)}
        `
      );
    }
  }

  const state = () => {
    return css`
      &.disabled {
        pointer-events: none;
        ${disabledStyle}
      }
      &:hover,
      &:focus {
        ${hoverStyle}
      }
    `;
  };

  return css`
    ${baseStyle}
    ${state()}
  `;
};

const StyledAnchor = (start, end) =>
  StyledButton(start, end).withComponent("a");

export { StyledButton, StyledAnchor };
