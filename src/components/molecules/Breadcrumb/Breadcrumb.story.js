import CustomThemeProvider from "../../../theme/Provider";

import AMBreadcrumb from "./Breadcrumb.vue";
import Documentation from "./Breadcrumb.mdx";

export default {
  component: AMBreadcrumb,
  title: "Design System/Molecules/Breadcrumb",
  parameters: { docs: { page: Documentation }, options: { showPanel: false } },
  decorators: [
    () => ({ template: "<CustomThemeProvider><story/></CustomThemeProvider>" }),
  ],
  argTypes: {
    breadcrumbs: { control: { type: "array" } },
  },
};

const Template = (args, { argTypes }) => ({
  components: { AMBreadcrumb },
  props: Object.keys(argTypes),
  template: '<AMBreadcrumb :breadcrumbs="breadcrumbItems" />',
});

export const Default = Template.bind({});
Default.args = {
  breadcrumbItems: [
    { label: "Home", href: "/" },
    { label: "Project overview", href: "/" },
    { label: "Project detail", href: "/" },
  ],
};
