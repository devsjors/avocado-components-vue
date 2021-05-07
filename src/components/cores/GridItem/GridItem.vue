<template>
  <component :is="GridItemComponent" class="grid-item">
    <slot />
  </component>
</template>

<script>
import StyledGridItem from "./styles";

export default {
  name: "AMGridItem",
  components: {},
  props: {
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
  computed: {
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
