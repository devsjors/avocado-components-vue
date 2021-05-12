<template>
  <ThemeProvider :theme="theme">
    <slot />
  </ThemeProvider>
</template>

<script>
import { ThemeProvider } from "vue-styled-components";

export default {
  name: "CustomThemeProvider",
  components: {
    ThemeProvider,
  },
  data() {
    return {
      theme: Object,
    };
  },
  created() {
    this.theme = this.__theme;
  },
};
</script>
