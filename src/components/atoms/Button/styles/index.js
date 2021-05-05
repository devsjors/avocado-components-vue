import styled, { css } from "vue-styled-components";
import DefaultStyling from "./default";
import PrimaryStyling from "./variants/primary";
import SecondaryStyling from "./variants/secondary";
import GhostStyling from "./variants/ghost";
import IconStyling from "./states/icon";

const toCss = (string) =>
  string
    .replace(/((?<=[a-z\d])[A-Z]|(?<=[A-Z\d])[A-Z](?=[a-z]))/g, "-$1")
    .toLowerCase();

const StyledButton = (StyledProps) => {
  const { start, end, variant, disabled, all } = StyledProps;
  let basicStyles, hoverStyles, disabledStyles;

  for (const [key, value] of Object.entries(all)) {
    if (key !== "default" && variant === key) {
      Object.entries(value).forEach((entry) => {
        if (entry[0] === "hover") {
          hoverStyles = Object.entries(entry[1]).map((sjors) => {
            return css`
              ${toCss(sjors[0])}: ${sjors[1]};
            `;
          });
        } else if (entry[0] === "disabled") {
          disabledStyles = Object.entries(entry[1]).map((sjors) => {
            return css`
              ${toCss(sjors[0])}: ${sjors[1]};
            `;
          });
        }
      });
      const defaults = Object.entries(value).filter((entry) => {
        return entry[0] !== "hover" && entry[0] !== "disabled" && entry;
      });
      basicStyles = defaults.map((item) => {
        return css`
          ${toCss(item[0])}: ${item[1]};
        `;
      });
    }
  }

  return styled.button`
    ${(props) => DefaultStyling(props)};
    ${(props) => variant === "primary" && PrimaryStyling(props, disabled)};
    ${(props) => variant === "secondary" && SecondaryStyling(props, disabled)};
    ${(props) => variant === "ghost" && GhostStyling(props, disabled)};
    ${IconStyling(start, end)};
    ${basicStyles}
    transition: all 0.15s;
    &:hover,
    &:focus {
      ${hoverStyles}
    }
    ${disabled && disabledStyles}
  `;
};

const StyledAnchor = (start, end) =>
  StyledButton(start, end).withComponent("a");

export { StyledButton, StyledAnchor };
