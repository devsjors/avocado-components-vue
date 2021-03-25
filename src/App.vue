<template>
  <div id="app">
    <!-- <CustomThemeProvider :customTheme="themeLequ"> -->
    <CustomThemeProvider>
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
      themeLequ: {},
    };
  },
  created() {
    this.themeLequ = LequTheme;
  },
};
</script>

<style lang="css">
@import "./styles/reset.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
