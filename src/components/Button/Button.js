import { StyledButton, StyledLink } from "./styles";

const AMButton = {
  functional: true,
  props: {
    label: {
      type: String,
      default: "Button",
      required: true,
    },
  },
  render(createElement, context) {
    // eslint-disable-next-line prettier/prettier
    const { data, props, data: { attrs: { href } } } = context;
    const { label } = props;
    const element = href === undefined ? StyledButton : StyledLink;

    return createElement(element, data, label);
  },
};

export default AMButton;
