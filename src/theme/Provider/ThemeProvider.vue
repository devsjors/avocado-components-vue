<template>
  <ThemeProvider :theme="theme">
    <slot />
  </ThemeProvider>
</template>

<script>
/* eslint-disable prettier/prettier */
import DefaultTheme from "../DefaultTheme";
import { ThemeProvider } from "vue-styled-components";

export default {
  name: "CustomThemeProvider",
  components: {
    ThemeProvider,
  },
  props: ["customTheme"],
  data() {
    return {
      theme: Object,
    };
  },
  created() {
    this.determainTheme();
  },
  watch: {
    customTheme() {
      this.determainTheme()
    }
  },
  methods: {
    mergeThemes(target, source) {
      const targetCopy = { ...target };
      const sourceCopy = { ...source };

      Object.keys(sourceCopy).forEach((sourcekey) => {
        Object.keys(sourceCopy).find((targetkey) => targetkey === sourcekey) !== undefined && typeof sourceCopy[sourcekey] === "object"
          ? targetCopy[sourcekey] = this.mergeThemes(targetCopy[sourcekey], sourceCopy[sourcekey])
          : targetCopy[sourcekey] = sourceCopy[sourcekey];
      });
      return targetCopy;
    },
    determainTheme() {
      this.theme = this.customTheme
        ? this.mergeThemes(DefaultTheme, this.customTheme)
        : DefaultTheme;
    },
  },
};
</script>
