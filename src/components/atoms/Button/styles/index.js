import styled, { css } from "vue-styled-components";
import DefaultStyling from "./default";
import PrimaryStyling from "./variants/primary";
import SecondaryStyling from "./variants/secondary";
import GhostStyling from "./variants/ghost";
import IconStyling from "./states/icon";

const StyledButton = (StyledProps) => {
  const { start, end, variant, disabled, all } = StyledProps;

  console.log(all);
  return styled.button`
    ${(props) => DefaultStyling(props)};
    ${(props) => variant === "primary" && PrimaryStyling(props, disabled)};
    ${(props) => variant === "secondary" && SecondaryStyling(props, disabled)};
    ${(props) => variant === "ghost" && GhostStyling(props, disabled)};
    ${IconStyling(start, end)};
  `;
};

const StyledAnchor = (start, end) =>
  StyledButton(start, end).withComponent("a");

export { StyledButton, StyledAnchor };
