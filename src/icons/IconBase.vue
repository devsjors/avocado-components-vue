<template>
  <component :width="width" :height="height" viewBox="0 0 16 16" :is="svg" />
</template>

<script>
import IconMail from "./icons/IconMail";

const icons = {
  mail: IconMail,
};
export default {
  props: {
    name: String,
    width: {
      type: [String, Number],
      default: 16,
    },
    height: {
      type: [String, Number],
      default: 16,
    },
  },
  computed: {
    svg() {
      return icons[this.name];
    },
  },
};
</script>
