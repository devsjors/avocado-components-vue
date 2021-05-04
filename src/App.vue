<template>
  <div id="app">
    <div class="toggle-theme">
      <p style="margin-bottom: 8px">
        {{ customTheme ? "Lequ" : "Avocado" }}Theme
      </p>
      <button @click="toggleTheme">Toggle Theme</button>
    </div>
    <CustomThemeProvider :customTheme="determainTheme">
      <AMHeader>
        <AMHeaderName href="/">Logo</AMHeaderName>
        <AMHeaderNavigation>
          <AMHeaderMenuItem href="/cores" label="Cores" />
          <AMHeaderMenuItem href="/atoms" label="Atoms" />
          <AMHeaderMenuItem href="/molecules" label="Molecules" />
          <AMHeaderMenuItem href="/organisms" label="Organisms" />
          <AMHeaderMenu label="Components">
            <AMHeaderMenuItem href="/cores" label="Cores" />
            <AMHeaderMenuItem href="/atoms" label="Atoms" />
            <AMHeaderMenuItem href="/molecules" label="Molecules" />
            <AMHeaderMenuItem href="/organisms" label="Organisms" />
          </AMHeaderMenu>
        </AMHeaderNavigation>
      </AMHeader>
      <router-view />
    </CustomThemeProvider>
  </div>
</template>

<script>
import CustomThemeProvider from "@/theme/Provider";
import LequTheme from "@/theme/DemoThemes/LequTheme";

import AMHeader from "@/components/organisms/Header/Header";
import AMHeaderName from "@/components/organisms/Header/HeaderName";
import AMHeaderNavigation from "@/components/organisms/Header/HeaderNavigation";
import AMHeaderMenu from "@/components/organisms/Header/HeaderMenu";
import AMHeaderMenuItem from "@/components/organisms/Header/HeaderMenuItem";

export default {
  name: "App",
  components: {
    CustomThemeProvider,
    AMHeader,
    AMHeaderName,
    AMHeaderNavigation,
    AMHeaderMenu,
    AMHeaderMenuItem,
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
