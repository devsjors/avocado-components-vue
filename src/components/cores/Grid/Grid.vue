<template>
  <component :is="GridComponent" class="grid-container">
    <slot />
  </component>
</template>

<script>
import StyledGrid from "./styles";

export default {
  name: "AMGrid",
  components: {},
  props: {
    spacing: {
      type: String,
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
  },
};
</script>
