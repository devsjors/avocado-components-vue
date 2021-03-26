import styled, { css } from "vue-styled-components";

const StyledButton = (start, end) => styled.button`
  ${start ? IconLeft : ""}
  ${end ? IconRight : ""}
  ${(props) => DefaultStyling(props)}
  ${(props) => StateStyling(props)}
  color: ${(props) => props.theme.atoms.button.textColor};
  background-color: ${(props) => props.theme.atoms.button.backgroundColor};
  font-size: ${(props) => props.theme.atoms.button.fontSize};
  font-weight: ${(props) => props.theme.atoms.button.fontWeight};
  line-height: ${(props) => props.theme.atoms.button.lineHeight};
  text-transform: ${(props) => props.theme.atoms.button.textTransform};
  border-radius: ${(props) => props.theme.atoms.button.borderRadius};
`;

const StyledLink = (start, end) => StyledButton(start, end).withComponent("a");

const DefaultStyling = (props) => {
  return css`
    border: none;
    text-decoration: none;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    padding: ${(props) => props.theme.atoms.button.padding};
  `;
};

const StateStyling = (props) => {
  return css`
    &:hover,
    &:focus {
      outline: none;
    }
  `;
};

const IconLeft = () => {
  return css`
    svg {
      margin-right: 8px;
      fill: currentColor;
    }
  `;
};

const IconRight = () => {
  return css`
    svg {
      margin-left: 8px;
      fill: currentColor;
    }
  `;
};

export { StyledButton, StyledLink };
