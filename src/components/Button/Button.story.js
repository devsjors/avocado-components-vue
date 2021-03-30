/* eslint-disable prettier/prettier */
// import Vue from "vue";
import AMButton from "./Button";
import CustomThemeProvider from '../../theme/Provider';
import mdx from './testdox.mdx'

export default {
  component: AMButton,
  title: 'Components/Button'
};

const Template = (args, { argTypes }) => ({
  components: { AMButton },
  props: Object.keys(argTypes),
  template: '<AMButton :label="label" :variant="variant" />',
});

export const Primary = Template.bind({});
Primary.args = { label: 'Button', variant: 'primary' };
Primary.parameters = { docs: { page: mdx } }


export const Secondary = Template.bind({});
Secondary.args = { label: 'Button', variant: 'secondary' };

// export const Primary = () => {
//   const context = { props: { variant: "primary", label: "Button" } };
//   return { render: (h) => h(AMButton, context) };
// };

// export const Secondary = () => {
//   const context = { props: { variant: "secondary", label: "Button" } };
//   return { render: (h) => h(AMButton, context) };
// };

// export const Ghost = () => {
//   const context = { props: { variant: "ghost", label: "Button" } };
//   return { render: (h) => h(AMButton, context) };
// };

// export const Icons = () => {
//   return Vue.component("test", {
//     render(createElement) {
//       return createElement(
//         "div", { style: { width: "100%" } }, [
//           createElement("div", { style: { display: "flex", justifyContent: "space-evenly", width: "100%", "margin-bottom": "24px" } }, [
//             createElement(AMButton, { props: { variant: "primary", label: "Button", iconStart: "mail" } }),
//             createElement(AMButton, { props: { variant: "secondary", label: "Button", iconStart: "mail" } }),
//             createElement(AMButton, { props: { variant: "ghost", label: "Button", iconStart: "mail" } }),
//           ]),
//           createElement("div", { style: { display: "flex", justifyContent: "space-evenly", width: "100%" } }, [
//             createElement(AMButton, { props: { variant: "primary", label: "Button", iconEnd: "mail" } }),
//             createElement(AMButton, { props: { variant: "secondary", label: "Button", iconEnd: "mail" } }),
//             createElement(AMButton, { props: { variant: "ghost", label: "Button", iconEnd: "mail" } }),
//           ])
//         ]
//       );
//     },
//   });
// };
