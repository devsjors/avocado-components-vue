<template>
  <component :is="ContainerComponent">
    <slot />
  </component>
</template>

<script>
import StyledContainer from "./styles";

export default {
  name: "AMContainer",
  props: {
    maxWidth: {
      type: String,
      required: false,
    },
  },
  computed: {
    ContainerComponent() {
      const data = {
        maxWidth: this.maxWidth,
      };
      return StyledContainer(data);
    },
  },
};
</script>
