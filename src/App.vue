<template>
  <div id="app">
    <CustomThemeProvider>
      <AMHeader class="hidden">
        <AMHeaderName href="/">Logo</AMHeaderName>
        <AMHeaderNavigation>
          <!-- <AMHeaderMenuItem routerLink href="/cores" label="Cores" /> -->
          <!-- <AMHeaderMenuItem routerLink href="/atoms" label="Atoms" /> -->
          <!-- <AMHeaderMenuItem routerLink href="/molecules" label="Molecules" /> -->
          <!-- <AMHeaderMenuItem routerLink href="/organisms" label="Organisms" /> -->
          <!-- <AMHeaderMenuItem routerLink href="/sjors" label="Sjors" /> -->
          <!-- <AMHeaderMenuItem routerLink href="/lequ" label="Lequ" /> -->
          <AMHeaderMenuItem routerLink href="/usertest-part-1" label="Usertest - deel 1" />
          <AMHeaderMenuItem routerLink href="/usertest-part-2" label="Usertest - deel 2" />
          <AMHeaderMenuItem routerLink href="/documentation" label="Documentation" />
          <!-- <AMHeaderMenu label="Components">
            <AMHeaderMenuItem routerLink href="/cores" label="Cores" />
            <AMHeaderMenuItem routerLink href="/atoms" label="Atoms" />
            <AMHeaderMenuItem routerLink href="/molecules" label="Molecules" />
            <AMHeaderMenuItem routerLink href="/organisms" label="Organisms" />
          </AMHeaderMenu> -->
        </AMHeaderNavigation>
      </AMHeader>

      <router-view />

      <AMContainer :class="showGrid" class="top-0 w-full h-screen transform -translate-x-1/2 -z-1 left-1/2">
        <AMGrid container style="box-shadow: 0 0 0 1px #eeeeee">
          <AMGrid item class="h-screen" sm="4" />
          <AMGrid item class="h-screen" sm="4" style="box-shadow: 0 0 0 1px #eeeeee" />
          <AMGrid item class="h-screen" sm="4" />
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
        window.location.pathname === "/usertest-part-2" ||
        window.location.pathname === "/video" ||
        window.location.pathname === "/video2"
        ? "hidden"
        : "fixed";
    },
  },
};
</script>

<style lang="css">
header {
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
</style>
