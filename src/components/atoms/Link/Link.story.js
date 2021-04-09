import AMLink from "./Link.vue";
import Documentation from "./Link.mdx";

const icons = {
  none: "",
  mail: "mail",
  location: "location",
};

export default {
  component: AMLink,
  title: "Design System/Atoms/Link",
  parameters: { docs: { page: Documentation }, options: { showPanel: false } },
  decorators: [
    () => ({ template: "<CustomThemeProvider><story/></CustomThemeProvider>" }),
  ],
  argTypes: {
    label: { control: { type: "text" } },
    href: { control: { type: "text" } },
    disabled: { control: { type: "boolean" } },
    iconStart: { control: { type: "select", options: icons } },
    iconEnd: { control: { type: "select", options: icons } },
  },
};

export const Default = () => ({
  template: '<AMLink label="This is a clickable link" href="#" />',
});

export const Icons = () => ({
  template:
    '<AMLink label="This is a clickable link with an icon" href="#" iconStart="mail" />',
});

export const Disabled = () => ({
  template:
    '<AMLink label="This is a disabled clickable link" href="#" disabled />',
});

const Template = (args, { argTypes }) => ({
  components: { AMLink },
  props: Object.keys(argTypes),
  template: '<AMLink v-bind="$props" />',
});

export const Playground = Template.bind({});
Playground.args = {
  label: "Projects",
  href: "/projects",
  iconEnd: "mail",
};
Playground.parameters = { options: { showPanel: true } };
