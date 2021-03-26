<template>
  <div id="app">
    <div class="toggle-theme">
      <p style="margin-bottom: 8px">
        {{ customTheme ? "Lequ" : "Avocado" }}Theme
      </p>
      <button @click="toggleTheme">Toggle Theme</button>
    </div>
    <CustomThemeProvider :customTheme="determainTheme">
      <div class="flex">
        <AMButton variant="primary" label="Button" />
        <AMButton variant="secondary" label="Button" />
        <AMButton variant="ghost" label="Button" />
        <AMButton iconEnd="mail" label="Button" />
        <AMButton iconStart="mail" label="Button" />
      </div>
      <div class="flex">
        <AMButton href="/" variant="primary" label="Link" />
        <AMButton href="/" variant="secondary" label="Link" />
        <AMButton href="/" variant="ghost" label="Link" />
        <AMButton iconEnd="mail" href="/" label="Link" />
        <AMButton iconStart="mail" href="/" label="Link" />
      </div>
    </CustomThemeProvider>
  </div>
</template>

<script>
import CustomThemeProvider from "@/theme/Provider";
import LequTheme from "@/theme/DemoThemes/LequTheme";
import AMButton from "./components/Button";

export default {
  name: "App",
  components: {
    CustomThemeProvider,
    AMButton,
  },
  data() {
    return {
      customTheme: false,
      themeLequ: {},
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
  flex-wrap: wrap;
  margin-bottom: 20px;
  gap: 20px;
}
</style>
