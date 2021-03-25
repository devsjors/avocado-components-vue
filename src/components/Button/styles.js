import styled, { css } from "vue-styled-components";

const StyledButton = styled("button")`
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

const StyledLink = StyledButton.withComponent("a");

const DefaultStyling = (props) => {
  return css`
    border: none;
    text-decoration: none;
    cursor: pointer;
    display: inline-block;
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

export { StyledButton, StyledLink };
