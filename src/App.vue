<template>
  <div id="app">
    <CustomThemeProvider :customTheme="determainTheme">
      <div class="p-2 bg-white bg-opacity-50 toggle-theme">
        <p class="mb-2 text-right">
          {{ customTheme ? "Lequ" : "Avocado" }}Theme
        </p>
        <AMButton @click="toggleTheme" variant="secondary" label="Toggle Theme" />
      </div>
      <AMHeader>
        <AMHeaderName href="/">Logo</AMHeaderName>
        <AMHeaderNavigation>
          <AMHeaderMenuItem href="/cores" label="Cores" />
          <AMHeaderMenuItem href="/atoms" label="Atoms" />
          <AMHeaderMenuItem href="/molecules" label="Molecules" />
          <AMHeaderMenuItem href="/organisms" label="Organisms" />
          <AMHeaderMenuItem href="/sjors" label="Sjors" />
          <AMHeaderMenu label="Components">
            <AMHeaderMenuItem href="/cores" label="Cores" />
            <AMHeaderMenuItem href="/atoms" label="Atoms" />
            <AMHeaderMenuItem href="/molecules" label="Molecules" />
            <AMHeaderMenuItem href="/organisms" label="Organisms" />
          </AMHeaderMenu>
        </AMHeaderNavigation>
      </AMHeader>
      <router-view />

      <AMContainer style="z-index: -1" class="fixed top-0 w-full h-screen transform -translate-x-1/2 left-1/2">
        <AMGrid style="box-shadow: 0 0 0 1px #e4e4e4" container>
          <AMGrid class="h-screen" xs="4" item>hi</AMGrid>
          <AMGrid class="h-screen" xs="4" style="box-shadow: 0 0 0 1px #e4e4e4" item>hi</AMGrid>
          <AMGrid class="h-screen" xs="4" item>hi</AMGrid>
        </AMGrid>
      </AMContainer>
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
import AMButton from "@/components/atoms/Button";
import AMContainer from "@/components/cores/Container";
import AMGrid from "@/components/cores/Grid";

export default {
  name: "App",
  components: {
    CustomThemeProvider,
    AMHeader,
    AMHeaderName,
    AMHeaderNavigation,
    AMHeaderMenu,
    AMHeaderMenuItem,
    AMButton,
    AMContainer,
    AMGrid,
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
      // return this.customTheme ? this.themeLequ : null;
      return null;
      // return this.customTheme ? this.userTestSemTheme : null;
    },
  },
};
</script>

<style lang="css">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.toggle-theme {
  position: fixed;
  bottom: 0;
  right: 0;
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
