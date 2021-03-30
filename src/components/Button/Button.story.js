import AMButton from "./Button.vue";
import Documentation from "./Button.mdx";

export default {
  component: AMButton,
  title: "Design System/Atoms/Button",
  parameters: { docs: { page: Documentation } },
};

export const Primary = () => ({
  template: '<AMButton variant="primary" label="Button" />',
});

export const Secondary = () => ({
  template: '<AMButton label="Button" variant="secondary" />',
});

export const Ghost = () => ({
  template: '<AMButton label="Button" variant="ghost" />',
});

export const Icon = () => ({
  template: `
  <main>
    <section style="display:flex;justifyContent:space-evenly;width:100%;margin-bottom:32px;">
      <AMButton label="Button" variant="primary" iconStart="mail" />
      <AMButton label="Button" variant="secondary" iconStart="mail" />
      <AMButton label="Button" variant="ghost" iconStart="mail" />
    </section>
    <section style="display:flex;justifyContent:space-evenly;width:100%;">
      <AMButton label="Button" variant="primary" iconEnd="mail" />
      <AMButton label="Button" variant="secondary" iconEnd="mail" />
      <AMButton label="Button" variant="ghost" iconEnd="mail" />
    </section>
  </main>
  `,
});
