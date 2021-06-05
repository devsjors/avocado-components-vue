<template>
  <div id="app">
    <CustomThemeProvider>
      <AMHeader>
        <AMHeaderName href="/">Logo</AMHeaderName>
        <AMHeaderNavigation>
          <AMHeaderMenuItem routerLink href="/sjors" label="Avocado Media Clone" />
          <AMHeaderMenuItem routerLink href="/lequ" label="Lequ Clone" />
          <AMHeaderMenuItem routerLink href="/documentation" label="Documentation" />
        </AMHeaderNavigation>
      </AMHeader>

      <router-view />

      <AMContainer :class="showGrid" class="top-0 w-full h-screen transform -translate-x-1/2 -z-1 left-1/2">
        <AMGrid container style="box-shadow: 0 0 0 1px #eeeeee">
          <AMGrid item class="h-screen" xs="4" />
          <AMGrid item class="h-screen" xs="4" style="box-shadow: 0 0 0 1px #eeeeee" />
          <AMGrid item class="h-screen" xs="4" />
        </AMGrid>
      </AMContainer>
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
      return window.location.pathname === "/lequ" ||
        window.location.pathname === "/usertest-part-2"
        ? "hidden"
        : "fixed";
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

#nav {
  margin-bottom: 32px;
}
</style>
