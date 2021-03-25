<template>
  <ThemeProvider :theme="theme">
    <slot></slot>
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
    this.theme = this.customTheme !== undefined
      ? (this.theme = this.mergeThemes(DefaultTheme, this.customTheme))
      : DefaultTheme;
  },
  methods: {
    mergeThemes(target, source) {
      Object.keys(source).forEach((sourcekey) => {
        if (Object.keys(source).find((targetkey) => targetkey === sourcekey) !== undefined && typeof source[sourcekey] === "object") {
          target[sourcekey] = this.mergeThemes(target[sourcekey], source[sourcekey]);
        } else {
          target[sourcekey] = source[sourcekey];
        }
      });
      return target;
    },
  },
};
</script>
