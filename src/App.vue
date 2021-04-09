<template>
  <div id="app">
    <div class="toggle-theme">
      <p style="margin-bottom: 8px">
        {{ customTheme ? "Lequ" : "Avocado" }}Theme
      </p>
      <button @click="toggleTheme">Toggle Theme</button>
    </div>
    <CustomThemeProvider class="flex" :customTheme="determainTheme">
      <div class="flex-column">
        <p>Button / Default</p>
        <div>
          <AMButton variant="primary" label="Button" />
        </div>
        <div>
          <AMButton variant="secondary" label="Button" />
        </div>
        <div>
          <AMButton variant="ghost" label="Button" />
        </div>
        <div>
          <AMButton variant="primary" iconStart="mail" label="Button" />
        </div>
        <div>
          <AMButton variant="primary" iconEnd="mail" label="Button" />
        </div>
        <div>
          <AMButton variant="secondary" iconStart="mail" label="Button" />
        </div>
        <div>
          <AMButton variant="secondary" iconEnd="mail" label="Button" />
        </div>
        <div>
          <AMButton variant="ghost" iconEnd="mail" label="Button" />
        </div>
        <div>
          <AMButton variant="ghost" iconEnd="mail" label="Button" />
        </div>
      </div>
      <div class="flex-column">
        <p>Button / Disabled</p>
        <div>
          <AMButton variant="primary" label="Button" disabled />
        </div>
        <div>
          <AMButton variant="secondary" label="Button" disabled />
        </div>
        <div>
          <AMButton variant="ghost" label="Button" disabled />
        </div>
        <div>
          <AMButton variant="primary" iconStart="mail" label="Button" disabled />
        </div>
        <div>
          <AMButton variant="primary" iconEnd="mail" label="Button" disabled />
        </div>
        <div>
          <AMButton variant="secondary" iconStart="mail" label="Button" disabled />
        </div>
        <div>
          <AMButton variant="secondary" iconEnd="mail" label="Button" disabled />
        </div>
        <div>
          <AMButton variant="ghost" iconEnd="mail" label="Button" disabled />
        </div>
        <div>
          <AMButton variant="ghost" iconEnd="mail" label="Button" disabled />
        </div>
      </div>
      <div class="flex-column">
        <p>Button / Loading</p>
        <div>
          <AMButton variant="primary" label="Button" :loading="loading" />
        </div>
        <div>
          <AMButton variant="secondary" label="Button" :loading="loading" />
        </div>
        <div>
          <AMButton variant="ghost" label="Button" :loading="loading" />
        </div>
      </div>
      <div class="flex-column">
        <p>Link / Default</p>
        <div>
          <AMLink label="This is a clickable link" href="/" />
        </div>
        <div>
          <AMLink label="This is a clickable link" href="/" iconStart="mail" />
        </div>
        <div>
          <AMLink label="This is a clickable link" href="/" iconEnd="mail" />
        </div>
      </div>
      <div class="flex-column">
        <p>Link / Disabled</p>
        <div>
          <AMLink label="This is a clickable link" href="/" disabled />
        </div>
        <div>
          <AMLink label="This is a clickable link" href="/" iconStart="mail" disabled />
        </div>
        <div>
          <AMLink label="This is a clickable link" href="/" iconEnd="mail" disabled />
        </div>
      </div>
      <div class="flex-column">
        <p>Breadcrumb</p>
        <div>
          <AMBreadcrumb :breadcrumbs="breadcrumbItems" />
        </div>
      </div>
    </CustomThemeProvider>
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import CustomThemeProvider from "@/theme/Provider";
import LequTheme from "@/theme/DemoThemes/LequTheme";
import AMButton from "@/components/atoms/Button";
import AMLink from "@/components/atoms/Link";
import AMBreadcrumb from "@/components/molecules/Breadcrumb";

export default {
  name: "App",
  components: {
    CustomThemeProvider,
    AMButton,
    AMLink,
    AMBreadcrumb,
  },
  data() {
    return {
      customTheme: false,
      themeLequ: {},
      loading: true,
      breadcrumbItems: [
        { label: "Home", href: "/" },
        { label: "Project overview", href: "/" },
        { label: "Project detail", href: "/" },
      ],
    };
  },
  created() {
    this.themeLequ = LequTheme;
  },
  methods: {
    toggleTheme() {
      this.customTheme = !this.customTheme;
    },
  },
  computed: {
    determainTheme() {
      return this.customTheme ? this.themeLequ : null;
    },
  },
};
</script>

<style lang="css">
@import "./styles/reset.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 20px;
}

.toggle-theme {
  position: fixed;
  bottom: 20px;
  right: 20px;
}

.flex {
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
}
.flex-column {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 20px;
  gap: 20px;
}
</style>
