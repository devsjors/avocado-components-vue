<template>
  <component v-if="container" :is="GridComponent" class="grid-container">
    <slot />
  </component>
  <component v-else-if="item" :is="GridItemComponent" class="grid-item">
    <slot />
  </component>
</template>

<script>
import { StyledGrid, StyledGridItem } from "./styles";

export default {
  name: "AMGrid",
  props: {
    spacing: {
      type: String,
      required: false,
    },
    container: {
      type: Boolean,
      required: false,
    },
    item: {
      type: Boolean,
      required: false,
    },
    xs: {
      type: String,
      default: null,
      required: false,
    },
    sm: {
      type: String,
      default: null,
      required: false,
    },
    md: {
      type: String,
      default: null,
      required: false,
    },
    lg: {
      type: String,
      default: null,
      required: false,
    },
    xl: {
      type: String,
      default: null,
      required: false,
    },
    xxl: {
      type: String,
      default: null,
      required: false,
    },
  },
  data() {
    return {
      space: this.spacing,
    };
  },
  computed: {
    GridComponent() {
      const data = {
        spacing: this.spacing,
      };
      return StyledGrid(data);
    },
    GridItemComponent() {
      const data = {
        xs: this.xs,
        sm: this.sm,
        md: this.md,
        lg: this.lg,
        xl: this.xl,
        xxl: this.xxl,
      };
      return StyledGridItem(data);
    },
  },
};
</script>
