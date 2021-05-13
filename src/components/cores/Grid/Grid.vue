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
  },
  data() {
    return {
      space: this.spacing,
      responsive: null,
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
      return StyledGridItem(this.responsive);
    },
  },
  created() {
    let object = {};
    const containerKeys = this.__theme.cores.container;
    if (Object.keys(this.$attrs).length > 0 === true) {
      Object.keys(containerKeys).forEach((key) => {
        Object.assign(object, { [key]: this.$attrs[key] });
      });
    } else {
      Object.keys(containerKeys).forEach((key) => {
        Object.assign(object, { [key]: undefined });
      });
    }
    this.$data.responsive = object;
  },
};
</script>
