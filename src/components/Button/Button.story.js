import AMButton from "./Button";

export default {
  title: "Atoms/Button",
  component: AMButton,
};

// Option 1
// const Template = (args, { argTypes }) => ({
//   components: { AMButton },
//   props: Object.keys(argTypes),
//   template: '<AMButton v-bind="$props" />',
// });

// export const Primary = Template.bind({});
// Primary.args = {
//   variant: "primary",
//   label: "Button",
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   variant: "secondary",
//   label: "Button",
// };

// export const Ghost = Template.bind({});
// Ghost.args = {
//   variant: "ghost",
//   label: "Button",
// };

// Option 2
export const Default = () => ({
  render: (h) => h(AMButton),
});
