<template>
  <component :as="as" :is="SubtitleComponent">
    <slot />
  </component>
</template>

<script>
import { StyledSubtitle } from "./styles/index";

export default {
  name: "AMSubtitles",
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
    SubtitleComponent() {
      const data = { variant: this.variant };
      return StyledSubtitle(data);
    },
  },
};
</script>
