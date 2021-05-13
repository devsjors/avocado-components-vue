<template>
  <div id="app">
    <CustomThemeProvider>
      <AMHeader>
        <AMHeaderName href="/">Logo</AMHeaderName>
        <AMHeaderNavigation>
          <AMHeaderMenuItem href="/cores" label="Cores" />
          <AMHeaderMenuItem href="/atoms" label="Atoms" />
          <AMHeaderMenuItem href="/molecules" label="Molecules" />
          <AMHeaderMenuItem href="/organisms" label="Organisms" />
          <AMHeaderMenuItem href="/sjors" label="Sjors" />
          <AMHeaderMenuItem href="/lequ" label="Lequ" />
          <AMHeaderMenu label="Components">
            <AMHeaderMenuItem href="/cores" label="Cores" />
            <AMHeaderMenuItem href="/atoms" label="Atoms" />
            <AMHeaderMenuItem href="/molecules" label="Molecules" />
            <AMHeaderMenuItem href="/organisms" label="Organisms" />
          </AMHeaderMenu>
        </AMHeaderNavigation>
      </AMHeader>

      <router-view />

      <!-- <AMContainer :class="showGrid" class="top-0 w-full h-screen transform -translate-x-1/2 -z-1 left-1/2">
        <AMGrid container style="box-shadow: 0 0 0 1px #eeeeee">
          <AMGrid item class="h-screen" xs="4" />
          <AMGrid item class="h-screen" xs="4" style="box-shadow: 0 0 0 1px #eeeeee" />
          <AMGrid item class="h-screen" xs="4" />
        </AMGrid>
      </AMContainer> -->
    </CustomThemeProvider>
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import CustomThemeProvider from "@/theme/Provider";
import AMHeader from "@/components/organisms/Header/Header";
import AMHeaderName from "@/components/organisms/Header/HeaderName";
import AMHeaderNavigation from "@/components/organisms/Header/HeaderNavigation";
import AMHeaderMenu from "@/components/organisms/Header/HeaderMenu";
import AMHeaderMenuItem from "@/components/organisms/Header/HeaderMenuItem";
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
    AMContainer,
    AMGrid,
  },
  computed: {
    showGrid() {
      return window.location.pathname === "/lequ" ? "hidden" : "fixed";
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
