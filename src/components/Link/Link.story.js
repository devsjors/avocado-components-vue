import AMLink from "./Link.vue";
import Documentation from "./Link.mdx";

export default {
  component: AMLink,
  title: "Design System/Atoms/Link",
  parameters: { docs: { page: Documentation } },
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
