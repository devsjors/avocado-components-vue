import AMButton from "./Button.vue";
import Documentation from "./Button.mdx";

export default {
  component: AMButton,
  title: "Design System/Atoms/Button",
  parameters: { docs: { page: Documentation } },
};

export const Variants = () => ({
  template: `
  <section style="display:flex;justifyContent:space-evenly;width:100%;margin-bottom:32px;">
    <AMButton label="Button" variant="primary" />
    <AMButton label="Button" variant="secondary" />
    <AMButton label="Button" variant="ghost" />
  </section>
  `,
});

export const Icons = () => ({
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

export const Loading = () => ({
  template: `
  <section style="display:flex;justifyContent:space-evenly;width:100%;margin-bottom:32px;">
    <AMButton variant="primary" label="Button" loading />
    <AMButton label="Button" variant="secondary" loading />
    <AMButton label="Button" variant="ghost" loading />
  </section>
  `,
});

export const Disabled = () => ({
  template: `
  <section style="display:flex;justifyContent:space-evenly;width:100%;margin-bottom:32px;">
    <AMButton label="Button" variant="primary" disabled />
    <AMButton label="Button" variant="secondary" disabled />
    <AMButton label="Button" variant="ghost" disabled />
  </section>
  `,
});
