<template>
  <div id="app">
    <div class="toggle-theme">
      <p style="margin-bottom: 8px">
        {{ customTheme ? "Lequ" : "Avocado" }}Theme
      </p>
      <button @click="toggleTheme">Toggle Theme</button>
    </div>
    <CustomThemeProvider :customTheme="determainTheme">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/cores">Cores</router-link> |
        <router-link to="/atoms">Atoms</router-link> |
        <router-link to="/molecules">Molecules</router-link> |
        <router-link to="/organisms">Organisms</router-link> |
        <!-- <router-link to="/usertest-sem">User Test Sem</router-link> -->
      </div>
      <router-view />
    </CustomThemeProvider>
  </div>
</template>

<script>
import CustomThemeProvider from "@/theme/Provider";
import LequTheme from "@/theme/DemoThemes/LequTheme";
// import userTestSemTheme from "./theme/userTestSem";

export default {
  name: "App",
  components: {
    CustomThemeProvider,
  },
  data() {
    return {
      customTheme: false,
      themeLequ: {},
      userTestSemTheme: {},
    };
  },
  created() {
    this.themeLequ = LequTheme;
    // this.userTestSemTheme = userTestSemTheme;
  },
  methods: {
    toggleTheme() {
      this.customTheme = !this.customTheme;
    },
  },
  computed: {
    determainTheme() {
      return this.customTheme ? this.themeLequ : null;
      // return this.customTheme ? this.userTestSemTheme : null;
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
#nav {
  margin-bottom: 32px;
}
</style>
