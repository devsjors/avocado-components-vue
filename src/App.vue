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
        <p>Default</p>
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
          <AMButton variant="ghost" iconStart="mail" label="Button" />
        </div>
        <div>
          <AMButton variant="ghost" iconEnd="mail" label="Button" />
        </div>
      </div>
    </CustomThemeProvider>
  </div>
</template>

<script>
import CustomThemeProvider from "@/theme/Provider";
import LequTheme from "@/theme/DemoThemes/LequTheme";
import AMButton from "./components/Button/Button.vue";

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
