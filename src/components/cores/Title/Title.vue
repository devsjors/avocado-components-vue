<template>
  <component :as="as" :is="TitleComponent">
    <slot />
  </component>
</template>

<script>
import { StyledTitle } from "./styles/index";

export default {
  name: "AMTitle",
  props: {
    variant: {
      type: String,
      required: true,
    },
    as: {
      type: String,
      required: true,
    },
  },
  computed: {
    TitleComponent() {
      const data = { variant: this.variant };
      return StyledTitle(data);
    },
  },
};
</script>
