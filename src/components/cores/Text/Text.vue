<template>
  <component :is="TextComponent">
    <slot />
  </component>
</template>

<script>
import { StyledText } from "./styles/index";

export default {
  name: "AMText",
  props: {
    variant: {
      type: String,
      required: true,
    },
  },
  computed: {
    TextComponent() {
      const data = { variant: this.variant };
      return StyledText(data);
    },
  },
};
</script>
