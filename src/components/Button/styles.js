import styled from "vue-styled-components";

const StyledButton = styled("button")`
  border: none;
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  color: ${(props) => props.theme.atoms.button.textColor};
  background-color: ${(props) => props.theme.atoms.button.backgroundColor};
  padding: ${(props) => props.theme.atoms.button.padding};
  font-size: ${(props) => props.theme.atoms.button.fontSize};
  font-weight: ${(props) => props.theme.atoms.button.fontWeight};
  line-height: ${(props) => props.theme.atoms.button.lineHeight};
  text-transform: ${(props) => props.theme.atoms.button.textTransform};
  border-radius: ${(props) => props.theme.atoms.button.borderRadius};
  &:hover,
  &:focus {
    outline: none;
  }
`;

const StyledLink = StyledButton.withComponent("a");

export { StyledButton, StyledLink };
