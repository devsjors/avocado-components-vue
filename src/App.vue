<template>
  <div id="app">
    <button class="toggle-theme" @click="toggleTheme">Toggle Theme</button>
    <CustomThemeProvider :customTheme="determainTheme">
      <AMButton label="Button" />
      <AMButton href="/" label="Link" />
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
</style>
