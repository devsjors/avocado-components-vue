<template>
  <component :width="width" :height="height" viewBox="0 0 16 16" :is="svg" />
</template>

<script>
import IconMail from "./icons/IconMail";
import IconLocation from "./icons/IconLocation";
import IconExclamation from "./icons/IconExclamation";
import IconCheck from "./icons/IconCheck";
import IconSearch from "./icons/IconSearch";
import IconChevronDown from "./icons/IconChevronDown";

const icons = {
  mail: IconMail,
  location: IconLocation,
  exclamation: IconExclamation,
  check: IconCheck,
  search: IconSearch,
  chevron_down: IconChevronDown,
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
